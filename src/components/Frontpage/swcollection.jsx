import React from 'react';

export default function CollectionGrid() {
  // Grid image placeholders - would be replaced with actual images
  const gridImages = [
    { id: 1, imageUrl: "/imgs/sw1.jpg" },
    { id: 2, imageUrl: "/imgs/sw2.jpg" },
    { id: 3, imageUrl: "/imgs/sw3.jpg" },
    { id: 4, imageUrl: "/imgs/sw4.jpg" },
    { id: 5, imageUrl: "/imgs/sw5.jpg"},
    { id: 6, imageUrl: "/imgs/sw6.jpg"},
    { id: 7, imageUrl: "/imgs/sw7.jpg" },
    { id: 8, imageUrl:"/imgs/sw8.jpg" },
    { id: 9, imageUrl: "/imgs/sw9.jpg" },
  ];
  
  return (
    <div className="w-full">
      {/* Hero section with collection title overlay */}
      <div className="relative">
        {/* Hero background with floral pattern */}
        <div className="relative h-64 w-full bg-amber-50">
        <div
            className="absolute inset-0"
            style={{
                backgroundImage: `url("/imgs/sw-bg.jpg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            ></div>
        
          {/* Collection title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
                src="/imgs/collectiontitle-sw.png" 
                alt="Spring Whimsy Collection"
                className="w-[300px] max-w-full h-auto"
            />
            </div>

        </div>
        
        {/* Collection button at the intersection */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <button className="rounded-full bg-amber-200 px-8 py-2 font-medium text-black shadow-lg transition hover:bg-amber-300">
            collection
          </button>
        </div>
      </div>
      
      {/* 3x3 Image Grid */}
      <div className=" grid grid-cols-3 gap-1">
        {gridImages.map((image) => (
          <div
          key={image.id}
          className="aspect-[2/3] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image.imageUrl})` }}
        >
          {/* Content inside the image div, if any */}
        </div>
        ))}
      </div>
      
      {/* Banner CTA section */}
      <div className="relative h-40 w-full">
        {/* Banner background with floral pattern */}
        <div className="absolute inset-0 bg-amber-50">
        <div
            className="absolute inset-0"
            style={{
                backgroundImage: `url("/imgs/sw-bg.jpg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            ></div>
        </div>
        
        {/* CTA button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="rounded-full bg-black px-8 py-3 font-medium text-white shadow-lg transition hover:bg-gray-800">
            shop now
          </button>
        </div>
      </div>
    </div>
  );
}