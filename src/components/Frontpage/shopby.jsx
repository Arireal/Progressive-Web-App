import React from 'react';

export default function ShopByGrid() {
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
        <div className="flex aspect-square  items-center justify-center p-4"
        style={{ backgroundColor: '#fcb246' }}>
          <h3 className="text-2xl font-bold uppercase text-black">Art</h3>
        </div>
        <div className="flex aspect-square items-center justify-center bg-white ">
          
            <img 
              src="/imgs/sb1.jpg" 
              alt="Abstract pattern art" 
              className="h-full w-full object-cover"
            />
          
        </div>
        
        {/* Row 2 */}
        <div className="flex aspect-square  items-center justify-center bg-white">
        <div className="flex aspect-square items-center justify-center bg-white ">
          
          <img 
            src="/imgs/sb2.jpg" 
            alt="Abstract pattern art" 
            className="h-full w-full object-cover"
          />
        
      </div>
        </div>
        <div className="flex aspect-square items-center justify-center"
        style={{ backgroundColor: '#1f9eaa' }}>
          <h3 className="text-2xl font-bold uppercase text-black">Catalog</h3>
        </div>
        
        {/* Row 3 */}
        <div className="flex aspect-square  items-center justify-center  p-4"
        style={{ backgroundColor: '#7859a6' }}>
          <h3 className="text-2xl font-bold uppercase text-black">Collection</h3>
        </div>
        <div className="flex aspect-square items-center justify-center bg-amber-100 ">
        <div className="flex aspect-square items-center justify-center bg-white ">
          
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