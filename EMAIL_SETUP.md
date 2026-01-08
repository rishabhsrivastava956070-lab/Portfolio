# Email Setup Guide for Contact Form

## Overview
The contact form now sends email notifications to your email address when someone submits a message. This guide will help you set it up.

## Setup Instructions

### Option 1: Gmail (Recommended for Quick Setup)

1. **Enable 2-Step Verification**
   - Go to your Google Account settings: https://myaccount.google.com/
   - Navigate to Security > 2-Step Verification
   - Enable it if not already enabled

2. **Create an App Password**
   - Still in Security settings, find "App passwords"
   - Click "App passwords"
   - Select "Mail" as the app and "Other" as the device
   - Enter "Portfolio Contact Form" as the name
   - Click "Generate"
   - Copy the 16-character password (you'll need this)

3. **Update .env.local**
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=rishabhsrivastava796@gmail.com
   EMAIL_PASS=your_16_character_app_password_here
   CONTACT_EMAIL=rishabhsrivastava796@gmail.com
   EMAIL_AUTO_REPLY=true
   ```

### Option 2: Other Email Providers

#### Outlook/Hotmail
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your_email@outlook.com
EMAIL_PASS=your_password
CONTACT_EMAIL=your_email@outlook.com
```

#### Yahoo Mail
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your_email@yahoo.com
EMAIL_PASS=your_app_password
CONTACT_EMAIL=your_email@yahoo.com
```

#### Custom SMTP Server
```env
EMAIL_HOST=your_smtp_server.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your_email@domain.com
EMAIL_PASS=your_password
CONTACT_EMAIL=your_email@domain.com
```

## Environment Variables Explained

- **EMAIL_HOST**: Your email provider's SMTP server
- **EMAIL_PORT**: Usually 587 (TLS) or 465 (SSL)
- **EMAIL_SECURE**: Set to `true` for port 465, `false` for port 587
- **EMAIL_USER**: Your email address
- **EMAIL_PASS**: Your email password or app password
- **CONTACT_EMAIL**: Where you want to receive contact form messages (usually same as EMAIL_USER)
- **EMAIL_AUTO_REPLY**: Set to `true` to send automatic thank-you emails to form submitters

## Testing

1. Make sure your `.env.local` file is configured correctly
2. Restart your development server: `npm run dev`
3. Submit a test message through the contact form
4. Check your email inbox for the notification

## Troubleshooting

### Email not sending?

1. **Check your .env.local file** - Make sure all variables are set correctly
2. **Check console logs** - Look for error messages in your terminal
3. **Verify App Password** - For Gmail, make sure you're using an App Password, not your regular password
4. **Check firewall/network** - Some networks block SMTP ports
5. **Try different port** - Switch between 587 and 465, and update EMAIL_SECURE accordingly

### Common Errors

- **"Invalid login"**: Wrong password or not using App Password for Gmail
- **"Connection timeout"**: Check EMAIL_HOST and EMAIL_PORT
- **"Authentication failed"**: Verify EMAIL_USER and EMAIL_PASS are correct

## Security Notes

- ✅ Never commit `.env.local` to version control (already in .gitignore)
- ✅ Use App Passwords instead of your main password when possible
- ✅ In production, set these variables in your hosting platform's environment settings

## Alternative: Email Services

For production, consider using dedicated email services:

- **Resend** (https://resend.com) - Modern API-first email service
- **SendGrid** (https://sendgrid.com) - Popular transactional email service
- **Mailgun** (https://mailgun.com) - Developer-friendly email API
- **AWS SES** (https://aws.amazon.com/ses/) - Amazon's email service

These services provide better deliverability and don't require SMTP configuration.

## Production Deployment

When deploying to Vercel, Netlify, or other platforms:

1. Add all email environment variables in your platform's dashboard
2. Make sure `CONTACT_EMAIL` is set to your email address
3. Test the contact form after deployment






