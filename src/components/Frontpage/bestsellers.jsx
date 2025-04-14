import React, { useState, useRef, useEffect } from 'react';

export default function BestSellers() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  
  const products = [
    { 
      id: 1, 
      name: "Premium Gold Watch",
      price: "$299.99",
      likes: 474,
      image: "/api/placeholder/300/300" 
    },
    { 
      id: 2, 
      name: "Designer Sunglasses",
      price: "$149.99",
      likes: 579,
      image: "/api/placeholder/300/300" 
    },
    { 
      id: 3, 
      name: "Leather Wallet",
      price: "$89.99",
      likes: 623,
      image: "/api/placeholder/300/300" 
    },
    { 
      id: 4, 
      name: "Silk Scarf",
      price: "$79.99",
      likes: 512,
      image: "/api/placeholder/300/300" 
    },
    { 
      id: 5, 
      name: "Wireless Headphones",
      price: "$199.99",
      likes: 498,
      image: "/api/placeholder/300/300" 
    },
    { 
      id: 6, 
      name: "Premium Perfume",
      price: "$129.99",
      likes: 467,
      image: "/api/placeholder/300/300" 
    },
    { 
      id: 7, 
      name: "Cashmere Sweater",
      price: "$189.99",
      likes: 432,
      image: "/api/placeholder/300/300" 
    },
    { 
      id: 8, 
      name: "Leather Belt",
      price: "$59.99",
      likes: 386,
      image: "/api/placeholder/300/300" 
    },
    { 
      id: 9, 
      name: "Silver Bracelet",
      price: "$119.99",
      likes: 412,
      image: "/api/placeholder/300/300" 
    },
  ];

  useEffect(() => {
    const calculatePages = () => {
      if (carouselRef.current) {
        // Determine how many products can be visible at once
        const carouselWidth = carouselRef.current.offsetWidth;
        const productWidth = 320; // product width + gap
        const visibleProducts = Math.max(1, Math.floor(carouselWidth / productWidth));
        
        // Calculate total pages
        const pages = Math.ceil(products.length / visibleProducts);
        setTotalPages(pages);
      }
    };
    
    calculatePages();
    window.addEventListener('resize', calculatePages);
    
    return () => window.removeEventListener('resize', calculatePages);
  }, [products.length]);

  const goToPage = (index) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const carouselWidth = carousel.offsetWidth;
      const productWidth = 320; // product width + gap
      const visibleProducts = Math.max(1, Math.floor(carouselWidth / productWidth));
      
      // Calculate scroll position for this page
      const scrollAmount = index * visibleProducts * productWidth;
      carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const scrollPosition = carousel.scrollLeft;
      const carouselWidth = carousel.offsetWidth;
      const productWidth = 320; // product width + gap
      const visibleProducts = Math.max(1, Math.floor(carouselWidth / productWidth));
      
      // Calculate which page we're on based on scroll position
      const currentPage = Math.round(scrollPosition / (visibleProducts * productWidth));
      setActiveIndex(currentPage);
    }
  };

  const scroll = (direction) => {
    const newIndex = direction === 'left' 
      ? Math.max(0, activeIndex - 1) 
      : Math.min(totalPages - 1, activeIndex + 1);
    
    goToPage(newIndex);
  };

  return (
    <div className="w-full px-4 py-12 md:px-8"
    style={{ backgroundColor: '#1e1e1e' }}>
      <h2 className="mb-8 text-center text-4xl font-bold md:text-5xl" style={{ color: '#fcb246' }}>
        BEST SELLERS
      </h2>
      
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className={`absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-amber-400 p-2 text-black shadow-lg transition hover:bg-amber-300 md:-left-4 md:p-3 ${activeIndex <= 0 ? 'opacity-50' : 'opacity-100'}`}
          disabled={activeIndex <= 0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Products Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={handleScroll}
        >
          <style jsx>{`
            ::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {products.map((product) => (
            <div
              key={product.id}
              className="relative flex min-w-[300px] flex-col items-center justify-between rounded-3xl bg-gradient-to-b from-amber-400 to-amber-500 shadow-xl transition-transform hover:scale-105"
              style={{ height: '450px' }}
            >
              {/* Product Image */}
              <div className="relative h-64 w-full overflow-hidden rounded-t-3xl">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              
              {/* Likes indicator */}
              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-black bg-opacity-70 px-3 py-1 font-semibold text-white">
                <span>{product.likes}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Product Info */}
              <div className="flex w-full flex-col px-6 py-4">
                <h3 className="text-xl font-bold text-black">{product.name}</h3>
                <p className="mb-4 text-lg font-semibold text-black">{product.price}</p>
                
                {/* CTA Button */}
                <button className="mt-auto w-full rounded-full bg-black py-3 text-lg font-medium text-white transition hover:bg-gray-800">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className={`absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-amber-400 p-2 text-black shadow-lg transition hover:bg-amber-300 md:-right-4 md:p-3 ${activeIndex >= totalPages - 1 ? 'opacity-50' : 'opacity-100'}`}
          disabled={activeIndex >= totalPages - 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Dot Navigation */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`h-3 w-3 rounded-full transition-all ${activeIndex === index ? 'bg-amber-400 w-6' : 'bg-gray-500 hover:bg-gray-400'}`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}