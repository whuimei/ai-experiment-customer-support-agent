import { createContext, useContext, useState, useEffect } from 'react';
import { HARDCODED_CREDENTIALS, DEMO_USER, DEMO_REQUESTS } from '../constants/demoData';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [requests, setRequests] = useState(DEMO_REQUESTS);

  // Check for existing session on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('isAuthenticated');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
      setUser(DEMO_USER);
    }
  }, []);

  const login = (username, password) => {
    if (
      username === HARDCODED_CREDENTIALS.username &&
      password === HARDCODED_CREDENTIALS.password
    ) {
      setIsAuthenticated(true);
      setUser(DEMO_USER);
      localStorage.setItem('isAuthenticated', 'true');
      return { success: true };
    }
    return { success: false, error: 'Invalid username or password' };
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('isAuthenticated');
  };

  const value = {
    isAuthenticated,
    user,
    requests,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
