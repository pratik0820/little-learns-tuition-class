# Registration Form Setup - Complete Guide

## ✅ What's Been Configured

Your EmailJS integration is now fully set up and ready to use!

### Configuration Details:
- **Service ID**: `service_umokzm5`
- **Template ID**: `template_9kfbnm9`
- **Public Key**: `nbctJJqQkhdYfLDd5`
- **Recipient Email**: `littlelearns.contacts@gmail.com`

### Files Updated:
1. ✅ `.env` - EmailJS credentials added
2. ✅ `emailService.js` - EmailJS integration implemented
3. ✅ `RegistrationForm.jsx` - Comprehensive registration form
4. ✅ `Contact.jsx` - Updated to use registration form
5. ✅ `@emailjs/browser` package installed

## 📧 EmailJS Template Setup

You need to configure your EmailJS template to match the form fields.

### Step 1: Go to EmailJS Dashboard
Visit: https://dashboard.emailjs.com/admin/templates/template_9kfbnm9

### Step 2: Set Email Recipient
- **To Email**: `littlelearns.contacts@gmail.com`
- **From Name**: `Little Learns Registration`
- **Reply To**: `{{parent_email}}`

### Step 3: Set Subject Line
```
New Student Registration - {{student_name}}
```

### Step 4: Set Email Body Template
Copy and paste this template:

```
NEW STUDENT REGISTRATION
========================

STUDENT INFORMATION:
-------------------
Name: {{student_name}}
First Name: {{student_first_name}}
Middle Name: {{student_middle_name}}
Surname: {{student_surname}}
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
This registration was submitted through the Little Learns website.
Submitted on: {{submission_date}}
```

### Step 5: Save Template
Click "Save" in the EmailJS dashboard.

## 🧪 Testing the Form

1. **Start the development server**:
   ```bash
   cd tuition-website
   npm run dev
   ```

2. **Navigate to Contact page**:
   - Go to `http://localhost:5173/contact`
   - Or click "Enroll Now" from the home page

3. **Fill out the registration form**:
   - Enter test student information
   - Enter test parent information
   - Submit the form

4. **Check your email**:
   - Look for email at `littlelearns.contacts@gmail.com`
   - Verify all fields are populated correctly

## 🔍 Troubleshooting

### Email not received?

1. **Check EmailJS Dashboard Logs**:
   - Go to https://dashboard.emailjs.com/admin
   - Check "History" tab for recent sends
   - Look for error messages

2. **Check Browser Console**:
   - Open browser DevTools (F12)
   - Look for error messages in Console tab
   - Common errors:
     - "Email service not configured" - Check .env file
     - "Failed to send" - Check EmailJS service status

3. **Verify Environment Variables**:
   ```bash
   # Make sure .env file has these lines:
   VITE_EMAILJS_SERVICE_ID=service_umokzm5
   VITE_EMAILJS_TEMPLATE_ID=template_9kfbnm9
   VITE_EMAILJS_PUBLIC_KEY=nbctJJqQkhdYfLDd5
   ```

4. **Restart Development Server**:
   - Stop the server (Ctrl+C)
   - Run `npm run dev` again
   - Environment variables are loaded on startup

### Template variables not showing?

- Variable names must match exactly (case-sensitive)
- Check for typos in EmailJS template
- Refer to `EMAILJS_TEMPLATE.md` for correct variable names

### Form shows error message?

- Check browser console for detailed error
- Verify EmailJS service is active in dashboard
- Check if you've exceeded free tier limit (200 emails/month)

## 📊 EmailJS Free Tier Limits

- **200 emails per month**
- **Unlimited templates**
- **Unlimited services**

If you need more emails, upgrade to a paid plan at https://www.emailjs.com/pricing/

## 🎯 What Happens When Form is Submitted

1. User fills out registration form
2. Form validates all required fields
3. EmailJS sends email to `littlelearns.contacts@gmail.com`
4. User sees success message
5. You receive email with all registration details
6. You can reply directly to parent's email

## 📱 Next Steps

1. ✅ Configure EmailJS template (see Step 2 above)
2. ✅ Test the form with real data
3. ✅ Check email delivery
4. ✅ Set up email notifications on your phone
5. ✅ Create a process for responding to registrations

## 💡 Optional Enhancements

### Auto-Reply to Parents
Create a second EmailJS template to automatically send confirmation to parents.

### Store Registrations in Database
Integrate with a backend service to store registration data.

### WhatsApp Notification
Get notified on WhatsApp when new registration arrives.

### Google Sheets Integration
Automatically add registrations to a Google Sheet for tracking.

## 📞 Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

**Your registration form is ready to use! Just configure the EmailJS template and start receiving registrations.**
