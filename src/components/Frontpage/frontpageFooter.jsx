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
            <Link to="/main">
              <button className="animated-gradient-button relative rounded-full px-8 py-2 font-medium text-black shadow-md mb-8 hover:scale-105 transition-transform duration-300 overflow-hidden">
                <span className="relative z-10">Curious? See the Whole Store!</span>
                <div className="gradient-animation absolute inset-0 -z-0"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Space for the fixed footer */}
      <div className="h-16"></div>

      <style jsx>{`
        .animated-gradient-button {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .animated-gradient-button:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        .gradient-animation {
          background: linear-gradient(90deg, #7859a6, #ffb442, #0891b2);
          background-size: 200% 200%;
          animation: gradientMove 3s ease infinite;
        }
        
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  );
}