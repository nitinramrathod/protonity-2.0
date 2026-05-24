# Resend Email Integration Setup Guide

## Overview
This project now uses **Resend** for sending transactional emails for two purposes:
1. **Contact Form** - Send inquiry notifications to admin and confirmation to user
2. **Callback Request** - Send confirmation to user and notification to sales team

## Installation

The required packages have already been installed:
- `resend` - Email service provider
- `@react-email/render` - Email template rendering

## Setup Instructions

### 1. Get Your Resend API Key
1. Go to [Resend.com](https://resend.com)
2. Create a free account
3. Navigate to API Keys section
4. Copy your API key

### 2. Configure Environment Variables
Create a `.env.local` file in the project root with the following variables:

```env
# Required: Your Resend API Key
RESEND_API_KEY=re_your_actual_api_key_here

# Email sender address (must be verified in Resend)
RESEND_FROM_EMAIL=noreply@protonity.com

# Email recipients
CONTACT_EMAIL_RECIPIENT=admin@protonity.com
CALLBACK_EMAIL_RECIPIENT=sales@protonity.com
```

### 3. Verify Sender Email (Important)
In Resend dashboard:
1. Go to **Domains** or **From Addresses**
2. Add your sender email (e.g., noreply@protonity.com)
3. Follow verification instructions

## Files Created/Modified

### New Files:
- `lib/resend.ts` - Resend client initialization
- `emails/ContactEmail.tsx` - Contact form email template
- `emails/CallbackEmail.tsx` - Callback request email template
- `.env.example` - Environment variable template

### Modified Files:
- `app/api/contact/route.ts` - Integrated Resend for contact emails
- `app/api/callback/route.ts` - Integrated Resend for callback emails

## Email Templates

### Contact Form Email (`emails/ContactEmail.tsx`)
Sent when user submits the contact form.

**Recipients:**
- Admin: `CONTACT_EMAIL_RECIPIENT`
- User: Their provided email

**Content:**
- Inquiry details (name, email, phone, business type, message)
- Call-to-action with 2-hour response time
- Professional styling with gradient header

### Callback Request Email (`emails/CallbackEmail.tsx`)
Sent when user requests a callback.

**Recipients:**
- User: Confirmation email at `noreply@protonity.com`
- Sales: `CALLBACK_EMAIL_RECIPIENT`

**Content:**
- Service interested in
- Contact details
- Next steps information
- Expected response time (30 minutes)
- Contact information

## API Routes

### POST `/api/contact`
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "businessType": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been received. We will contact you within 2 hours."
}
```

### POST `/api/callback`
Handles callback requests.

**Request Body:**
```json
{
  "name": "string (optional)",
  "phone": "string",
  "reason": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Callback request received! We will call you within 30 minutes."
}
```

## Customization

### Changing Email Templates
Edit the respective files in the `emails/` folder:
- Modify styling in the `style` props
- Update content and text as needed
- Both templates accept props for dynamic content

### Changing Recipient Emails
Update environment variables in `.env.local`:
- `CONTACT_EMAIL_RECIPIENT` - Where contact form submissions go
- `CALLBACK_EMAIL_RECIPIENT` - Where callback requests go
- `RESEND_FROM_EMAIL` - Sender address (must match verified email in Resend)

### Sending Additional Emails
To send additional types of emails:
1. Create a new template component in `emails/` folder
2. Import and use `resend.emails.send()` in your API route
3. Add any new recipient emails to `.env.local`

## Error Handling

The API routes include error handling for:
- Invalid/missing fields
- Invalid email formats
- Invalid phone numbers
- Email sending failures
- General server errors

## Testing

To test the emails locally:

1. Use a tool like Postman or REST Client
2. Send POST request to your API endpoint:
   - `http://localhost:3000/api/contact`
   - `http://localhost:3000/api/callback`
3. Include proper request body
4. Check Resend dashboard for email logs

## Monitoring

In Resend dashboard, you can:
- View email delivery logs
- Check bounce rates
- Monitor email opens and clicks
- Manage API keys
- Track usage and quota

## Common Issues

### Email Not Sending
1. Check `RESEND_API_KEY` is set correctly
2. Verify sender email is added and verified in Resend
3. Check email recipient addresses are valid
4. Check browser console and server logs for errors

### Template Not Rendering
1. Ensure `@react-email/render` is installed
2. Check component syntax in template files
3. Verify all required props are passed to components

### CORS/Network Issues
1. Ensure API is running on same server
2. Check environment variables are loaded
3. Verify no firewall blocking Resend requests

## Next Steps

Consider adding:
1. Database logging for all inquiries
2. WhatsApp/SMS notifications via Twilio
3. Automated follow-up emails
4. Email analytics and tracking
5. Multi-language email templates
6. Dynamic email customization based on business type

## Support

For Resend-specific issues, visit [Resend Documentation](https://resend.com/docs)
