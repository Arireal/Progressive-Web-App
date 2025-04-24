import { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight, Home, Palette, Menu } from 'lucide-react';
import Herocomponent from './FrontpageHero';
import BestSellers from './bestsellers';
import ShopBy from './shopby';
import SwCollection from './swcollection';
import BannerFooter from './frontpageFooter';
import SocialBanner from './onlybanner';


export default function MobileLayout() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const bestSellers = [
    { id: 1, likes: 474, image: "/api/placeholder/250/350", title: "Product 1" },
    { id: 2, likes: 575, image: "/api/placeholder/250/350", title: "Product 2" },
    { id: 3, likes: 328, image: "/api/placeholder/250/350", title: "Product 3" },
  ];
  
  const shopByCategories = [
    { name: "ART", image: "/api/placeholder/150/150" },
    { name: "CATALOG", image: "/api/placeholder/150/150" },
    { name: "COLLECTION", image: "/api/placeholder/150/150" },
  ];
  
  const collectionItems = Array(9).fill().map((_, i) => ({
    id: i,
    image: "/api/placeholder/150/150"
  }));

  const handlePrevSlide = () => {
    setActiveSlide(prev => (prev === 0 ? bestSellers.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide(prev => (prev === bestSellers.length - 1 ? 0 : prev + 1));
  };

  return (
    
    <div className="flex flex-col min-h-screen bg-white">

      <Herocomponent />
      <BestSellers />
      <ShopBy />
      <SwCollection />
      <SocialBanner  />
      <BannerFooter/>

    </div>
  );
}