import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-gradient-to-r from-blue-500 to-purple-600 text-white sticky top-0 shadow-lg z-10">
      <ul className="flex justify-center space-x-8 py-4 text-lg font-semibold">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li> {/* Add link to portfolio */}
      </ul>
    </nav>
  );
};

export default Navbar;
