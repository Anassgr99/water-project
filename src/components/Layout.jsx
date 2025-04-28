import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useState } from 'react';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex ">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="ml-20  md:ml-64 w-full p-2">
        <Navbar />
        <main className="p-4 bg-gray-100 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
