# Vercel Deployment Guide

## Problem: Courses Page Not Loading on Vercel

If the courses page loads on localhost but not on Vercel, it's likely because the environment variable `NEXT_PUBLIC_REMOTE_SERVER` is not set in Vercel.

## Solution: Set Environment Variable in Vercel

### Step 1: Get Your Render Backend URL

1. Go to your Render dashboard
2. Find your backend service
3. Copy the service URL (e.g., `https://your-app-name.onrender.com`)

### Step 2: Set Environment Variable in Vercel

1. Go to your Vercel project dashboard
2. Click on **Settings** → **Environment Variables**
3. Add a new environment variable:
   - **Name:** `NEXT_PUBLIC_REMOTE_SERVER`
   - **Value:** Your Render backend URL (e.g., `https://your-app-name.onrender.com`)
   - **Environment:** Select all (Production, Preview, Development)
4. Click **Save**

### Step 3: Redeploy

After setting the environment variable, you need to redeploy:

1. Go to **Deployments** tab
2. Click the **⋯** menu on the latest deployment
3. Select **Redeploy**

Or simply push a new commit to trigger a new deployment.

## Verify Configuration

After redeploying, check the browser console. You should see:
- `🔗 API Base URL: https://your-app-name.onrender.com` (in development mode)
- No warnings about `NEXT_PUBLIC_REMOTE_SERVER` not being set

## Troubleshooting

### Still Not Working?

1. **Check Browser Console**
   - Open browser DevTools (F12)
   - Look for error messages in the Console tab
   - Check Network tab to see if API calls are being made

2. **Verify Backend is Running**
   - Test your Render backend URL directly: `https://your-app-name.onrender.com/api/courses`
   - Should return JSON data

3. **Check CORS Configuration**
   - Ensure your backend allows requests from your Vercel domain
   - Backend should have CORS configured to allow `*.vercel.app` domains

4. **Verify Environment Variable**
   - In Vercel, go to Settings → Environment Variables
   - Confirm `NEXT_PUBLIC_REMOTE_SERVER` is set correctly
   - Make sure it's enabled for the environment you're testing (Production/Preview)

5. **Check Network Requests**
   - In browser DevTools → Network tab
   - Look for failed requests to `/api/courses`
   - Check the request URL - it should point to your Render backend, not localhost

## Example Environment Variable

```
NEXT_PUBLIC_REMOTE_SERVER=https://kambaz-backend.onrender.com
```

**Important:** 
- Do NOT include a trailing slash
- Use `https://` (not `http://`)
- The URL should be your Render service URL

## Backend CORS Configuration

Your backend (`kambaz-node-server/index.js`) should already be configured to allow Vercel domains:

```javascript
const allowedOrigins = [
  "http://localhost:3000",
  /\.vercel\.app$/
];
```

This regex pattern allows all `*.vercel.app` domains.

## Testing Locally

To test with your Render backend locally, create `.env.local`:

```bash
NEXT_PUBLIC_REMOTE_SERVER=https://your-app-name.onrender.com
```

Then restart your Next.js dev server.

