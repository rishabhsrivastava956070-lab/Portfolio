# MongoDB Setup Guide

## Step 1: Create Environment File

1. Create a file named `.env.local` in the root directory of your project
2. Copy the contents from `env.example.txt` into `.env.local`
3. **IMPORTANT**: Replace `<db_password>` with your actual MongoDB password

Your `.env.local` should look like this:
```
MONGODB_URI=mongodb+srv://Rishabh:YOUR_ACTUAL_PASSWORD@cluster0.hdsluwq.mongodb.net/
MONGODB_DB_NAME=portfolio
```

## Step 2: Verify MongoDB Connection

The MongoDB connection utility is already set up in `lib/mongodb.ts`. 

### Test the Connection

You can test your MongoDB connection by:

1. **Using the Example API Route**: 
   - Start your development server: `npm run dev`
   - Visit: `http://localhost:3000/api/example`
   - You should see a success message if the connection works

2. **Or create your own API route**:
   ```typescript
   import { getDatabase } from '@/lib/mongodb'
   
   export async function GET() {
     const db = await getDatabase()
     // Your database operations here
   }
   ```

## Step 3: Using MongoDB in Your App

### In API Routes

```typescript
import { getDatabase } from '@/lib/mongodb'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const db = await getDatabase()
    const collection = db.collection('your-collection')
    const data = await collection.find({}).toArray()
    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }
}
```

### Example: Contact Form Submission

You can use this to save contact form submissions:

```typescript
// app/api/contact/route.ts
import { getDatabase } from '@/lib/mongodb'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const db = await getDatabase()
    const collection = db.collection('contacts')
    
    const result = await collection.insertOne({
      ...body,
      createdAt: new Date()
    })
    
    return NextResponse.json({ 
      success: true, 
      id: result.insertedId 
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to save message' }, 
      { status: 500 }
    )
  }
}
```

## Security Notes

- ✅ `.env.local` is already in `.gitignore` - your credentials won't be committed
- ✅ Never commit your actual password to version control
- ✅ Use environment variables for all sensitive data
- ✅ In production (Vercel, etc.), add `MONGODB_URI` in your deployment platform's environment variables

## Troubleshooting

1. **Connection Error**: Make sure your MongoDB password doesn't contain special characters that need URL encoding
2. **Network Access**: Ensure your IP is whitelisted in MongoDB Atlas (or use 0.0.0.0/0 for development)
3. **Database Name**: The default database name is 'portfolio', but you can change it in `.env.local`

## Next Steps

- Update the contact form to actually save submissions to MongoDB
- Create collections for projects, blog posts, or other data you want to store
- Set up proper error handling and validation






