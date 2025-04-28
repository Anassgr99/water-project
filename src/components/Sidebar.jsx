import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiHome, FiDroplet, FiSettings, FiBell } from 'react-icons/fi';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`${isOpen ? 'w-64 ' : 'w-20'} bg-blue-900 text-white flex flex-col transition-all duration-300 h-screen bg-blue-900 fixed`}>
      
      {/* Header Sidebar */}
      <div className="flex items-center  justify-between p-4 border-b border-blue-700">
        <span className={`text-2xl font-bold ${isOpen ? 'block' : 'hidden'}`}>Osmos Roca App</span>
        {/* <button onClick={() => setIsOpen(!isOpen)}>
          <FiMenu className="text-2xl" />
        </button> */}
      </div>

      {/* Navigation avec Scroll si besoin */}
      <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
        <Link to="/" className="flex items-center space-x-3 hover:text-gray-300">
          <FiHome className="text-2xl" />
          {isOpen && <span>Dashboard</span>}
        </Link>
        <Link to="/tanks" className="flex items-center space-x-3 hover:text-gray-300">
          <FiDroplet className="text-2xl" />
          {isOpen && <span>Tanks</span>}
        </Link>
        <Link to="/pumps" className="flex items-center space-x-3 hover:text-gray-300">
          <FiSettings className="text-2xl" />
          {isOpen && <span>Pumps</span>}
        </Link>
        <Link to="/alerts" className="flex items-center space-x-3 hover:text-gray-300">
          <FiBell className="text-2xl" />
          {isOpen && <span>Alerts</span>}
        </Link>
      </nav>
    </div>
  );
}
