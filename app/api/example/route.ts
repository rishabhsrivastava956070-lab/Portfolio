import { NextResponse } from 'next/server'
import { getDatabase } from '@/lib/mongodb'

/**
 * Example API route showing how to use MongoDB connection
 * This is just a template - you can modify it based on your needs
 */
export async function GET() {
  try {
    const db = await getDatabase()
    
    // Example: Get a collection
    const collection = db.collection('example')
    
    // Example: Find documents
    const documents = await collection.find({}).limit(10).toArray()
    
    return NextResponse.json({ 
      success: true, 
      message: 'MongoDB connection successful!',
      count: documents.length,
      data: documents 
    })
  } catch (error) {
    console.error('MongoDB connection error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to connect to MongoDB',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

/**
 * Example POST route for inserting data
 */
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const db = await getDatabase()
    const collection = db.collection('example')
    
    // Insert document
    const result = await collection.insertOne(body)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Document inserted successfully',
      insertedId: result.insertedId 
    })
  } catch (error) {
    console.error('MongoDB insert error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to insert document',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}






