# Troubleshooting Contact Form Issues

## "Network error. Please check your connection and try again."

This error usually means the API route is failing. Here's how to fix it:

### Step 1: Check if .env.local file exists

Make sure you have a `.env.local` file in the root directory with your MongoDB connection string:

```env
MONGODB_URI=mongodb+srv://Rishabh:YOUR_PASSWORD@cluster0.hdsluwq.mongodb.net/
MONGODB_DB_NAME=portfolio
```

**Important:** Replace `YOUR_PASSWORD` with your actual MongoDB password!

### Step 2: Verify MongoDB Connection

1. **Check your MongoDB Atlas connection:**
   - Go to MongoDB Atlas dashboard
   - Make sure your IP address is whitelisted (or use `0.0.0.0/0` for development)
   - Verify your password is correct

2. **Test the connection string:**
   - Make sure there are no extra spaces in `.env.local`
   - The connection string should look exactly like:
     ```
     MONGODB_URI=mongodb+srv://Rishabh:password123@cluster0.hdsluwq.mongodb.net/
     ```

### Step 3: Restart Your Development Server

After updating `.env.local`, you MUST restart the server:

1. Stop the server (Ctrl+C in terminal)
2. Start it again: `npm run dev`
3. Try submitting the form again

### Step 4: Check Server Console

Look at your terminal/console where `npm run dev` is running. You should see:
- Any MongoDB connection errors
- Any API route errors
- Error messages that will help identify the issue

### Step 5: Common Issues and Solutions

#### Issue: "MONGODB_URI is not configured"
**Solution:** Create `.env.local` file with your MongoDB connection string

#### Issue: "Database connection failed"
**Solution:** 
- Check your MongoDB password is correct
- Verify your IP is whitelisted in MongoDB Atlas
- Make sure the connection string format is correct

#### Issue: "Network error" persists
**Solution:**
1. Check if the server is running (`npm run dev`)
2. Check browser console (F12) for detailed errors
3. Check server terminal for error messages
4. Verify `.env.local` file is in the root directory (same level as `package.json`)

### Step 6: Test the API Directly

You can test if the API is working by visiting:
```
http://localhost:3000/api/contact
```

If you see a JSON response (even an error), the API route is working. If you see "Cannot GET /api/contact", that's normal - the GET route is for admin use.

### Step 7: Check Browser Console

1. Open browser DevTools (F12)
2. Go to Console tab
3. Try submitting the form
4. Look for any error messages

### Still Not Working?

1. **Verify .env.local exists:**
   ```bash
   # In your project root directory
   ls -la .env.local
   # or on Windows PowerShell:
   dir .env.local
   ```

2. **Check file contents:**
   Make sure `.env.local` contains:
   ```
   MONGODB_URI=mongodb+srv://Rishabh:YOUR_ACTUAL_PASSWORD@cluster0.hdsluwq.mongodb.net/
   MONGODB_DB_NAME=portfolio
   ```

3. **Restart everything:**
   - Stop the dev server
   - Delete `.next` folder: `rm -rf .next` (or `rmdir /s .next` on Windows)
   - Run `npm run dev` again

4. **Check MongoDB Atlas:**
   - Login to MongoDB Atlas
   - Go to Database Access
   - Make sure your user has read/write permissions
   - Go to Network Access
   - Make sure your IP is allowed (or use `0.0.0.0/0` for development)

### Quick Test

Try this in your browser console (F12):
```javascript
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test',
    email: 'test@example.com',
    message: 'Test message'
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error)
```

This will show you the exact error message from the API.






