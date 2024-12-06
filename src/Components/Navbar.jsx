import React from 'react'
import { Link } from 'react-router-dom'
import VWLogo from '../assets/vr-warriors-high-resolution-logo.png'
import { NavLink } from "react-router-dom";
import { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md p-4">
    <ul  className="flex justify-between">
      {/* Logo on the left */}
      <li>
        <NavLink to="/">
          <img 
            src={VWLogo} 
            alt="Logo" 
            className="w-10 h-10 object-cover rounded-full border-4 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </NavLink>
      </li>

     
      {/* Navigation links centered */}
      <div className="flex space-x-10">
        <li>
          <NavLink  to="/" className={({ isActive }) => 
            isActive ? "text-blue-500 font-bold" : "text-white hover:text-blue-500"}>Home</NavLink >
        </li>
        <li>
          <NavLink  to="/about" className={({ isActive }) => 
            isActive ? "text-blue-500 font-bold" : "text-white hover:text-blue-500"}>About</NavLink >
        </li>
        <li>
          <NavLink  to="/experience" className={({ isActive }) => 
            isActive ? "text-blue-500 font-bold" : "text-white hover:text-blue-500"}>Experience</NavLink >
        </li>
        <li>
          <NavLink  to="/products" className={({ isActive }) => 
            isActive ? "text-blue-500 font-bold" : "text-white hover:text-blue-500"}>Products</NavLink >
        </li>
      </div>
    </ul>
  </nav>
  
    </>
   
    
  );
};

export default Navbar;

  

