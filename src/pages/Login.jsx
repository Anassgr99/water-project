import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const allowedUsers = [
    { email: 'Oleg@gmail.com', password: 'Oleg@gmail.com', name: 'Oleg' },
    { email: 'Brahim@gmail.com', password: 'Brahim@gmail.com', name: 'Brahim' },
    { email: 'Amine@gmail.com', password: 'Amine@gmail.com', name: 'Amine' },
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const user = allowedUsers.find(
      (u) => u.email === email && u.password === password
    );
  
    if (user) {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('user', JSON.stringify({ name: user.name, email: user.email }));
  
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } else {
      alert('Invalid email or password');
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          {/* Logo */}
          <img
            src="/logowater.png" // <- make sure you put your logo in public/logo.png
            alt="Logo"
            className="w-20 h-20 mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800">Welcome in </h1>
          <h1 className="text-3xl font-bold text-gray-800">Osmos Roca App</h1>

          <p className="text-gray-500 mt-2">Please sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
