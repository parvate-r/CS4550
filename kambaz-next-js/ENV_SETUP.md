# Environment Variable Setup

## Backend API URL Configuration

The frontend needs to know where the backend API is running. Configure this using environment variables.

### For Next.js (Current Setup)

Create a `.env.local` file in the `kambaz-next-js` directory:

```bash
# For local development (defaults to http://localhost:4000 if not set)
NEXT_PUBLIC_REMOTE_SERVER=http://localhost:4000

# For production/deployment
# NEXT_PUBLIC_REMOTE_SERVER=https://your-render-app.onrender.com
```

**Important:** In Next.js, client-side environment variables must be prefixed with `NEXT_PUBLIC_` to be accessible in the browser.

### For Vite (Alternative)

If you switch to Vite, use:

```bash
VITE_REMOTE_SERVER=http://localhost:4000
# or
VITE_REMOTE_SERVER=https://your-render-app.onrender.com
```

### Default Behavior

If no environment variable is set, the app defaults to `http://localhost:4000`.

### Notes

- The `.env.local` file should be added to `.gitignore` (it usually is by default)
- For production deployments, set the environment variable in your hosting platform (Vercel, Render, etc.)
- The API service automatically detects and uses the appropriate environment variable


