import React, { useState } from 'react';
import { Paintbrush, Home, Table } from "lucide-react";
import { Link } from 'react-router-dom';

export default function NavigationFooter() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Fixed Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50" style={{ backgroundColor: '#1e1e1e' }}>
      <div className="flex h-16 items-center justify-center px-4">
        <div className="mt-8">
          <Link to="/main"> {/* change "/store" to your actual route */}
            <button className="relative rounded-full px-8 py-2 font-medium text-black shadow-md mb-8" style={{ backgroundColor: '#fcb246' }}>
              Curious? See the Whole Store!
            </button>
          </Link>
        </div>
      </div>
    </div>
      {/* Space for the fixed footer */}
      <div className="h-16"></div>
    </>
  );
}