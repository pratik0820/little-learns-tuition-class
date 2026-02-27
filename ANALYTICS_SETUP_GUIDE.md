# Google Analytics 4 Setup Guide

This guide will help you set up visitor tracking for your tuition website using Google Analytics 4 (GA4).

## What You'll Track

With this implementation, you can track:
- **Number of visitors** - Total and unique visitors
- **Visitor demographics** - Location, device type, browser
- **Page views** - Which pages are most popular
- **User behavior** - Time on site, bounce rate, navigation flow
- **Form submissions** - Track enquiry form completions
- **WhatsApp clicks** - See how many people click to contact you
- **Course interest** - Which classes get the most attention

## Setup Steps

### Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring" or "Admin" (gear icon)
4. Click "Create Account"
5. Enter account name (e.g., "Little Learns Tuition")
6. Configure data sharing settings (recommended to keep defaults)
7. Click "Next"

### Step 2: Create a Property

1. Enter property name: "Little Learns Website"
2. Select your timezone: "India Standard Time"
3. Select currency: "Indian Rupee (₹)"
4. Click "Next"

### Step 3: Set Up Data Stream

1. Select platform: "Web"
2. Enter your website URL: `https://your-domain.vercel.app`
3. Enter stream name: "Little Learns Website"
4. Click "Create stream"

### Step 4: Get Your Measurement ID

1. After creating the stream, you'll see your **Measurement ID**
2. It looks like: `G-XXXXXXXXXX`
3. Copy this ID - you'll need it in the next step

### Step 5: Configure Your Website

1. Create a `.env` file in the `tuition-website` folder:
   ```bash
   # In the tuition-website directory
   cp .env.example .env
   ```

2. Open the `.env` file and add your Measurement ID:
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   Replace `G-XXXXXXXXXX` with your actual Measurement ID

3. **Important**: Add `.env` to your `.gitignore` file (already done)

### Step 6: Deploy to Vercel

1. Add the environment variable to Vercel:
   - Go to your Vercel dashboard
   - Select your project
   - Go to "Settings" → "Environment Variables"
   - Add new variable:
     - Name: `VITE_GA_MEASUREMENT_ID`
     - Value: Your Measurement ID (e.g., `G-XXXXXXXXXX`)
     - Select all environments (Production, Preview, Development)
   - Click "Save"

2. Redeploy your website:
   ```bash
   git add .
   git commit -m "Add Google Analytics tracking"
   git push
   ```

### Step 7: Verify Tracking is Working

1. Visit your website
2. Go to Google Analytics
3. Click "Reports" → "Realtime"
4. You should see yourself as an active user
5. Navigate through different pages to verify page tracking

## What Data You Can See

### In Google Analytics Dashboard:

1. **Realtime Report**
   - See who's on your site right now
   - What pages they're viewing
   - Where they're from

2. **Acquisition Report**
   - How visitors found your site (Google search, direct, social media)
   - Which marketing channels work best

3. **Engagement Report**
   - Most popular pages
   - Average time on site
   - Bounce rate

4. **Demographics Report**
   - Visitor location (city, state, country)
   - Age and gender (estimated)
   - Interests

5. **Tech Report**
   - Device types (mobile, desktop, tablet)
   - Browsers used
   - Screen resolutions

6. **Events Report**
   - Form submissions
   - WhatsApp clicks
   - Button clicks
   - Course interest

## Custom Events Being Tracked

The following custom events are automatically tracked:

1. **form_submission** - When someone submits the enquiry form
2. **whatsapp_click** - When someone clicks WhatsApp button
3. **button_click** - General button interactions
4. **course_interest** - When someone shows interest in a specific course

## Privacy Considerations

Google Analytics 4 is designed to be privacy-friendly:
- No personally identifiable information (PII) is collected
- IP addresses are anonymized
- Complies with GDPR and other privacy regulations
- Users can opt-out via browser settings

## Tips for Better Insights

1. **Check Analytics Weekly**
   - Monitor visitor trends
   - Identify peak traffic times
   - See which pages need improvement

2. **Set Up Goals**
   - Track form submissions as conversions
   - Monitor WhatsApp click-through rate

3. **Use UTM Parameters**
   - Add UTM codes to social media links
   - Track which posts drive traffic

4. **Mobile vs Desktop**
   - Check if most visitors use mobile
   - Ensure mobile experience is optimized

## Troubleshooting

### Not Seeing Data?

1. Check that `.env` file has correct Measurement ID
2. Verify environment variable is set in Vercel
3. Clear browser cache and revisit site
4. Check browser console for errors
5. Wait 24-48 hours for full data processing

### Data Looks Wrong?

1. Exclude your own visits (use GA4 IP exclusion)
2. Enable Google Signals for better demographics
3. Check that tracking code is on all pages

## Need Help?

- [Google Analytics Help Center](https://support.google.com/analytics)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [GA4 Events Documentation](https://support.google.com/analytics/answer/9322688)

## Alternative Analytics Solutions

If you prefer simpler or more privacy-focused options:

1. **Vercel Analytics** - Built-in, simple, privacy-friendly
2. **Plausible** - Lightweight, privacy-focused (paid)
3. **Umami** - Self-hosted, open-source
4. **Simple Analytics** - Privacy-focused (paid)

---

Your analytics tracking is now set up! Once you add your Measurement ID and deploy, you'll start seeing visitor data in your Google Analytics dashboard.
