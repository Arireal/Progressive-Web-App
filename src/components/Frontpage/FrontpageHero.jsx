import React from 'react';

export default function HeroComponent() {
  return (
    <div style={{ backgroundColor: '#1e1e1e' }}>
    <div className="relative w-full overflow-hidden bg-black rounded-bl-[100px] rounded-br-[100px]">
      {/* Background with floral pattern */}
      <div className="absolute inset-0 z-0 bg-amber-50">
        <div className="absolute inset-0  " 
             style={{
              backgroundImage: `url("/imgs/hero-image.jpg")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
          }}></div>
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
            <button className="relative rounded-full px-8 py-2 font-medium text-black shadow-md mt-32" style={{ backgroundColor: '#fcb246' }}>
              see NEW collection
            </button>
          </div>
        </div>

       
      </div>

    </div>
    </div>
  );
}