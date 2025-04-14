import React, { useState } from 'react';
import { Paintbrush, Home, Table, Instagram, } from "lucide-react";
import { SiTiktok, SiRedbubble } from 'react-icons/si';

export default function BannerFooter() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative w-full">
      {/* Social Media Banner */}
      <div className="relative h-64 w-full bg-red-400">
        {/* This would be replaced with your actual background image */}
        <div className="absolute inset-0 bg-red-400">
          {/* Background image would go here */}
        </div>
        
        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 p-6 text-center">
          <h3 className="text-xl font-bold text-white">Follow us on social media</h3>
          
          {/* Social Media Icons */}
          <div className="flex items-center justify-center space-x-8">
            {/* Instagram Icon */}
            <a href="#" className="text-white hover:text-gray-200">
            <Instagram className="h-8 w-8"  viewBox="0 0 24 24"/> 
              
            </a>
            
            {/* TikTok Icon */}
            <a href="#" className="text-white hover:text-gray-200">
            <SiTiktok className="h-8 w-8"  viewBox="0 0 24 24"/> 
            </a>
            
            {/* Redbubble Icon (using a placeholder circle) */}
            <a href="#" className="text-white hover:text-gray-200">
            <SiRedbubble  className="h-8 w-8"  viewBox="0 0 24 24"/> 
            </a>
          </div>
        </div>
      </div>
      
      {/* Fixed Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50"
       style={{ backgroundColor: '#1e1e1e' }}>
        <div className="flex h-16 items-center justify-between px-4">
          {/* Home Icon */}
          <a href="#" className="flex items-center justify-center p-2">
             <Home className="h-8 w-8 text-cyan-600" />             
          </a>
          
          {/* Palette Icon */}
          <a href="#" className="flex items-center justify-center p-2">
          <Paintbrush className="h-8 w-8 text-cyan-600" />
          </a>
          
          {/* Menu List Icon */}
          <a href="#" className="flex items-center justify-center p-2">
          <Table className="h-8 w-8 text-cyan-600" />
          </a>
          
          {/* Logo Icon */}
          <a href="#" className="flex items-center justify-center p-2">
        <div className="flex h-10 w-10 items-center rounded-lg justify-center bg-black">
          <img 
            src="/imgs/new-logo.png" 
            alt="Logo" 
            className="h-10 w-8=10 object-contain" 
          />
        </div>
      </a>

          
          {/* Hamburger Menu Icon */}
          <button className="relative flex items-center justify-center p-2" onClick={toggleMenu}>
            <svg className="h-8 w-8" fill="#1f9eaa" viewBox="0 0 24 24">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
            </svg>
            
            {/* Dropdown Menu */}
            {menuOpen && (
              <div className="absolute bottom-16 right-0 w-48 rounded-lg bg-white shadow-lg">
                <div className="flex flex-col p-2">
                  <a href="#" className="p-2 text-left hover:bg-gray-100">About Us</a>
                  <a href="#" className="p-2 text-left hover:bg-gray-100">Contact</a>
                </div>
              </div>
            )}
          </button>
        </div>
      </div>
      
      {/* Space for the fixed footer */}
      <div className="h-16"></div>
    </div>
  );
}