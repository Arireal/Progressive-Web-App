import React from 'react';

export default function ShopByGrid() {
  // External links for each button
  const links = {
    art: "https://www.redbubble.com/shop/ap/169726389",
    catalog: "https://www.adwstudium.com/main",
    collection: "https://www.redbubble.com/people/adwstudiumshop/shop?artistUserName=adwstudiumshop&collections=4245050&iaCode=all-departments&sortOrder=top%20selling"
  };

  // Neumorphic button component
  const NeumorphicButton = ({ text, link, bgColor }) => {
    return (
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-4/5 h-16 rounded-xl text-black font-bold uppercase text-2xl transition-all duration-300 focus:outline-none"
        style={{
          backgroundColor: bgColor,
          boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.2), -8px -8px 15px rgba(255, 255, 255, 0.1)",
        }}
      >
        <div 
          className="w-full h-full flex items-center justify-center rounded-xl hover:translate-y-1 hover:shadow-inner focus:translate-y-1 focus:shadow-inner transition-all duration-300"
          style={{
            boxShadow: "inset 0 0 0 rgba(0, 0, 0, 0)",
            ":hover": {
              boxShadow: "inset 4px 4px 8px rgba(0, 0, 0, 0.2), inset -4px -4px 8px rgba(255, 255, 255, 0.1)"
            }
          }}
        >
          {text}
        </div>
      </a>
    );
  };

  return (
    <div className="w-full h-full">
      {/* Header */}
      <div className="py-4 text-center"
        style={{ backgroundColor: '#1e1e1e' }}>
        <h2 className="text-4xl font-bold md:text-5xl"
          style={{ color: '#fcb246' }}>SHOP BY</h2>
      </div>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-2">
        {/* Row 1 */}
        <div className="flex aspect-square items-center justify-center p-4"
          style={{ backgroundColor: '#fcb246' }}>
          <NeumorphicButton text="Art" link={links.art} bgColor="#fcb246" />
        </div>
        <div className="flex aspect-square items-center justify-center bg-white">
          <img
            src="/imgs/sb1.jpg"
            alt="Abstract pattern art"
            className="h-full w-full object-cover"
          />
        </div>
        
        {/* Row 2 */}
        <div className="flex aspect-square items-center justify-center bg-white">
          <div className="flex aspect-square items-center justify-center bg-white">
            <img
              src="/imgs/sb2.jpg"
              alt="Abstract pattern art"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex aspect-square items-center justify-center"
          style={{ backgroundColor: '#1f9eaa' }}>
          <NeumorphicButton text="Catalog" link={links.catalog} bgColor="#1f9eaa" />
        </div>
        
        {/* Row 3 */}
        <div className="flex aspect-square items-center justify-center p-4"
          style={{ backgroundColor: '#7859a6' }}>
          <NeumorphicButton text="Collection" link={links.collection} bgColor="#7859a6" />
        </div>
        <div className="flex aspect-square items-center justify-center bg-amber-100">
          <div className="flex aspect-square items-center justify-center bg-white">
            <img
              src="/imgs/sb3.jpg"
              alt="Abstract pattern art"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}