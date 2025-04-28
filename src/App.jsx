import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Tanks from './pages/Tanks';
import Pumps from './pages/Pumps';
import Alerts from './pages/Alerts';
import Login from './pages/Login';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    setIsAuthenticated(auth === 'true');
  }, []);

  const RequireAuth = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route 
        path="/*" 
        element={
          <RequireAuth>
            <Layout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/tanks" element={<Tanks />} />
                <Route path="/pumps" element={<Pumps />} />
                <Route path="/alerts" element={<Alerts />} />
              </Routes>
            </Layout>
          </RequireAuth>
        } 
      />
    </Routes>
  );
}
