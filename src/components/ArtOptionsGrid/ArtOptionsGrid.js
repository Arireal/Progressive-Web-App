import React, { useEffect, useState } from "react";
import "./ArtOptionsGrid.css"; 

const artworks = [
  { id: 1, img: "imgs/artwork1.jpg", title: "Whimsical Skull Heart", description: "White Contour on Black Background", link:"https://www.redbubble.com/shop/ap/164646375" },
  { id: 2, img: "imgs/artwork2.jpg", title: "Whimsical Skull Heart", description: "Black Contour on White Background", link: "https://www.redbubble.com/shop/ap/164650479?ref=studio-promote" },
  { id: 3, img: "imgs/artwork3.jpg", title: "OAK - Extended Halloween Days (90s Tape Edition)", description: "Vintage Art", link: "https://www.redbubble.com/shop/ap/164714503?ref=studio-promote" },
  { id: 4, img: "imgs/artwork4.jpg", title: "Cute Ghosts Halloween Duo", description: "Adorably spooky!", link: "https://www.redbubble.com/shop/ap/164656967?ref=studio-promote" },
  { id: 5, img: "imgs/artwork5.jpg", title: "Too Cute to Spook ", description: "Magnets, T-shirts & More.", link: "https://www.redbubble.com/shop/ap/164657196?ref=studio-promote" },
  { id: 6, img: "imgs/artwork6.jpg", title: "Ghost Parade on Purple", description: "Fun, quirky, and perfect for those who love a playful Halloween vibe!", link: "https://www.redbubble.com/shop/ap/164657297?ref=studio-promote" },
  { id: 6, img: "imgs/artwork7.jpg", title: "Stay Spooky", description: " Pumpkin Vibes!", link: "https://www.redbubble.com/shop/ap/164714173?ref=studio-promote" },
  { id: 6, img: "imgs/artwork8.jpg", title: "Halloween Spooky Club", description: "Join the Ghostly Fun with this Retro-Inspired Halloween Design!", link: "https://www.redbubble.com/shop/ap/164713942?ref=studio-promote" }
];

const ArtOptionsGrid = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger slide-in animation after the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div>
      <h1 className="artgrid-title">Pick a Design, See All Its Products</h1>
      <div className={`artgrid ${isVisible ? "slide-in" : "slide-out"}`}>
        {artworks.map((artwork) => (
          <div key={artwork.id} className="box">
           {artwork.link ? (
          <a href={artwork.link} target="_blank" rel="noopener noreferrer" className="artwork-link">
            <img src={artwork.img} alt={artwork.title} />
            <div className="overlay">
              <span>PICK IT NOW</span>
            </div>
          </a>
        ) : (
          <img src={artwork.img} alt={artwork.title} />
        )}
            <div className="product">
              <h3 className="product-title">{artwork.title}</h3>
              <p className="product-description">{artwork.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  
};

export default ArtOptionsGrid;
