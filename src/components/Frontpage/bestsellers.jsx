import React, { useState, useRef, useEffect } from 'react';

export default function BestSellers() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  
  const products = [
    { 
      id: 1, 
      name: "Iphone Case",
      price: "$29.34",
      likes: 654,
      image: "imgs/springwhimsy/highlight.png",
      url: "https://www.redbubble.com/i/iphone-case/Golden-Garden-Reverie-by-ADWStudiumShop/169726389.GENBX"
    },
    { 
      id: 2, 
      name: "Baseball Cap",
      price: "$25.09",
      likes: 527,
      image: "imgs/springwhimsy/cap.png",
      url: "https://www.redbubble.com/i/hat/Wish-Upon-the-Breeze-by-ADWStudiumShop/169650877.NJ288"
    },
    { 
      id: 3, 
      name: "Iphone Case",
      price: "$29.34",
      likes: 623,
      image: "imgs/springwhimsy/flowerfileds-bs.png",
      url: "https://www.redbubble.com/i/iphone-case/Golden-Sun-and-Flower-Fields-by-ADWStudiumShop/169726952.GENBX"
    },
    { 
      id: 4, 
      name: "Classic T-Shirt", 
      price: "$23.52",
      likes: 1803,
      image: "imgs/springwhimsy/springtshirt.png",
      url: "https://www.redbubble.com/i/t-shirt/Whispers-of-Spring-by-ADWStudiumShop/169724964.WFLAH"
    },
    { 
      id: 5, 
      name: "Samsung Galaxy Phone Case", 
      price: "$37.40",
      likes: 169,
      image: "imgs/springwhimsy/ghostparade.png",
      url: "https://www.redbubble.com/i/samsung-case/Ghost-Parade-on-Purple-by-ADWStudiumShop/164657297.LGDWM"
    },
    { 
      id: 6, 
      name: "Throw Pillow",
      price: "$22.37",
      likes: 422,
      image: "imgs/springwhimsy/pillow.png",
      url: "https://www.redbubble.com/i/throw-pillow/Fluttering-Tapestry-by-ADWStudiumShop/169724578.5X2YF"
    },
    { 
      id: 7, 
      name: "Mouse Pad",
      price: "$21.94",
      likes: 479,
      image: "imgs/springwhimsy/pad.png",
      url: "https://www.redbubble.com/i/mouse-pad/Bugs-Parade-by-ADWStudiumShop/169720582.G1FH6"
    },
    { 
      id: 8, 
      name: "Classic T-Shirt",
      price: "$23.52",
      likes: 924,
      image: "imgs/springwhimsy/beetle.png",
      url: "https://www.redbubble.com/i/t-shirt/Midnight-Blossom-Beetle-by-ADWStudiumShop/169721665.WFLAH"
    },
    { 
      id: 9, 
      name: "Sticker",
      price: "$2.87",
      likes: 2079,
      image: "imgs/springwhimsy/sticker.png",
      url: "https://www.redbubble.com/i/sticker/Soft-Petals-Bright-Dreams-by-ADWStudiumShop/169726544.EJUG5"
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
              className="relative flex min-w-[300px] flex-col items-center justify-between rounded-2xl transition-transform hover:scale-105 overflow-hidden"
              style={{ backgroundColor: '#fcb246', height: '550px' }}
            >
              
              {/* Product Image - Updated for portrait format */}
              <div className="relative w-full overflow-hidden rounded-t-3xl mt-4" style={{ height: '380px' }}>
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
              <div className="flex w-full flex-col px-6 py-2">
                <h3 className="text-xl font-bold text-black">{product.name}</h3>
                <p className="mb-4 text-lg font-semibold text-black">{product.price}</p>
                
                {/* CTA Button with link */}
                <a 
                  href={product.url}
                  className="mt-auto block w-full rounded-full bg-black py-3 text-center text-lg font-medium text-white transition hover:bg-gray-800"
                >
                  View Product
                </a>
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