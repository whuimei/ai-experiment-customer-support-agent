import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navigation = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            DiagnosticKit
          </Link>

          <div className="flex items-center gap-6">
            {!isAuthenticated ? (
              <>
                <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link to="/privacy" className="text-gray-700 hover:text-blue-600">Privacy</Link>
                <Link to="/terms" className="text-gray-700 hover:text-blue-600">Terms</Link>
                <Link
                  to="/login"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
                <Link to="/dashboard/requests" className="text-gray-700 hover:text-blue-600">My Requests</Link>
                <Link to="/dashboard/profile" className="text-gray-700 hover:text-blue-600">Profile</Link>
                <div className="flex items-center gap-3">
                  <span className="text-gray-700">Hi, {user?.name}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
