# Diagnostic Kit Request Web Application

A React-based web application for managing diagnostic kit requests and sample processing, featuring AI-powered chatbot assistance via Voiceflow.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [First-Time Setup](#first-time-setup)
- [Running the Application](#running-the-application)
- [Login Credentials](#login-credentials)
- [Application Structure](#application-structure)
- [Troubleshooting](#troubleshooting)
- [Documentation](#documentation)

---

## 🎯 Overview

This application provides a complete workflow for diagnostic kit requests, including:
- Public landing page with information about the research program
- User authentication and dashboard
- Kit request management with status tracking
- AI-powered FAQ and Step-by-Step Guide chatbots

---

## ✨ Features

### Public Pages
- **Landing Page**: Program information, "How It Works" section, team profiles
- **Privacy Policy**: Data handling and HIPAA compliance information
- **Terms of Use**: Participation requirements and legal terms
- **FAQ Chatbot**: AI assistant for general questions (Voiceflow powered)

### Authenticated Features
- **User Dashboard**: Overview of kit requests with statistics
- **Request Management**: View all requests with color-coded status badges
- **Profile Page**: User account information
- **Kit Request Flow**: Multi-step process for requesting new kits
- **Step-by-Step Guide Chatbot**: Personalized guidance for sample collection

---

## 🛠️ Tech Stack

- **Frontend**: React 19.x with Vite
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v3
- **Forms**: React Hook Form
- **State Management**: React Context API
- **AI Chatbots**: Voiceflow integration
- **Build Tool**: Vite

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed on your machine:

### Required Software

1. **Node.js** (v18.x or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

3. **Git** (optional, for version control)
   - Download from: https://git-scm.com/
   - Verify installation: `git --version`

### Recommended Software

- **Code Editor**: Visual Studio Code (https://code.visualstudio.com/)
- **Browser**: Chrome, Firefox, or Safari (latest version)

---

## 🚀 First-Time Setup

Follow these steps if you're setting up the application for the first time:

### Step 1: Navigate to Project Directory

Open your terminal/command prompt and navigate to the project folder where the app source code is stored:

```bash
cd "[local folder name]"
```

> **Note**: Replace the path with your actual project location if different.

### Step 2: Install Dependencies

Install all required npm packages (this may take 2-5 minutes):

```bash
npm install
```

You should see output showing packages being installed. Wait until you see a message like:
```
added XXX packages, and audited XXX packages in XXs
```

### Step 3: Verify Installation

Check that all dependencies were installed correctly:

```bash
npm list --depth=0
```

You should see a list of installed packages including:
- react
- react-dom
- react-router-dom
- tailwindcss
- vite

### Step 4: Run the Application

Start the development server:

```bash
npm run dev
```

You should see output similar to:
```
VITE v5.4.21  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Step 5: Access the Application

Open your web browser and navigate to:
```
http://localhost:5173
```

You should see the Landing Page of the Diagnostic Kit application.

### Step 6: Test Login

1. Click the **"Login"** button in the navigation bar
2. Use these credentials:
   - **Username**: `bob`
   - **Password**: `demo`
3. You should be redirected to the Dashboard

---

## 🔄 Running the Application (Subsequent Times)

If you've already completed the first-time setup and want to run the app again:

### Quick Start (3 Steps)

1. **Open Terminal**
   - On Mac: Open "Terminal" app
   - On Windows: Open "Command Prompt" or "PowerShell"

2. **Navigate to Project Directory**
   ```bash
   cd "[local folder name]"
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   - Navigate to: http://localhost:5173

### That's It! 🎉

The application should now be running. No need to reinstall dependencies unless you've pulled new code changes.

---

## 🔑 Login Credentials

### Demo Account

- **Username**: `bob`
- **Password**: `demo`

### User Profile (Hardcoded Demo Data)

- **Name**: Bob User
- **Email**: bob@demo.com
- **Phone**: +1 (555) 123-4567
- **Member Since**: January 2024

### Sample Kit Requests

The demo account includes 3 sample requests:
1. **KR-2024-001** - Status: Pending Approval
2. **KR-2024-002** - Status: Kit Shipped
3. **KR-2024-003** - Status: Sample Received

---

## 📁 Application Structure

```
diagnostic-kit-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Base UI components (Button, Card, Badge, Modal)
│   │   ├── Navigation.jsx  # Main navigation bar
│   │   ├── DashboardLayout.jsx
│   │   ├── PrivateRoute.jsx
│   │   ├── FAQChatbot.jsx  # Voiceflow FAQ chatbot (Landing Page)
│   │   └── StepByStepGuide.jsx  # Voiceflow Guide chatbot (Dashboard)
│   │
│   ├── pages/              # Page components
│   │   ├── LandingPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── PrivacyPage.jsx
│   │   ├── TermsPage.jsx
│   │   ├── DashboardHome.jsx
│   │   ├── MyRequests.jsx
│   │   ├── ProfilePage.jsx
│   │   └── RequestKit.jsx
│   │
│   ├── contexts/           # React Context for state management
│   │   └── AuthContext.jsx
│   │
│   ├── config/             # Configuration files
│   │   └── voiceflow.js   # Voiceflow chatbot settings
│   │
│   ├── constants/          # Hardcoded demo data
│   │   └── demoData.js
│   │
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles with Tailwind
│
├── public/                # Static assets
├── index.html            # HTML template
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── vite.config.js        # Vite build configuration
└── README.md            # This file
```

---

## 🎨 Key Features by Page

### Landing Page (http://localhost:5173)
- Hero section with program information
- "How It Works" 3-step process
- Team member profiles
- FAQ Chatbot (bottom-right corner)

### Login Page (http://localhost:5173/login)
- Credential input (bob/demo)
- Client-side validation
- Redirects to dashboard on success

### Dashboard Home (http://localhost:5173/dashboard)
- Welcome message with user name
- Statistics cards (Total, Active, Completed requests)
- Quick action buttons
- Recent activity list
- Step-by-Step Guide Chatbot

### My Requests (http://localhost:5173/dashboard/requests)
- List of all kit requests
- Color-coded status badges
- Clickable cards with detailed modal view
- Request timeline and tracking info

### Profile (http://localhost:5173/dashboard/profile)
- User information display
- Account details (read-only for demo)

### Request New Kit (http://localhost:5173/dashboard/request-kit)
- Step 1: Qualification Quiz (3 questions)
- Step 2: Request Form (address, phone)
- Step 3: Confirmation with reference number

---

## 🤖 Voiceflow Chatbots

### FAQ Chatbot (Landing Page)
- **Project ID**: `68fa3da9327e94185fba3025`
- **Purpose**: General program questions
- **Visibility**: Landing Page only
- **Access**: Public (no login required)

### Step-by-Step Guide Chatbot (Dashboard)
- **Project ID**: `68fb282217054f3eaef34881`
- **Purpose**: Sample collection guidance
- **Visibility**: All Dashboard pages
- **Access**: Authenticated users only
- **Features**:
  - Personalized with user information
  - Context-aware (knows request status)
  - Hard reset on each chat open (no history persistence)

---

## 🐛 Troubleshooting

### Issue: Cannot find module errors

**Solution**: Reinstall dependencies
```bash
npm install
```

### Issue: Port 5173 is already in use

**Solution**: Kill the existing process or use a different port
```bash
# Kill process on port 5173 (Mac/Linux)
lsof -ti:5173 | xargs kill

# Or run on different port
npm run dev -- --port 3000
```

### Issue: Tailwind styles not loading

**Solution**: Hard refresh your browser
- **Mac**: Cmd + Shift + R
- **Windows/Linux**: Ctrl + Shift + R

Or clear Vite cache:
```bash
rm -rf node_modules/.vite
npm run dev
```

### Issue: White screen or "Cannot GET /"

**Solutions**:
1. Ensure the dev server is running (`npm run dev`)
2. Check the correct URL: http://localhost:5173
3. Clear browser cache
4. Check browser console for errors (F12 → Console tab)

### Issue: Login doesn't work

**Check**:
- Username must be exactly: `bob` (lowercase)
- Password must be exactly: `demo` (lowercase)
- Case-sensitive!

### Issue: Chatbot doesn't appear

**Solutions**:
1. Hard refresh the page (Cmd+Shift+R / Ctrl+Shift+R)
2. Check browser console for Voiceflow loading messages
3. Verify you're on the correct page:
   - FAQ chatbot: Landing Page only
   - Guide chatbot: Dashboard only (must be logged in)

### Issue: Changes not showing up

**Solution**: The dev server has Hot Module Replacement (HMR)
- Most changes reload automatically
- If not, refresh the browser
- Check terminal for errors

---

## 📚 Documentation

### Additional Documentation Files

- **spec.md**: Complete project specification
- **MILESTONE-1-COMPLETE.md**: UI/UX implementation details
- **MILESTONE-2-FAQ-CHATBOT-COMPLETE.md**: FAQ chatbot integration
- **MILESTONE-4-GUIDE-CHATBOT-COMPLETE.md**: Guide chatbot integration
- **VOICEFLOW-SETUP.md**: Voiceflow configuration guide

### Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 🔒 Security Notes

### Demo Version
This is a **proof-of-concept demo** with:
- Hardcoded credentials (bob/demo)
- No backend server
- No database
- Client-side only authentication
- Hardcoded demo data

### Not Suitable for Production
This demo version should NOT be used in production without:
- Real authentication system (JWT, OAuth)
- Backend API server
- Database integration
- Password encryption (bcrypt)
- HTTPS enforcement
- Security auditing

---

## 📞 Support

### Need Help?

1. **Check Documentation**: Review the markdown files in the project root
2. **Console Logs**: Open browser DevTools (F12) → Console tab
3. **Server Logs**: Check the terminal where `npm run dev` is running

### Common Questions

**Q: Do I need to run `npm install` every time?**
A: No, only the first time or after pulling new code changes.

**Q: Can I use a different port?**
A: Yes, use `npm run dev -- --port 3000`

**Q: Where is the data stored?**
A: All data is hardcoded in `src/constants/demoData.js`. No database is used.

**Q: Can I modify the demo data?**
A: Yes, edit `src/constants/demoData.js` and the page will auto-reload.

**Q: How do I stop the server?**
A: Press `Ctrl + C` in the terminal where the server is running.

---

## 📝 Version Information

- **Application Version**: 1.0.0
- **React**: 19.1.1
- **Vite**: 5.4.21
- **Tailwind CSS**: 3.4.18
- **Node.js Required**: 18.x or higher

---

## 🎉 Quick Reference Card

### First Time Setup
```bash
cd "diagnostic-kit-app"
npm install
npm run dev
# Open http://localhost:5173
```

### Subsequent Runs
```bash
cd "diagnostic-kit-app"
npm run dev
# Open http://localhost:5173
```

### Login
- Username: `bob`
- Password: `demo`

### Stop Server
- Press `Ctrl + C` in terminal

---

**Last Updated**: November 12, 2025
**Project Status**: All 4 Milestones Complete ✅
