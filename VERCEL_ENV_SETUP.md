# Vercel Environment Variable Setup

## ⚠️ Important: Add Analytics to Vercel

Your Google Analytics is now configured locally, but you need to add it to Vercel for it to work on your live website.

### Steps to Add Environment Variable to Vercel:

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select your project: `little-learns-tuition-class`

2. **Navigate to Settings**
   - Click on "Settings" tab
   - Click on "Environment Variables" in the left sidebar

3. **Add New Variable**
   - Click "Add New" button
   - Fill in the details:
     - **Name**: `VITE_GA_MEASUREMENT_ID`
     - **Value**: `G-PXS6PNR0LX`
     - **Environment**: Select all (Production, Preview, Development)
   - Click "Save"

4. **Redeploy Your Site**
   - Go to "Deployments" tab
   - Click the three dots (...) on the latest deployment
   - Click "Redeploy"
   - OR just push new code and it will auto-deploy

### Verify Analytics is Working:

1. Visit your live website: https://your-site.vercel.app
2. Go to Google Analytics: https://analytics.google.com/
3. Click "Reports" → "Realtime"
4. You should see yourself as an active visitor!

### Your Measurement ID:
```
G-PXS6PNR0LX
```

---

✅ Local setup is complete!
⏳ Waiting for Vercel environment variable setup
