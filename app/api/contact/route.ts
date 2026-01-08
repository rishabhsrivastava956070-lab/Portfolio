import { NextResponse } from 'next/server'
import { getDatabase } from '@/lib/mongodb'
import { sendContactNotification, sendAutoReply } from '@/lib/email'

/**
 * API route to handle contact form submissions
 * Saves messages to MongoDB and sends email notifications
 */
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'All fields are required' 
        },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid email address' 
        },
        { status: 400 }
      )
    }

    // Check MongoDB connection
    if (!process.env.MONGODB_URI) {
      console.error('MONGODB_URI is not configured')
      return NextResponse.json(
        { 
          success: false, 
          error: 'Server configuration error. Please contact the administrator.' 
        },
        { status: 500 }
      )
    }

    // Connect to database
    let db
    try {
      db = await getDatabase()
    } catch (dbError) {
      console.error('MongoDB connection error:', dbError)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Database connection failed. Please try again later.' 
        },
        { status: 500 }
      )
    }

    const collection = db.collection('contacts')

    // Insert the contact message
    const result = await collection.insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
      read: false, // Track if message has been read
      emailSent: false, // Track if email notification was sent
    })

    // Send email notification to portfolio owner (optional - won't fail if not configured)
    let emailSent = false
    if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        emailSent = await sendContactNotification(name, email, message)
        
        // Update the document if email was sent successfully
        if (emailSent) {
          await collection.updateOne(
            { _id: result.insertedId },
            { $set: { emailSent: true, emailSentAt: new Date() } }
          )
        }

        // Send auto-reply to sender (optional)
        if (process.env.EMAIL_AUTO_REPLY === 'true') {
          await sendAutoReply(name, email)
        }
      } catch (emailError) {
        console.error('Email sending error (non-fatal):', emailError)
        // Don't fail the request if email fails - message is still saved to DB
      }
    } else {
      console.log('Email not configured - message saved to database only')
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully!',
      id: result.insertedId,
      emailSent: emailSent
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send message. Please try again later.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

/**
 * GET route to retrieve contact messages (for admin use)
 * You might want to add authentication here
 */
export async function GET() {
  try {
    const db = await getDatabase()
    const collection = db.collection('contacts')
    
    // Get all messages, sorted by newest first
    const messages = await collection
      .find({})
      .sort({ createdAt: -1 })
      .limit(50)
      .toArray()

    return NextResponse.json({ 
      success: true, 
      count: messages.length,
      messages 
    })
  } catch (error) {
    console.error('Error fetching messages:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch messages',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

