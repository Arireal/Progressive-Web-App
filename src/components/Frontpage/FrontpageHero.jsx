import React, { useState, useEffect } from 'react';

export default function HeroComponent() {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if viewport is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div style={{ backgroundColor: '#1e1e1e' }}>
      <div className="relative w-full overflow-hidden bg-black rounded-bl-[100px] rounded-br-[100px]">
        {/* Background with floral pattern */}
        <div className="absolute inset-0 z-0 bg-amber-50">
        <div
        className="absolute inset-0"
        style={{
          backgroundImage: isMobile 
            ? `url("/imgs/mobile-img.png")` 
            : `url("/imgs/hero-image.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isMobile ? 0.7 : 1, // 👈 Only apply reduced opacity on mobile
        }}
      ></div>

        </div>
        {/* Content container */}
        <div className="relative z-10 flex flex-col items-center px-6 pt-6 pb-8">
          {/* Logo area */}
          <div className="mb-4 flex h-32 w-32 rounded-lg items-center justify-center bg-black">
            <img
              src="/imgs/new-logo.png"
              alt="Logo"
              className="h-full w-full object-contain"
            />
          </div>
          {/* Hero content */}
          <div className="mt-8 text-center">
            <div className="absolute inset-0 flex items-center justify-center mt-8">
              <img
                src="/imgs/collectiontitle-sw.png"
                alt="Spring Whimsy Collection"
                className="w-[300px] max-w-full h-auto"
              />
            </div>
            {/* CTA Button */}
            <div className="mt-8">
              <a href="https://www.redbubble.com/people/adwstudiumshop/shop?artistUserName=adwstudiumshop&collections=4245050&iaCode=all-departments&sortOrder=top%20selling">
              <button
              className="relative rounded-full px-8 py-2 font-medium text-black mt-32 bg-[#fcf09d] hover:bg-[#7859a6] hover:text-white transition-colors duration-300 shadow-[4px_6px_0px_0px_#fcb246]"
            >
              see NEW collection
            </button>

          </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}