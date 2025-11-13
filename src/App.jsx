import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';
import DashboardLayout from './components/DashboardLayout';

// Public Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

// Dashboard Pages
import DashboardHome from './pages/DashboardHome';
import MyRequests from './pages/MyRequests';
import ProfilePage from './pages/ProfilePage';
import RequestKit from './pages/RequestKit';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Diagnostic Kit App */}
        <Navigation />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginRedirect />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* Protected Dashboard Routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="requests" element={<MyRequests />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="request-kit" element={<RequestKit />} />
          </Route>

          {/* Catch all - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

// Component to redirect to dashboard if already logged in
function LoginRedirect() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <LoginPage />;
}

export default App;
