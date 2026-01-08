import nodemailer from 'nodemailer'

/**
 * Email configuration and utility functions
 */

// Create transporter for sending emails
const createTransporter = () => {
  // Check if email is configured
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('Email configuration missing. Emails will not be sent.')
    return null
  }

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
}

/**
 * Send email notification when contact form is submitted
 */
export async function sendContactNotification(
  senderName: string,
  senderEmail: string,
  message: string
): Promise<boolean> {
  try {
    const recipientEmail = process.env.CONTACT_EMAIL || process.env.EMAIL_USER
    
    if (!recipientEmail) {
      console.error('No recipient email configured')
      return false
    }

    const transporter = createTransporter()
    if (!transporter) {
      console.error('Email transporter not configured')
      return false
    }

    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      replyTo: senderEmail,
      subject: `New Contact Form Message from ${senderName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0284c7 0%, #7c3aed 50%, #ec4899 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .info-box { background: white; padding: 15px; margin: 15px 0; border-radius: 5px; border-left: 4px solid #0284c7; }
              .message-box { background: white; padding: 20px; margin: 15px 0; border-radius: 5px; border: 1px solid #e5e7eb; }
              .button { display: inline-block; padding: 10px 20px; background: #0284c7; color: white; text-decoration: none; border-radius: 5px; margin-top: 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📧 New Contact Form Message</h1>
              </div>
              <div class="content">
                <p>You have received a new message from your portfolio contact form:</p>
                
                <div class="info-box">
                  <strong>👤 Name:</strong> ${senderName}<br>
                  <strong>📧 Email:</strong> <a href="mailto:${senderEmail}">${senderEmail}</a><br>
                  <strong>📅 Date:</strong> ${new Date().toLocaleString()}
                </div>
                
                <div class="message-box">
                  <strong>💬 Message:</strong>
                  <p style="margin-top: 10px; white-space: pre-wrap;">${message}</p>
                </div>
                
                <p style="margin-top: 20px;">
                  <a href="mailto:${senderEmail}" class="button">Reply to ${senderName}</a>
                </p>
                
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 12px;">
                  This email was sent from your portfolio contact form.<br>
                  To reply, simply click the button above or reply directly to this email.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Message

Name: ${senderName}
Email: ${senderEmail}
Date: ${new Date().toLocaleString()}

Message:
${message}

---
Reply to: ${senderEmail}
      `,
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.messageId)
    return true
  } catch (error) {
    console.error('Error sending email:', error)
    return false
  }
}

/**
 * Send auto-reply confirmation email to the sender
 */
export async function sendAutoReply(
  senderName: string,
  senderEmail: string
): Promise<boolean> {
  try {
    // Only send auto-reply if enabled
    if (process.env.EMAIL_AUTO_REPLY !== 'true') {
      return true // Not an error, just disabled
    }

    const transporter = createTransporter()
    if (!transporter) {
      return false
    }

    const mailOptions = {
      from: `"Rishabh Srivastava" <${process.env.EMAIL_USER}>`,
      to: senderEmail,
      subject: 'Thank you for contacting me!',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0284c7 0%, #7c3aed 50%, #ec4899 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You for Your Message!</h1>
              </div>
              <div class="content">
                <p>Hi ${senderName},</p>
                <p>Thank you for reaching out through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
                <p>Best regards,<br><strong>Rishabh Srivastava</strong></p>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    await transporter.sendMail(mailOptions)
    return true
  } catch (error) {
    console.error('Error sending auto-reply:', error)
    return false
  }
}






