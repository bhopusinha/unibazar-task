import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <img src="https://tse2.mm.bing.net/th?id=OIP.B0iGpBnPRZMLsQu8YJOg5AHaE4&pid=Api&P=0&h=180" alt="Logo" className="h-8 w-auto" />
        <span className="font-bold text-teal-700">UNIBAZAR</span>
      </div>
      
      <div className="hidden md:flex space-x-6 text-gray-600">
        <a href="#home" className="hover:text-teal-700">Home</a>
        <a href="#about" className="hover:text-teal-700">About Us</a>
        <a href="#features" className="hover:text-teal-700">Features</a>
        <a href="#pricing" className="hover:text-teal-700">Pricing</a>
        <a href="#contact" className="hover:text-teal-700">Contact Us</a>
      </div>
      
      <div className="hidden md:flex items-center space-x-4">
        <a href="#login" className="text-gray-600 hover:text-teal-700">Login</a>
        <a href="#register" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800">Register</a>
      </div>
      
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-600 hover:text-teal-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li><a href="#home" className="text-gray-600 hover:text-teal-700">Home</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-teal-700">About Us</a></li>
            <li><a href="#features" className="text-gray-600 hover:text-teal-700">Features</a></li>
            <li><a href="#pricing" className="text-gray-600 hover:text-teal-700">Pricing</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-teal-700">Contact Us</a></li>
            <li><a href="#login" className="text-gray-600 hover:text-teal-700">Login</a></li>
            <li>
              <a href="#register" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800">
                Register
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
