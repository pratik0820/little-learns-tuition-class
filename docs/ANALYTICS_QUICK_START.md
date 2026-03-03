# Analytics Quick Start

## 🚀 Get Started in 5 Minutes

### Step 1: Create Google Analytics Account
1. Visit: https://analytics.google.com/
2. Click "Start measuring"
3. Create account → Create property → Add web stream
4. Copy your Measurement ID (looks like `G-XXXXXXXXXX`)

### Step 2: Add to Your Website
1. Create `.env` file in `tuition-website` folder:
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   (Replace with your actual ID)

### Step 3: Deploy
1. Add environment variable in Vercel:
   - Settings → Environment Variables
   - Name: `VITE_GA_MEASUREMENT_ID`
   - Value: Your Measurement ID
   
2. Push your code:
   ```bash
   git add .
   git commit -m "Add analytics tracking"
   git push
   ```

### Step 4: Verify
1. Visit your website
2. Go to Google Analytics → Reports → Realtime
3. You should see yourself as an active visitor!

## 📊 What You Can Track

✅ Number of visitors (daily, weekly, monthly)
✅ Visitor locations (cities, states)
✅ Popular pages
✅ Form submissions
✅ WhatsApp button clicks
✅ Device types (mobile vs desktop)
✅ Traffic sources (Google, social media, direct)

## 🔍 Where to Find Data

- **Realtime**: See current visitors
- **Acquisition**: How people find your site
- **Engagement**: Most popular pages
- **Demographics**: Visitor locations
- **Events**: Form submissions, WhatsApp clicks

## 💡 Pro Tips

1. Check analytics weekly to understand visitor patterns
2. Focus on mobile optimization if most visitors use phones
3. See which pages get the most traffic
4. Track form submission rates to improve conversions

## 📖 Need More Help?

See [ANALYTICS_SETUP_GUIDE.md](./ANALYTICS_SETUP_GUIDE.md) for detailed instructions.

---

That's it! Your visitor tracking is ready to go. 🎉
