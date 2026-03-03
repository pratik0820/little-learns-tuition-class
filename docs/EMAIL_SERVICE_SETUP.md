# Email Service Setup Guide

The registration form currently uses a simple `mailto:` link approach. When a user submits the registration form, it will open their default email client with the registration details pre-filled.

## Current Implementation

The form uses `mailto:littlelearns.contact@gmail.com` to send registration data. This is the simplest approach and requires no additional setup.

### Pros:
- No configuration needed
- Works immediately
- No external dependencies
- Free

### Cons:
- Requires user to have an email client configured
- User sees the email before sending
- Not fully automated

## Recommended: EmailJS Integration

For a better user experience, integrate EmailJS for automated email sending.

### Setup Steps:

1. **Sign up for EmailJS**
   - Go to https://www.emailjs.com/
   - Create a free account (allows 200 emails/month)

2. **Add Email Service**
   - Go to Email Services
   - Click "Add New Service"
   - Choose Gmail (or your preferred provider)
   - Connect your `littlelearns.contact@gmail.com` account
   - Note your Service ID

3. **Create Email Template**
   - Go to Email Templates
   - Click "Create New Template"
   - Use this template:

```
Subject: New Student Registration - {{student_name}}

NEW STUDENT REGISTRATION
========================

STUDENT INFORMATION:
-------------------
Name: {{student_name}}
Standard: {{student_standard}}
Age: {{student_age}}
School: {{student_school}}

PARENT/GUARDIAN INFORMATION:
---------------------------
Name: {{parent_name}}
Email: {{parent_email}}
Contact: {{parent_contact}}
Alternate Contact: {{alternate_contact}}
Address: {{address}}

ADDITIONAL INFORMATION:
----------------------
Previous Tuition: {{previous_tuition}}
Specific Needs: {{specific_needs}}

---
Submitted on: {{submission_date}}
```

   - Note your Template ID

4. **Get Public Key**
   - Go to Account > General
   - Copy your Public Key

5. **Install EmailJS Package**
   ```bash
   npm install @emailjs/browser
   ```

6. **Update Environment Variables**
   Add to your `.env` file:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

7. **Update Email Service**
   In `src/services/emailService.js`, uncomment the EmailJS implementation and comment out the mailto implementation.

## Alternative: Backend API

If you have a backend server, you can create an API endpoint to handle email sending:

1. Create a backend endpoint (Node.js example):
   ```javascript
   app.post('/api/register', async (req, res) => {
     const formData = req.body;
     // Send email using nodemailer or similar
     // Store in database if needed
     res.json({ success: true });
   });
   ```

2. Update `src/services/emailService.js` to use the API implementation.

## Testing

After setup, test the registration form:
1. Fill out all required fields
2. Submit the form
3. Check your email inbox for the registration details
4. Verify all information is correctly formatted

## Troubleshooting

- **Emails not sending**: Check your EmailJS dashboard for error logs
- **Template variables missing**: Ensure variable names match exactly
- **Rate limit exceeded**: EmailJS free tier has 200 emails/month limit
- **Gmail blocking**: Enable "Less secure app access" or use App Passwords

## Support

For EmailJS support: https://www.emailjs.com/docs/
For custom implementation help: Contact your developer
