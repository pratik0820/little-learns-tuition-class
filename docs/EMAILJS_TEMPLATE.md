# EmailJS Template Configuration

Use this template in your EmailJS dashboard for the registration form emails.

## Template Setup

1. Go to https://dashboard.emailjs.com/admin/templates
2. Edit your template: `template_9kfbnm9`
3. Use the template below

## Email Template

### Subject Line:
```
New Student Registration - {{student_name}}
```

### Email Body:
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

## Available Template Variables

All these variables are automatically populated from the registration form:

- `{{student_name}}` - Full student name (First Middle Surname)
- `{{student_first_name}}` - Student's first name
- `{{student_middle_name}}` - Student's middle name
- `{{student_surname}}` - Student's surname
- `{{student_standard}}` - Current standard (1-5)
- `{{student_age}}` - Student's age (or "Not provided")
- `{{student_school}}` - Current school name (or "Not provided")
- `{{parent_name}}` - Parent/Guardian name
- `{{parent_email}}` - Parent's email address
- `{{parent_contact}}` - Parent's contact number
- `{{alternate_contact}}` - Alternate contact number (or "Not provided")
- `{{address}}` - Complete address
- `{{previous_tuition}}` - Yes/No/Not specified
- `{{specific_needs}}` - Special requirements (or "None mentioned")
- `{{submission_date}}` - Date and time of submission (IST)

## Email Settings

### To Email:
```
littlelearns.contacts@gmail.com
```

### From Name:
```
Little Learns Registration
```

### Reply To:
```
{{parent_email}}
```

This allows you to reply directly to the parent who submitted the registration.

## Testing

After setting up the template:

1. Go to your website's contact page
2. Fill out the registration form with test data
3. Submit the form
4. Check your email inbox at `littlelearns.contacts@gmail.com`
5. Verify all fields are populated correctly

## Troubleshooting

- **Variables showing as {{variable_name}}**: Variable name mismatch - check spelling
- **Email not received**: Check EmailJS dashboard logs for errors
- **Some fields empty**: Those fields were optional and not filled in the form
- **Wrong email address**: Update the "To Email" in EmailJS template settings

## Auto-Reply Template (Optional)

You can also create an auto-reply template to send to parents:

### Subject:
```
Registration Received - Little Learns
```

### Body:
```
Dear {{parent_name}},

Thank you for registering {{student_first_name}} for our tuition classes!

We have received your registration for Standard {{student_standard}} and will review the details shortly. Our team will contact you within 24 hours at {{parent_contact}} to discuss:

- Available batch timings
- Fee structure
- Start date
- Any specific requirements you mentioned

If you have any urgent questions, please feel free to call us or reply to this email.

Best regards,
Little Learns Team
```

To enable auto-reply, create a second template and trigger it from the form submission.
