import { useState, useEffect } from 'react';
import { Instagram } from "lucide-react";
import { SiTiktok, SiRedbubble } from 'react-icons/si';

export default function FloralHeader() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setLoaded(true);
  }, []);
  
  return (
    <header className="w-full bg-black relative overflow-hidden">
      {/* Floral outline background */}
      <div className="absolute inset-0 opacity-20 bg-repeat" 
           style={{
             backgroundImage: "url('/imgs/floral-outline.png')",
             backgroundSize: "cover"
           }}>
      </div>
      
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center px-4 py-8 relative z-10">
        {/* Logo - Centered */}
        <div className="flex flex-col items-center justify-center mt-6 mb-4">
          <div className="bg-black p-2 rounded-lg shadow-lg mb-2">
            <img src="/imgs/new-logo.png" alt="Logo" className="w-[180px] h-[180px]" />
          </div>
        </div>
        
        {/* Social media icons - under the logo */}
        <div className="flex items-center justify-center gap-8 mb-10">
          < a href="https://www.instagram.com/adwstudium/">
          <button className="text-white hover:text-purple-400 transition-colors">
            <Instagram size={22} />
          </button>
          </a>
          < a href="https://www.tiktok.com/@adwstudium">
          <button className="text-white hover:text-teal-400 transition-colors">
            <SiTiktok size={22} />
          </button>
          </a>
          < a href="https://www.redbubble.com/people/ADWStudiumShop/shop?asc=u">
          <button className="text-white hover:text-amber-400 transition-colors relative">
            <SiRedbubble  size={22} />
            
          </button>
          </a>
        </div>
        
        
      </div>
    </header>
  );
}