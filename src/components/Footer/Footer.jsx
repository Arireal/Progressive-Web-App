import React, { useState } from 'react';
import { Palette, Home, Table, Mail } from "lucide-react";
import { Link } from 'react-router-dom';

function NavigationFooter({ onPlusClick, onHomeClick, onGiftClick, onUserClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  // State to track the active icon, set default to "home"
  const [activeIcon, setActiveIcon] = useState("catalog");
  
  // Handle icon click and set active state
  const handleClick = (iconName) => {
    setActiveIcon(iconName);
    // Call the respective passed function for each click
    if (iconName === "catalog") onHomeClick();
    if (iconName === "plus") onPlusClick();
    if (iconName === "user") onUserClick();
    if (iconName === "gift") onGiftClick();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    handleClick("gift"); // Call the gift functionality when toggling menu
  };

  return (
    <>
      {/* Fixed Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50"
        style={{ backgroundColor: '#1e1e1e' }}>
        <div className="flex h-16 items-center justify-between px-4">
          {/* Home Icon */}
          <div className="flex items-center justify-center p-2 cursor-pointer">
            <Link to="/">
              <Home
                className={`h-8 w-8 ${activeIcon === "home" ? "text-yellow-400 font-bold" : "text-cyan-600"}`}
                onClick={() => handleClick("home")}
              />
            </Link>
          </div>
          
          {/* Palette Icon (Plus functionality) */}
          <div 
            className="flex items-center justify-center p-2 cursor-pointer"
            onClick={() => handleClick("plus")}
          >
            <Palette
              className={`h-8 w-8 ${activeIcon === "plus" ? "text-yellow-400 font-bold" : "text-cyan-600"}`} 
            />
          </div>
          
          {/* Table Icon (replaces another functionality) */}
          <div 
            className="flex items-center justify-center p-2 cursor-pointer"
            onClick={() => handleClick("catalog")}
          >
            <Table
              className={`h-8 w-8 ${activeIcon === "catalog" ? "text-yellow-400 font-bold" : "text-cyan-600"}`} 
            />
          </div>
          
          {/* Logo Icon (User functionality) */}
          <div 
            className="flex items-center justify-center p-2 cursor-pointer"
            onClick={() => handleClick("user")}
          >
            <div className={`flex h-10 w-10 items-center rounded-lg justify-center bg-black ${activeIcon === "user" ? "ring-2 ring-yellow-400" : ""}`}>
              <img
                src="/imgs/new-logo.png"
                alt="Logo"
                className="h-10 w-10 object-contain"
              />
            </div>
          </div>
          
          {/* Mail) */}
          <div className="flex items-center justify-center p-2 cursor-pointer">
            <Mail
              className={`h-8 w-8 text-cyan-600`} 
            />
          </div>
        </div>
      </div>
      {/* Space for the fixed footer */}
      <div className="h-16"></div>
    </>
  );
}

export default NavigationFooter;