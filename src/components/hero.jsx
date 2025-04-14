import React from 'react';

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/api/placeholder/1920/1080')",
        }}
      >
        {/* Optional overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      </div>
      
      {/* Logo Semi-circle */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
        <div className="relative">
          <div className="w-32 h-16 bg-black rounded-b-full flex items-center justify-center">
            {/* Your logo would go here */}
            <div className="text-white text-xl font-bold">
              {/* Placeholder for logo */}
              <div className="flex flex-col items-center">
                <div className="flex">
                  <div className="w-4 h-4 bg-purple-500 transform rotate-45"></div>
                  <div className="w-4 h-4 bg-teal-400 transform rotate-45"></div>
                  <div className="w-4 h-4 bg-yellow-400 transform rotate-45"></div>
                </div>
                <div className="mt-1 text-xs text-center">
                  <span className="text-purple-500">A</span>
                  <span className="text-teal-400">D</span>
                  <span className="text-yellow-400">W</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Side - Big Text */}
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-6xl md:text-8xl font-bold mb-4">
                <span className="text-yellow-400">SPRING</span>
                <br />
                <span className="text-teal-800">WHIMSY</span>
              </h1>
            </div>
            
            {/* Right Side - Space for image or additional content */}
            <div className="md:w-1/3"></div>
          </div>
        </div>
      </div>
      
      {/* CTA Button */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
        <button className="bg-white text-black px-12 py-3 rounded-full border-2 border-black font-medium hover:bg-gray-100 transition duration-300">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}