# Lab Diagnostic Kit Request & Sample Processing - Web Application Specification

> **🎯 DEMO VERSION ONLY - NO BACKEND IMPLEMENTATION**
> 
> This specification covers a **frontend-only demonstration** application with hardcoded data and credentials. All 4 milestones focus on delivering a fully functional UI prototype with integrated Voiceflow chatbots for client presentations and user testing.

## Project Overview

A professional web application proof-of-concept (PoC) designed to demonstrate the diagnostic kit request workflow for hair strand sample collection, similar to [Strands for Cancer](https://www.strandsforcancer.com/). This demonstration platform showcases how users can learn about the diagnostic process, request collection kits, and receive AI-powered assistance throughout their journey.

### Key Characteristics of This Demo Version:
- ✅ **Frontend-only**: React application with no backend server
- ✅ **Hardcoded authentication**: Single login (username: `bob`, password: `demo`)
- ✅ **Sample data**: All user profiles and kit requests are hardcoded
- ✅ **Two Voiceflow chatbots**: FAQ (public) + Step-by-Step Guide (dashboard)
- ✅ **Fully functional UI**: Complete user journey from landing page to dashboard
- ✅ **Rapid deployment**: Can be hosted on static hosting (Vercel, Netlify, GitHub Pages)
- ✅ **Timeline**: 5-6 weeks total development time

### What's NOT Included (Demo Limitations):
- ❌ No backend server or API
- ❌ No database or data persistence
- ❌ No real user registration or authentication system
- ❌ No email notifications
- ❌ No real data storage (all data is hardcoded)
- ❌ Form submissions show UI feedback but don't save data

### Milestone Quick Reference

| Milestone | Duration | Focus | Key Deliverables |
|-----------|----------|-------|-----------------|
| **1** | 2-3 weeks | UI/UX Setup | All pages, components, routing, responsive design |
| **2** | 1 week | FAQ Chatbot | Voiceflow FAQ integration on public pages |
| **3** | 1 week | Login & Dashboard | Hardcoded auth, protected routes, dashboard UI |
| **4** | 1 week | Guide Chatbot | Voiceflow Step-by-Step Guide in dashboard |
| **Total** | **5-6 weeks** | **Complete Demo** | **Fully functional frontend prototype** |

---

## Core Features

### 1. User Authentication System (Demo/Hardcoded)
- Simple login with hardcoded credentials
  - **Username**: `bob`
  - **Password**: `demo`
- Logout functionality
- Session management (client-side)
- Protected routes for authenticated users

### 2. Public Landing Page
- Information about the diagnostic kit and research
- "How it works" section explaining the process
- Team information and credentials
- Privacy policy and terms of use
- **AI FAQ Assistant (Voiceflow)** - Accessible on Landing Page only for general questions

### 3. User Dashboard (Post-Login) - Hardcoded Demo UI
- Kit request management (hardcoded UI with sample data)
- Request status tracking (hardcoded status displays)
- User profile management (hardcoded profile information)
- **AI Step-by-Step Guide Assistant (Voiceflow)** - Guides users through sample collection process

### 4. Kit Request Workflow (UI Demo in Milestones 1-4)
- Qualification quiz/questionnaire
- Kit request form submission
- Confirmation and tracking
- Sample submission instructions
- **Note**: Initially implemented with hardcoded data for demonstration; full database integration out-of-scope

## Technical Requirements

### Functional Requirements

#### FR1: User Management (Demo Version)
- FR1.1: User can log in with hardcoded credentials (username: `bob`, password: `demo`)
- FR1.2: User can log out
- FR1.3: Session persistence with client-side state management
- FR1.4: Protected routes require authentication
- FR1.5: User profile displays hardcoded information (no editing required for demo)

#### FR2: Public Content
- FR2.1: Landing page displays project information
- FR2.2: "How it works" section with clear steps
- FR2.3: Team profiles and credentials
- FR2.4: Privacy policy and terms of use pages
- FR2.5: FAQ AI Assistant accessible via widget on Landing Page only

#### FR3: Kit Request System (Demo Version)
- FR3.1: Qualification questionnaire/quiz (UI only, responses displayed but not stored)
- FR3.2: Kit request form with user details (UI only, form submission shows confirmation)
- FR3.3: Request confirmation and hardcoded reference number display
- FR3.4: Dashboard displays hardcoded sample kit requests with various statuses
- FR3.5: Request status tracking in user dashboard (hardcoded data)

#### FR4: AI Assistant Integration
- FR4.1: FAQ Chatbot (Voiceflow) - Answers general questions about the project, eligibility, and process
- FR4.2: Step-by-Step Guide Chatbot (Voiceflow) - Guides authenticated users through sample collection
- FR4.3: Chat persistence for logged-in users
- FR4.4: Custom triggers based on user state

#### FR5: Dashboard Features (Demo Version - Hardcoded UI)
- FR5.1: Display hardcoded active kit requests with sample data
- FR5.2: Show hardcoded request history with various status examples
- FR5.3: Access to step-by-step guide chatbot (Voiceflow integration)
- FR5.4: Profile management interface displaying hardcoded user information

### Non-Functional Requirements

#### NFR1: Security (Demo Version)
- NFR1.1: Client-side authentication check (hardcoded credentials)
- NFR1.2: HTTPS enforcement in production (recommended)
- NFR1.3: Basic input validation
- NFR1.4: Protection against XSS attacks
- **Note**: Full security measures (bcrypt, JWT, etc.) will be implemented in production-ready version which is out-of-scope

#### NFR2: Performance
- NFR2.1: Page load time < 2 seconds
- NFR2.2: API response time < 500ms for standard requests
- NFR2.3: Optimized bundle size for frontend assets

#### NFR3: Usability
- NFR3.1: Responsive design for mobile, tablet, and desktop
- NFR3.2: Accessible UI following WCAG 2.1 AA standards
- NFR3.3: Intuitive navigation and clear CTAs
- NFR3.4: Consistent design language and branding

#### NFR4: Browser Compatibility
- NFR4.1: Support for modern browsers (Chrome, Firefox, Safari, Edge)
- NFR4.2: Graceful degradation for older browsers
- NFR4.3: No critical dependency on bleeding-edge features

#### NFR5: Reliability (Demo Version)
- NFR5.1: Graceful error handling with user-friendly messages
- NFR5.2: No broken links or missing resources
- NFR5.3: Consistent behavior across user sessions
- NFR5.4: LocalStorage fallback for session persistence

## Tech Stack

### Frontend
- **Framework**: React 18.x
- **Routing**: React Router v6
- **State Management**: React Context API (for auth state and demo data)
- **UI Components**: Tailwind CSS v3 (instead of v4)
- **Form Handling**: React Hook Form
- **Validation**: Yup or Zod
- **Build Tool**: Vite App

### Backend (Future Production Version - Not in Current Scope)
The current demo version (Milestones 1-4) is **frontend-only** with no backend requirements. 

If proceeding to production, backend stack would include:
- **Runtime**: Node.js 18.x+
- **Framework**: Express.js
- **Database**: PostgreSQL or MongoDB
- **ORM/ODM**: Prisma (PostgreSQL) or Mongoose (MongoDB)
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcrypt
- **Email Service**: SendGrid or Nodemailer
- **Environment Management**: dotenv

**Note**: All milestones (1-4) focus on frontend-only demo with hardcoded data. Backend implementation is not included in this specification.

### Third-Party Integrations
- **AI Chatbot Platform**: Voiceflow
  - FAQ Assistant (public-facing)
  - Step-by-Step Guide Assistant (authenticated users)

### Development & Deployment
- **Version Control**: Git
- **Package Manager**: npm or yarn
- **Code Editor**: VS Code (recommended)
- **Deployment**: Vercel, Netlify, or GitHub Pages (frontend-only)
- **Environment Variables**: For Voiceflow API keys and project IDs

## System Architecture

### High-Level Architecture (Demo Version)

```
┌─────────────────────────────────────────┐
│         React App (Frontend)            │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │      Public Pages               │   │
│  │  - Landing Page                 │   │
│  │  - How It Works                 │   │
│  │  - Privacy Policy               │   │
│  │  - Terms of Use                 │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │    Authentication (Hardcoded)   │   │
│  │  - Login Page                   │   │
│  │  - Credentials: admin/demo      │   │
│  │  - Client-side validation       │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │   Dashboard (Protected Routes)  │   │
│  │  - Dashboard Home               │   │
│  │  - My Requests                  │   │
│  │  - Profile                      │   │
│  │  - Kit Request Flow             │   │
│  │  - Hardcoded Demo Data          │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │      State Management           │   │
│  │  - Auth Context (login state)   │   │
│  │  - Hardcoded User Data          │   │
│  │  - Hardcoded Request Data       │   │
│  │  - localStorage for persistence │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
                    │
                    │ Widget Integration
                    ▼
┌─────────────────────────────────────────┐
│          Voiceflow Services             │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │     FAQ Chatbot (Public)        │   │
│  │  - General questions            │   │
│  │  - Eligibility info             │   │
│  │  - Process explanation          │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  Step-by-Step Guide (Dashboard) │   │
│  │  - Sample collection guide      │   │
│  │  - Packaging instructions       │   │
│  │  - Shipping help                │   │
│  │  - Receives hardcoded user data │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

### Data Structure (Demo Version - No Database)

All data is hardcoded in the frontend. See the "Demo Data Specifications" section for the exact hardcoded data structure.

**Key Data Objects**:
1. **HARDCODED_CREDENTIALS**: Single user credential (admin/demo)
2. **DEMO_USER**: User profile information
3. **DEMO_REQUESTS**: Array of sample kit requests with various statuses

**Storage**: 
- Login state persisted in localStorage/sessionStorage
- All user and request data hardcoded in React components/context
- No database connection required

## API Endpoints

**Note**: The demo version does NOT implement any backend API endpoints. All functionality is client-side with hardcoded data.

### Future Production API (Not in Current Scope)

If proceeding to a production version with backend, the following endpoints would be implemented:

**Authentication**
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password with token
- `GET /api/auth/verify-email/:token` - Verify email address

**User Management**
- `GET /api/users/me` - Get current user profile
- `PUT /api/users/me` - Update user profile
- `DELETE /api/users/me` - Delete user account

**Kit Requests**
- `POST /api/requests` - Submit new kit request
- `GET /api/requests` - Get user's kit requests
- `GET /api/requests/:id` - Get specific request details
- `PUT /api/requests/:id` - Update request (admin)
- `DELETE /api/requests/:id` - Cancel request

**Content (Public)**
- `GET /api/content/faq` - Get FAQ data
- `GET /api/content/team` - Get team information

For the demo version, all this data is returned from hardcoded constants in the frontend.

## User Flows

### 1. New Visitor Flow
1. Lands on homepage
2. Reads about the project
3. Can interact with FAQ chatbot for questions
4. Clicks "Take the Quiz" or "Get Started"
5. Prompted to create account or login

### 2. Demo Login & Kit Request Flow
1. User clicks "Login" or "Get Started"
2. Enters hardcoded credentials (username: `bob`, password: `demo`)
3. Successfully logs in and redirected to dashboard
4. Views hardcoded active kit requests with sample data
5. Clicks "Request New Kit" to see kit request workflow
6. Completes qualification quiz (UI only)
7. Fills kit request form (UI only)
8. Sees confirmation page with hardcoded reference number
9. Returns to dashboard to see updated (hardcoded) request list

### 3. Logged-In User Dashboard Flow
1. User logs in with hardcoded credentials
2. Lands on dashboard displaying:
   - Welcome message with user name
   - Active kit requests (hardcoded sample data)
   - Request history with various statuses
   - User profile information (hardcoded)
3. Can launch Step-by-Step Guide chatbot for assistance
4. Can navigate between dashboard sections
5. Can log out

## Voiceflow Integration Details

### FAQ Chatbot (Public)
- **Purpose**: Answer general questions about the project, eligibility, privacy, and process
- **Access**: Available on Landing Page only via widget launcher
- **Placement**: Bottom-right corner of screen
- **Integration Method**: Voiceflow web chat widget embedded in React app
- **Key Features**:
  - Information about the diagnostic method
  - Eligibility requirements
  - Process explanation
  - Privacy and data handling
  - Contact information

### Step-by-Step Guide Chatbot (Authenticated - Milestone 4)
- **Purpose**: Guide users through sample collection and submission process
- **Access**: Available only to logged-in users from dashboard
- **Integration Method**: Voiceflow web chat widget with user context
- **Key Features**:
  - Step-by-step collection instructions
  - Troubleshooting assistance
  - Submission tracking guidance
  - Sample preparation guidelines
  - Contextual help based on request status
- **Demo Note**: User context variables will use hardcoded DEMO_USER and DEMO_REQUESTS data

#### Future Production Chat Widget (Not in current scope)
- **Custom Variables**: Pass hardcoded user information (name, request ID) to personalize experience

### Integration Code Placement
- Widget scripts loaded in `index.html` or React component
- Custom variables passed via Voiceflow API
- Chat persistence configuration for logged-in users
- Custom styling to match brand colors

## Demo Data Specifications (Milestones 1-4)

For the demonstration version, the following hardcoded data should be used:

### Hardcoded User Credentials
```javascript
{
  username: 'admin',
  password: 'demo'
}
```

### Hardcoded User Profile
```javascript
{
  id: 'user-001',
  name: 'Admin User',
  email: 'admin@demo.com',
  phone: '+1 (555) 123-4567',
  memberSince: 'January 2024',
  address: '123 Main Street, Anytown, CA 90210'
}
```

### Hardcoded Kit Requests
```javascript
[
  {
    id: 'KR-2024-001',
    status: 'Pending Approval',
    date: '2024-10-15',
    submittedDate: '2024-10-15T09:30:00Z',
    address: '123 Main Street, Anytown, CA 90210',
    quizResponses: {
      age18OrOlder: true,
      hasHair: true,
      cancerDiagnosis: 'No'
    }
  },
  {
    id: 'KR-2024-002',
    status: 'Kit Shipped',
    date: '2024-10-01',
    submittedDate: '2024-10-01T14:20:00Z',
    shippedDate: '2024-10-08T10:00:00Z',
    trackingNumber: 'USPS9400111899223344556677',
    address: '123 Main Street, Anytown, CA 90210',
    estimatedDelivery: '2024-10-12'
  },
  {
    id: 'KR-2024-003',
    status: 'Sample Received',
    date: '2024-09-20',
    submittedDate: '2024-09-20T11:15:00Z',
    shippedDate: '2024-09-25T09:00:00Z',
    receivedDate: '2024-10-05T13:45:00Z',
    address: '123 Main Street, Anytown, CA 90210'
  }
]
```

### Status Badge Colors
- **Pending Approval**: Yellow/Orange (#FFA500)
- **Kit Shipped**: Blue (#2196F3)
- **Sample Received**: Green (#4CAF50)
- **In Processing**: Purple (#9C27B0)
- **Completed**: Dark Green (#388E3C)
- **Rejected**: Red (#F44336)

---

## Milestones & Development Plan

### Overview

This project is structured as a **phased demonstration approach**, allowing for rapid client feedback at each stage:

- **Milestone 1** (2-3 weeks): Build all UI pages with static/mock data
- **Milestone 2** (1 week): Integrate FAQ chatbot on public pages
- **Milestone 3** (1 week): Implement hardcoded login and dashboard functionality
- **Milestone 4** (1 week): Integrate Step-by-Step Guide chatbot in dashboard

**Total Demo Version (Milestones 1-4)**: ~5-6 weeks - Complete frontend demo with both Voiceflow chatbots

This approach delivers a fully functional demonstration application without backend dependencies, perfect for client presentations and user testing.

---

## Milestone 1: UI/UX Setup & Core Frontend Development

**Duration**: 2-3 weeks

### Objectives
Set up the complete frontend infrastructure and implement all UI components with responsive design, without backend integration.

### Tasks

#### 1.1 Project Setup
- [ ] Initialize React project with Vite
- [ ] Configure ESLint and Prettier
- [ ] Set up folder structure (components, pages, hooks, utils, etc.)
- [ ] Install and configure UI library (Tailwind CSS v3)
- [ ] Set up React Router for navigation
- [ ] Configure environment variables

#### 1.2 Public Pages UI
- [ ] **Landing Page**
  - Hero section with CTA
  - "How it works" section (4-step process)
  - Project information section
  - Team section with bios
  - Footer with links
- [ ] **Privacy Policy Page**
- [ ] **Terms of Use Page**
- [ ] **About Page** (optional)

#### 1.3 Authentication Pages UI (Demo Version)
- [ ] **Login Page**
  - Username and password fields
  - Validation for hardcoded credentials (username: `bob`, password: `demo`)
  - Simple error message for invalid credentials
  - Clean, professional design
  - **Note**: No registration, forgot password, or reset password pages needed for demo

#### 1.4 User Dashboard UI (Hardcoded Demo Data)
- [ ] **Dashboard Layout**
  - Navigation header with user menu (logout button)
  - Sidebar or tab navigation
  - Main content area
- [ ] **Dashboard Home**
  - Welcome message with hardcoded user name (e.g., "Welcome, Bob User")
  - Active requests summary cards with hardcoded data
  - Quick action buttons ("Request New Kit", "View All Requests")
- [ ] **My Requests Page**
  - List of 2-3 hardcoded kit requests with different status badges:
    - Request #KR-2024-001 - Status: "Pending Approval"
    - Request #KR-2024-002 - Status: "Kit Shipped"
    - Request #KR-2024-003 - Status: "Sample Received"
  - Each request card shows: reference number, date, status, shipping address
  - Click to view more details in modal/expanded view
- [ ] **Profile Page**
  - Display hardcoded user information:
    - Name: "Bob User"
    - Email: "bob@demo.com"
    - Phone: "+1 (555) 123-4567"
    - Member since: "January 2024"
  - **Note**: No edit functionality needed for demo

#### 1.5 Kit Request Flow UI (Demo Version)
- [ ] **Qualification Quiz Page**
  - Multi-step form or single-page questionnaire with sample questions:
    - "Are you 18 years or older?"
    - "Do you have at least 1/2 inch of hair?"
    - "Have you been diagnosed with cancer?" (Yes/No/Prefer not to say)
  - Progress indicator
  - Navigation between questions
  - Form validation (client-side)
  - **Note**: Responses shown on screen but not stored
- [ ] **Kit Request Form Page**
  - Shipping address form fields (all UI only)
  - Additional information fields (phone, best time to deliver)
  - Review and submit section showing entered data
  - **Note**: Form submission triggers confirmation page (no actual data storage)
- [ ] **Confirmation Page**
  - Success message: "Your kit request has been submitted!"
  - Hardcoded reference number display (e.g., "KR-2024-004")
  - Next steps information
  - Button to "Return to Dashboard"

#### 1.6 Component Library
- [ ] Reusable components
  - Button variants (primary, secondary, outline)
  - Input fields (text, password, select, textarea, etc.)
  - Card components (for request displays)
  - Modal/Dialog (for request details)
  - Status badges (pending, approved, shipped, completed)
  - Loading spinner
  - Alert/Notification toast
  - Navigation bar with logout button
  - Footer
- [ ] Form validation setup (React Hook Form + Yup/Zod)
- [ ] Auth context/state management for login status (React Context API)

#### 1.7 Responsive Design
- [ ] Mobile-first design approach
- [ ] Tablet breakpoint adjustments
- [ ] Desktop optimization
- [ ] Cross-browser testing

#### 1.8 Accessibility
- [ ] Semantic HTML elements
- [ ] ARIA labels where needed
- [ ] Keyboard navigation support
- [ ] Color contrast compliance

### Deliverables
- Fully functional frontend with all UI pages (public and dashboard)
- Login page with hardcoded credential validation
- User dashboard with hardcoded sample data
- Responsive design across devices
- Component library for reusable elements
- Routing with protected routes (dashboard requires login)
- Form validation (client-side)
- Auth context for managing login state
- Hardcoded user and request data

### Success Criteria
- All pages render correctly on mobile, tablet, and desktop
- Login works with hardcoded credentials (admin/demo)
- Navigation flows work smoothly, including protected routes
- Dashboard displays hardcoded kit requests and user profile
- Forms validate input correctly (client-side)
- Logout functionality clears auth state and redirects to home
- UI is professional and matches modern design standards
- Code is well-organized and follows React best practices

---

## Milestone 2: FAQ Chatbot Integration (Voiceflow)

**Duration**: 1 week

### Objectives
Integrate the Voiceflow FAQ chatbot into the Landing Page to answer visitor questions about the diagnostic kit program.

### Prerequisites
- Voiceflow FAQ agent created and published
- Widget code/API key provided by Voiceflow

### Tasks

#### 2.1 Voiceflow Setup
- [ ] Create FAQ agent in Voiceflow platform
- [ ] Configure conversation flows for common questions:
  - What is this diagnostic method?
  - Who is eligible to donate?
  - How does the process work?
  - Is my data private?
  - How long does it take?
  - What do I do with the kit?
- [ ] Test agent in Voiceflow dashboard
- [ ] Publish agent to production
- [ ] Obtain widget embed code and configuration

#### 2.2 Frontend Integration
- [ ] Add Voiceflow widget script to React app
  - Option A: Add to `index.html` in `<head>` or before `</body>`
  - Option B: Create React component wrapper for widget
- [ ] Configure widget settings:
  - Brand colors matching website theme
  - Custom launcher icon
  - Widget position (bottom-right recommended)
  - Welcome message
  - Placeholder text
- [ ] Ensure widget loads on Landing Page only
- [ ] Test widget responsiveness on mobile devices

#### 2.3 Customization
- [ ] Apply custom CSS styling to match website branding
- [ ] Configure widget behavior:
  - Auto-open on first visit (optional)
  - Minimize/maximize functionality
  - Sound notifications (optional)
- [ ] Add custom launcher button if needed
- [ ] Set up custom triggers (e.g., open chat after 10 seconds on page)

#### 2.4 Testing
- [ ] Test all conversation flows
- [ ] Verify widget appearance on different screen sizes
- [ ] Test chat persistence (if configured)
- [ ] Ensure no conflicts with existing UI elements
- [ ] Cross-browser compatibility testing

#### 2.5 Documentation
- [ ] Document widget configuration settings
- [ ] Create guide for updating chatbot content in Voiceflow
- [ ] Document any custom styling or triggers implemented

### Integration Code Example

```javascript
// Add to index.html or App.jsx
<script type="text/javascript">
  (function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: 'YOUR_FAQ_PROJECT_ID' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        // Customization options
        render: {
          mode: 'embedded', // or 'overlay'
          type: 'widget', // or 'popover'
        },
        autostart: false,
        assistant: {
          title: "FAQ Assistant",
          description: "Ask me anything about our diagnostic program",
          color: "#your-brand-color",
          launcher: "icon-here",
          stylesheet: "custom-styles-url"
        }
      });
    }
    v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; 
    v.type = "text/javascript"; 
    s.parentNode.insertBefore(v, s);
  })(document, 'script');
</script>
```

### Deliverables
- FAQ chatbot accessible on Landing Page
- Custom styling matching website brand
- Documentation for chatbot management
- Test results and bug fixes

### Success Criteria
- Widget loads and functions correctly on Landing Page
- Chatbot accurately answers FAQ questions
- Widget is responsive and accessible
- No performance degradation from widget integration
- Widget UI matches website branding

---

## Milestone 3: Login Functionality & Dashboard UI with Hardcoded Data

**Duration**: 1 week

### Objectives
Implement the login functionality with hardcoded credentials and complete the user dashboard UI with hardcoded sample data to demonstrate the full user experience without backend dependencies.

### Tasks

#### 3.1 Authentication Implementation (Hardcoded)
- [ ] Create authentication context using React Context API
- [ ] Define hardcoded credentials:
  ```javascript
  const HARDCODED_CREDENTIALS = {
    username: 'bob',
    password: 'demo'
  };
  ```
- [ ] Implement login function that checks credentials
- [ ] Store auth state in context (isAuthenticated, user info)
- [ ] Use localStorage/sessionStorage to persist login state across page refreshes
- [ ] Implement logout function that clears auth state

#### 3.2 Protected Routes Setup
- [ ] Create PrivateRoute component that checks auth status
- [ ] Redirect to login page if user is not authenticated
- [ ] Redirect to dashboard if user is already logged in and tries to access login page
- [ ] Protect all dashboard routes with PrivateRoute wrapper

#### 3.3 Login Page Implementation
- [ ] Build login form UI with username and password fields
- [ ] Add form validation (required fields)
- [ ] Implement submit handler that validates against hardcoded credentials
- [ ] Show error message for invalid credentials
- [ ] Redirect to dashboard on successful login
- [ ] Add loading state during login process

#### 3.4 Dashboard Data Structure (Hardcoded)
- [ ] Create hardcoded user data object:
  ```javascript
  const DEMO_USER = {
    id: 'user-001',
    name: 'User Bob',
    email: 'bob@demo.com',
    phone: '+1 (555) 123-4567',
    memberSince: 'January 2024'
  };
  ```
- [ ] Create hardcoded kit requests array:
  ```javascript
  const DEMO_REQUESTS = [
    {
      id: 'KR-2024-001',
      status: 'Pending Approval',
      date: '2024-10-15',
      address: '123 Main St, City, State 12345'
    },
    {
      id: 'KR-2024-002',
      status: 'Kit Shipped',
      date: '2024-10-01',
      trackingNumber: 'TRACK123456',
      address: '123 Main St, City, State 12345'
    },
    {
      id: 'KR-2024-003',
      status: 'Sample Received',
      date: '2024-09-20',
      address: '123 Main St, City, State 12345'
    }
  ];
  ```

#### 3.5 Dashboard Pages Implementation
- [ ] **Dashboard Home Page**
  - Welcome message with user name
  - Summary cards showing:
    - Total requests
    - Active requests
    - Completed requests
  - Quick action buttons ("Request New Kit", "View All Requests")
  - Recent activity list showing latest 3 requests with status badges
- [ ] **My Requests Page**
  - Display all hardcoded requests in cards/table
  - Color-coded status badges
  - Filters by status (optional, UI only)
  - Click to view request details modal
  - Request detail modal showing:
    - Reference number
    - Status with timeline
    - Submission date
    - Shipping address
    - Tracking number (if shipped)
- [ ] **Profile Page**
  - Display hardcoded user information
  - Clean, card-based layout
  - Display-only fields (no editing needed)
  - Logout button

#### 3.6 Navigation & Layout
- [ ] Implement dashboard layout component with:
  - Top navigation bar with logo and user menu
  - Sidebar navigation (or tab navigation)
  - Main content area
  - User menu dropdown with logout option
- [ ] Add active link highlighting
- [ ] Ensure responsive behavior for mobile/tablet

#### 3.7 Kit Request Flow Integration
- [ ] Connect "Request New Kit" button to qualification quiz
- [ ] After quiz completion, show kit request form
- [ ] On form submission:
  - Show success message
  - Display hardcoded new reference number (e.g., KR-2024-004)
  - Provide option to return to dashboard
- [ ] **Note**: Form data is not persisted, just shown in confirmation

#### 3.8 Polish & Refinement
- [ ] Add loading states for route transitions
- [ ] Implement smooth page transitions
- [ ] Add empty states (e.g., "No requests yet")
- [ ] Ensure all buttons and links are functional
- [ ] Add tooltips or help text where needed
- [ ] Test all navigation flows
- [ ] Cross-browser testing

#### 3.9 Testing & Bug Fixes
- [ ] Test login with correct credentials
- [ ] Test login with incorrect credentials
- [ ] Test logout functionality
- [ ] Test protected route access (try accessing dashboard when logged out)
- [ ] Test navigation between dashboard pages
- [ ] Test kit request flow from start to finish
- [ ] Test responsive design on mobile/tablet
- [ ] Fix any bugs or UI issues

### Deliverables
- Working login system with hardcoded credentials (admin/demo)
- Fully functional user dashboard with all pages
- Hardcoded user profile and kit request data
- Protected routes requiring authentication
- Complete navigation system with logout
- Kit request flow (UI only, no data persistence)
- Responsive design across all dashboard pages

### Success Criteria
- User can log in with username "admin" and password "demo"
- Invalid login attempts show appropriate error messages
- After login, user is redirected to dashboard
- Dashboard displays all hardcoded data correctly
- Navigation between dashboard pages works smoothly
- Protected routes cannot be accessed without login
- Logout clears session and redirects to home page
- Kit request flow can be completed (UI only)
- All pages are responsive on mobile, tablet, and desktop
- No console errors or warnings

---

## Milestone 4: Step-by-Step Guide Chatbot Integration

**Duration**: 1 week

### Objectives
Integrate the Voiceflow Step-by-Step Guide chatbot into the user dashboard to provide interactive guidance for sample collection and submission. This chatbot will be accessible only to logged-in users and will use hardcoded user context for demonstration purposes.

### Prerequisites
- Milestones 1-3 completed
- Voiceflow Step-by-Step Guide agent created and published
- Widget code/API key provided by Voiceflow

### Tasks

#### 4.1 Voiceflow Step-by-Step Guide Agent Setup
- [ ] Create Step-by-Step Guide agent in Voiceflow platform
- [ ] Configure conversation flows for:
  - **Sample Collection Preparation**
    - Washing hair before cutting
    - Avoiding hair products 24 hours before
    - Best time to collect sample
  - **Hair Cutting Instructions**
    - How much hair to cut (1/2 inch minimum)
    - Where to cut from (close to scalp)
    - How to handle different hair types
    - Safety guidelines
  - **Kit Packaging Steps**
    - Placing hair in provided envelope
    - Sealing the envelope properly
    - Labeling with reference number
    - Placing in return mailer
  - **Shipping Instructions**
    - Where to drop off the kit (USPS, mailbox, etc.)
    - No postage required confirmation
    - Expected delivery time
  - **Troubleshooting Common Issues**
    - Not enough hair length
    - Hair dyed or treated
    - Lost kit components
    - Damaged envelope
  - **Submission Confirmation**
    - Tracking submission status
    - What happens next
    - Expected timeline for processing
- [ ] Set up custom variables for user context:
  - User name (from hardcoded DEMO_USER)
  - Request ID (from hardcoded DEMO_REQUESTS)
  - Request status
- [ ] Add helpful quick replies and suggestions
- [ ] Test all conversation flows in Voiceflow dashboard
- [ ] Publish agent to production environment
- [ ] Obtain widget embed code and project ID

#### 4.2 Dashboard Integration Preparation
- [ ] Create constants file for Voiceflow configuration
- [ ] Define when/where chatbot should appear in dashboard:
  - Dashboard home page
  - My Requests page (especially for active requests)
  - Dedicated "Help & Guide" page (optional)
- [ ] Create custom trigger buttons:
  - "Get Help with Sample Collection"
  - "Start Step-by-Step Guide"
  - "Need Assistance?"

#### 4.3 Voiceflow Widget Integration
- [ ] Add Voiceflow widget script to dashboard pages
  - Option A: Add to dashboard layout component
  - Option B: Create reusable Voiceflow wrapper component
- [ ] Configure widget to load only when user is authenticated
- [ ] Implement widget initialization with hardcoded user context:
  ```javascript
  window.voiceflow.chat.load({
    verify: { projectID: 'YOUR_GUIDE_PROJECT_ID' },
    url: 'https://general-runtime.voiceflow.com',
    versionID: 'production',
    user: {
      name: 'Admin User', // from DEMO_USER
      userID: 'user-001',
      requestID: 'KR-2024-001', // active request
      requestStatus: 'Pending Approval'
    },
    render: {
      mode: 'embedded', // or 'overlay'
      type: 'widget',
    },
    autostart: false,
    assistant: {
      title: "Sample Collection Guide",
      description: "Get step-by-step help with your sample",
      color: "#your-brand-color",
      stylesheet: "custom-styles-url"
    }
  });
  ```
- [ ] Ensure widget appears only in Dashboard Home Page (not on public pages)

#### 4.4 Custom Triggers & UI Integration
- [ ] Add "Help" button in dashboard navigation
- [ ] Add inline help triggers in relevant sections:
  - On request detail page: "How do I collect my sample?"
  - On pending requests: "Start Collection Guide"
- [ ] Implement custom trigger functionality to open chatbot:
  ```javascript
  const openChatbot = () => {
    window.voiceflow.chat.open();
  };
  ```
- [ ] Add contextual triggers based on request status:
  - Pending: Offer preparation guide
  - Kit Shipped: Offer collection and packaging guide
  - Sample Received: Show confirmation and next steps

#### 4.5 Widget Customization
- [ ] Apply custom CSS styling to match dashboard theme
  - Brand colors
  - Font family
  - Button styles
  - Widget position and size
- [ ] Configure widget behavior:
  - Position (bottom-right or embedded in page)
  - Open/close animations
  - Welcome message personalization
  - Persistent chat history (localStorage)
- [ ] Mobile responsive adjustments
- [ ] Ensure widget doesn't overlap with dashboard elements

#### 4.6 User Context Management
- [ ] Pass different request IDs based on which request user is viewing
- [ ] Update user context when switching between requests
- [ ] Handle case when user has no active requests
- [ ] Reset chat context appropriately when context changes

#### 4.7 Testing & Quality Assurance
- [ ] Test chatbot loads correctly after login
- [ ] Test chatbot does NOT appear on public pages
- [ ] Test all conversation flows from dashboard
- [ ] Verify custom user variables are passed correctly
- [ ] Test custom trigger buttons work as expected
- [ ] Test chatbot on different request statuses
- [ ] Test responsiveness on mobile and tablet
- [ ] Test chat persistence across page navigation
- [ ] Cross-browser compatibility testing
- [ ] Performance testing (widget load time)

#### 4.8 Documentation & Polish
- [ ] Document widget configuration settings
- [ ] Create guide for updating chatbot content in Voiceflow
- [ ] Add tooltips explaining chatbot functionality
- [ ] Document any custom styling or triggers implemented
- [ ] Create user guide for demo presentation

### Integration Code Example

```javascript
// Dashboard component with Voiceflow integration
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  useEffect(() => {
    // Load Voiceflow only when authenticated
    if (user) {
      const script = document.createElement('script');
      script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
      script.type = 'text/javascript';
      script.onload = () => {
        window.voiceflow.chat.load({
          verify: { projectID: 'YOUR_GUIDE_PROJECT_ID' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          user: {
            name: user.name,
            userID: user.id,
            requestID: user.activeRequestID || 'none'
          },
          assistant: {
            title: "Sample Collection Guide",
            description: "Get step-by-step help",
          }
        });
      };
      document.body.appendChild(script);
    }
  }, [user]);

  return (
    <div className="dashboard">
      {/* Dashboard content */}
    </div>
  );
};
```

### Deliverables
- Step-by-Step Guide chatbot integrated in dashboard
- Custom trigger buttons in strategic locations
- User context passed to chatbot (using hardcoded demo data)
- Custom styling matching dashboard theme
- Documentation for chatbot management
- Test results and bug fixes

### Success Criteria
- Chatbot loads only for logged-in users in dashboard
- Chatbot does NOT appear on public pages (FAQ chatbot handles public)
- All conversation flows work correctly
- User context (name, request ID) is passed and displayed correctly
- Custom trigger buttons successfully open chatbot
- Widget is responsive on mobile, tablet, and desktop
- Widget styling matches dashboard branding
- No performance degradation from widget integration
- Chat persists across dashboard page navigation
- No console errors or warnings

---

## Post-Demo Considerations

### Demo Presentation Tips
- Prepare talking points for each feature
- Have both chatbots (FAQ and Step-by-Step Guide) ready to demonstrate
- Show the complete user journey: public site → login → dashboard → kit request → chatbot guidance
- Highlight the difference between public FAQ chatbot and authenticated Step-by-Step Guide chatbot
- Demonstrate responsive design on different devices
- Prepare sample questions for each chatbot

### Voiceflow Agent Maintenance
- Regularly update FAQ based on common questions from demo sessions
- Refine conversation flows based on stakeholder feedback
- Add new intents as user needs evolve
- Update step-by-step instructions as process changes
- Monitor chatbot usage during demo sessions

### Future Enhancements (Beyond Demo Scope)
If proceeding to production version, consider:
- **Backend Development**:
  - Full authentication system with JWT
  - Database integration (PostgreSQL/MongoDB)
  - Email notification service
  - Real-time request tracking
- **Additional Features**:
  - User registration and account management
  - Admin panel for managing requests
  - Request status notifications (SMS/Email)
  - Integration with shipping providers
  - Advanced analytics and reporting
  - Multi-language support
  - Mobile app (React Native)
- **Security & Performance**:
  - Production-grade security measures
  - Performance optimization
  - Monitoring and logging (Sentry, LogRocket)
  - Automated testing
  - CI/CD pipeline

---

## Development Best Practices

### Code Quality
- Follow consistent coding standards (ESLint, Prettier)
- Write meaningful commit messages
- Implement code reviews
- Maintain documentation
- Write reusable, modular code

### Version Control
- Use feature branches for development
- Follow Git flow or similar branching strategy
- Tag releases appropriately

### Testing
- Write unit tests for critical functions
- Implement integration tests for API endpoints
- Conduct user acceptance testing (UAT) before launch

### Security
- Never commit sensitive data (API keys, passwords)
- Use environment variables for configuration
- Keep dependencies updated
- Follow OWASP security guidelines

---

## Appendix

### Glossary
- **JWT**: JSON Web Token - authentication token standard
- **CRUD**: Create, Read, Update, Delete operations
- **CTA**: Call to Action
- **ORM**: Object-Relational Mapping
- **WCAG**: Web Content Accessibility Guidelines

### Resources
- [Voiceflow Documentation](https://docs.voiceflow.com/)
- [React Documentation](https://react.dev/)
- [Express.js Documentation](https://expressjs.com/)
- [JWT Best Practices](https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/)

### Contact & Support
- Project Manager: [Name/Email]
- Technical Lead: [Name/Email]
- Voiceflow Integration: [Support contact]

---

## Summary

This specification outlines a **demonstration-focused approach** to building a diagnostic kit request platform:

**Complete Demo Version (Milestones 1-4)**:
- Frontend-only application with hardcoded credentials (username: `admin`, password: `demo`)
- Full UI for public pages, authentication, and user dashboard
- Two integrated Voiceflow chatbots:
  - **FAQ Chatbot** - Public-facing, answers general questions
  - **Step-by-Step Guide Chatbot** - Dashboard-only, guides sample collection
- Hardcoded user profiles and kit request data for demonstration
- Responsive design across mobile, tablet, and desktop
- Ideal for client presentations, user testing, and stakeholder feedback
- **Timeline: 5-6 weeks total**

### Milestone Breakdown:
1. **Milestone 1** (2-3 weeks): All UI pages with hardcoded data
2. **Milestone 2** (1 week): FAQ chatbot integration on public pages
3. **Milestone 3** (1 week): Login functionality and dashboard with hardcoded data
4. **Milestone 4** (1 week): Step-by-Step Guide chatbot in dashboard

This approach delivers a fully functional demonstration application without backend dependencies, perfect for rapid deployment and client validation. Future production version with backend, database, and real authentication can be planned based on demo feedback.

---

**Document Version**: 4.0  
**Last Updated**: November 12, 2025  
**Status**: Demo/PoC Only - No Backend Implementation

