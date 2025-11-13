# Voiceflow Chatbot Setup Guide

This guide explains how to integrate the Voiceflow FAQ chatbot with your actual Voiceflow project.

## Current Status

✅ **Milestone 2 Complete** - Demo chatbot is running on all public pages

Currently, the app is running in **DEMO MODE** with a visual demo chatbot. To integrate with a real Voiceflow agent, follow the steps below.

---

## Prerequisites

1. **Voiceflow Account**: Sign up at [voiceflow.com](https://www.voiceflow.com/)
2. **FAQ Agent Created**: Build your FAQ conversation flows in Voiceflow
3. **Agent Published**: Publish your agent to production

---

## Step 1: Create Your FAQ Agent in Voiceflow

### Recommended Conversation Flows

Your FAQ agent should handle these common questions:

1. **What is this diagnostic method?**
   - Explain hair strand analysis
   - Biomarker detection
   - Early cancer indicators

2. **Who is eligible to participate?**
   - Age requirements (18+)
   - Hair length requirements (1/2 inch minimum)
   - Chemotherapy restrictions

3. **How does the process work?**
   - Kit request steps
   - Sample collection process
   - Timeline expectations

4. **Is my data private?**
   - Anonymization process
   - HIPAA compliance
   - Data encryption

5. **How long does it take?**
   - Kit delivery time (5-7 days)
   - Analysis timeline (2-3 weeks)
   - Result communication

6. **What do I do with the kit?**
   - Collection instructions
   - Packaging guidelines
   - Return shipping

---

## Step 2: Get Your Voiceflow Project ID

1. Open your Voiceflow project
2. Click on **Integrations** in the left sidebar
3. Select **Web Chat Widget**
4. Copy your **Project ID** (looks like: `6a7b8c9d0e1f2g3h4i5j6k7l`)

---

## Step 3: Configure the Integration

### Option A: Use the Real Voiceflow Component

1. Open `src/config/voiceflow.js`
2. Replace `YOUR_FAQ_PROJECT_ID` with your actual project ID:

```javascript
export const VOICEFLOW_CONFIG = {
  faq: {
    projectID: '6a7b8c9d0e1f2g3h4i5j6k7l', // Your actual project ID
    versionID: 'production',
    title: 'FAQ Assistant',
    description: 'Ask me anything about our diagnostic program',
    color: '#2563EB',
    position: 'bottom-right',
  },
  // ... rest of config
};

export const DEMO_MODE = false; // Set to false to use real Voiceflow
```

3. Replace `DemoChatbot` imports with `FAQChatbot` in these files:
   - `src/pages/LandingPage.jsx`
   - `src/pages/PrivacyPage.jsx`
   - `src/pages/TermsPage.jsx`

Example:
```javascript
// Change from:
import DemoChatbot from '../components/DemoChatbot';

// To:
import FAQChatbot from '../components/FAQChatbot';
```

---

## Step 4: Customize Widget Appearance

Edit `src/components/FAQChatbot.jsx` to customize:

### Colors
```javascript
assistant: {
  color: '#2563EB', // Change to match your brand
  // ...
}
```

### Position
```javascript
assistant: {
  position: 'bottom-right', // or 'bottom-left'
  // ...
}
```

### Custom Styling
Add a custom stylesheet URL:
```javascript
stylesheet: 'https://yourdomain.com/chatbot-styles.css',
```

---

## Step 5: Test the Integration

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Navigate to http://localhost:5173

3. Look for the blue chat button in the bottom-right corner

4. Click to open the chatbot

5. Test your conversation flows:
   - Ask common questions
   - Test navigation between topics
   - Verify responses are accurate
   - Check mobile responsiveness

---

## Troubleshooting

### Widget Not Appearing

**Check browser console** for errors:
```
Right-click → Inspect → Console tab
```

Common issues:
- Invalid project ID
- Script blocked by ad blocker
- CORS issues (ensure domain is whitelisted in Voiceflow)

### Widget Appears But Doesn't Respond

1. **Check Voiceflow Dashboard**:
   - Ensure agent is published to production
   - Verify all intents are properly connected
   - Test in Voiceflow's built-in simulator

2. **Check Network Tab**:
   - Open DevTools → Network
   - Look for failed API calls
   - Check error messages

### Styling Issues

If the widget doesn't match your theme:
- Update the `color` property in configuration
- Add custom CSS via the `stylesheet` property
- Use Voiceflow's widget customization settings

---

## Demo vs. Production Mode

### Demo Mode (Current)
- Visual mock chatbot
- Shows example questions
- No backend required
- Perfect for presentations

### Production Mode (With Voiceflow)
- Real AI-powered responses
- Connected to Voiceflow backend
- Requires Voiceflow account
- Learns from user interactions

To switch between modes:
```javascript
// In src/config/voiceflow.js
export const DEMO_MODE = false; // true for demo, false for production
```

---

## Security Best Practices

1. **Never commit API keys** to version control
   - Use environment variables for sensitive data
   - Add `.env` to `.gitignore`

2. **Whitelist your domains** in Voiceflow:
   - Add production domain
   - Add staging domain
   - Restrict to trusted origins

3. **Monitor usage**:
   - Check Voiceflow analytics
   - Set up usage alerts
   - Review conversation logs regularly

---

## Next Steps (Milestone 4)

After FAQ chatbot is working, you'll add a second chatbot for the dashboard:

**Step-by-Step Guide Chatbot**
- Available only to logged-in users
- Guides through sample collection
- Context-aware based on request status
- Uses user information for personalization

See spec.md for Milestone 4 details.

---

## Support

- **Voiceflow Documentation**: https://docs.voiceflow.com/
- **Voiceflow Community**: https://community.voiceflow.com/
- **Technical Issues**: Check browser console and Voiceflow logs

---

**Status**: ✅ Milestone 2 Complete (Demo Mode)
**Next**: Configure with real Voiceflow credentials when ready
