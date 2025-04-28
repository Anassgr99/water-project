import { FiUser } from 'react-icons/fi';
import logo from '../../public/logowater.png'; // Ensure the path to your logo is correct
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user information from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    // Clear user information from localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('auth'); // If you have an auth flag
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="bg-white shadow px-4 py-2 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="w-8 h-8" />
        <h1 className="text-lg font-bold text-blue-600"> Osmos Roca  Dashboard</h1>
      </div>
      {user && (
        <div className="flex items-center space-x-4 ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{user.name}</span>
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <FiUser className="text-blue-600 text-lg" />
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-red-500 hover:text-red-600 transition"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
