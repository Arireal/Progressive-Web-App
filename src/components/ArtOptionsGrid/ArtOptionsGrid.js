import React, { useEffect, useState } from "react";
import "./ArtOptionsGrid.css"; 

const artworks = [
 
  { id: 1, img: "imgs/artwork1.jpg", title: "Whimsical Skull Heart", description: "White Contour on Black Background", link:"https://www.redbubble.com/shop/ap/164646375" },
  { id: 2, img: "imgs/artwork2.jpg", title: "Whimsical Skull Heart", description: "Black Contour on White Background", link: "https://www.redbubble.com/shop/ap/164650479?ref=studio-promote" },
  { id: 3, img: "imgs/artwork3.jpg", title: "OAK - Extended Halloween Days (90s Tape Edition)", description: "Vintage Art", link: "https://www.redbubble.com/shop/ap/164714503?ref=studio-promote" },
  { id: 4, img: "imgs/artwork4.jpg", title: "Cute Ghosts Halloween Duo", description: "Adorably spooky!", link: "https://www.redbubble.com/shop/ap/164656967?ref=studio-promote" },
  { id: 5, img: "imgs/artwork5.jpg", title: "Too Cute to Spook ", description: "Magnets, T-shirts & More.", link: "https://www.redbubble.com/shop/ap/164657196?ref=studio-promote" },
  { id: 6, img: "imgs/artwork6.jpg", title: "Ghost Parade on Purple", description: "Fun, quirky, and perfect for those who love a playful Halloween vibe!", link: "https://www.redbubble.com/shop/ap/164657297?ref=studio-promote" },
  { id: 7, img: "imgs/artwork7.jpg", title: "Stay Spooky", description: " Pumpkin Vibes!", link: "https://www.redbubble.com/shop/ap/164714173?ref=studio-promote" },
  { id: 8, img: "imgs/artwork8.jpg", title: "Halloween Spooky Club", description: "Join the Ghostly Fun with this Retro-Inspired Halloween Design!", link: "https://www.redbubble.com/shop/ap/164713942?ref=studio-promote" },
   { id: 9, img: "imgs/artwork9.jpg", title: "Golden Sun & Flower Fields", description: "🌻 Add a pop of sunshine and sweetness to your space!", link:"https://www.redbubble.com/shop/ap/169726952" },
   { id: 10, img: "imgs/artwork10.jpg", title: "Wish Upon the Breeze", description: "Drift with the wind, dance with the dreams.", link:"https://www.redbubble.com/shop/ap/169650877" },
   { id: 11, img: "imgs/artwork11.jpg", title: " Whimsical Wanderer", description: "Surrounded by the soft hues of spring.", link:"https://www.redbubble.com/shop/ap/169719802" },
   { id: 12, img: "imgs/artwork12.jpg", title: "Spring’s Tiny Dancers", description: "Delicate butterflies and playful bugs come together in a vibrant dance of colors.", link:"https://www.redbubble.com/shop/ap/169720236" },
   { id: 13, img: "imgs/artwork13.jpg", title: "Bugs Parade", description: "A lively celebration of nature’s tiniest wanderers!", link:"https://www.redbubble.com/shop/ap/169720582" },

   { id: 14, img: "imgs/artwork14.jpg", title: "Ethereal Flight", description: "A moment of delicate beauty in motion.", link:"https://www.redbubble.com/shop/ap/169720836" },
   { id: 15, img: "imgs/artwork15.jpg", title: "Spring’s Tiny Dancers – Colorful Bloom", description: "A joyful dance in full color!", link:"https://www.redbubble.com/shop/ap/169721033" },
   { id: 16, img: "imgs/artwork16.jpg", title: "The Enchanted Wanderer", description: "A tiny traveler from a world of wonder!✨", link:"https://www.redbubble.com/shop/ap/169721264" },
   { id: 17, img: "imgs/artwork17.jpg", title: "The Luminous Drifter", description: "A tiny traveler with wings dipped in sunshine and sky. ☀️", link:"https://www.redbubble.com/shop/ap/169721415" },
   { id: 18, img: "imgs/artwork18.jpg", title: "Midnight Blossom Beetle", description: "A striking black and blue beetle takes center stage", link:"https://www.redbubble.com/shop/ap/169721665" },
   { id: 19, img: "imgs/artwork19.jpg", title: "Botanical Beetle Quartet", description: "A quartet of beautifully illustrated beetles, blending deep blues with soft sand tones", link:"https://www.redbubble.com/shop/ap/169722012" },
   { id: 20, img: "imgs/artwork20.jpg", title: "Fluttering Tapestry", description: "A dreamy dance of dragonflies, butterflies, and moths, weaving a delicate pattern of flight.", link:"https://www.redbubble.com/shop/ap/169724578" },
   { id: 21, img: "imgs/artwork21.jpg", title: "Moonlit Moth", description: "A delicate blue moth with soft sand-toned accents.", link:"https://www.redbubble.com/shop/ap/169724719" },
   { id: 22, img: "imgs/artwork22.jpg", title: "Wings of Whimsy", description: "Painted in botanical hues of blue and sand.", link:"https://www.redbubble.com/shop/ap/169724834" },
   { id: 23, img: "imgs/artwork23.jpg", title: "Whispers of Spring", description: "Evoking the timeless charm of vintage entomology prints.", link:"https://www.redbubble.com/shop/ap/169724964" },
   { id: 24, img: "imgs/artwork24.jpg", title: "Terracotta Waltz", description: "A rhythmic dance of butterflies and moths in rich terracotta hues.", link:"https://www.redbubble.com/shop/ap/169725112" },
   { id: 25, img: "imgs/artwork25.jpg", title: "Daydream Bloom", description: "Thoughts drift like petals on the wind.", link:"https://www.redbubble.com/shop/ap/169726308" },
   { id: 26, img: "imgs/artwork26.jpg", title: "Golden Garden Reverie", description: "Nature hums softly and everything feels golden.", link:"https://www.redbubble.com/shop/ap/169726389" },
   { id: 27, img: "imgs/artwork27.jpg", title: "Soft Petals, Bright Dreams", description: "A hopeful breath carried on a spring breeze.", link:"https://www.redbubble.com/shop/ap/169726544" },
   { id: 28, img: "imgs/artwork28.jpg", title: "In Bloom Together", description: "Let it remind you to embrace your own blooming.", link:"https://www.redbubble.com/shop/ap/169726791" },
];

const ArtOptionsGrid = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger slide-in animation after the component mounts
    setIsVisible(true);
  }, []);

  // Sort artworks in descending order by id
  const sortedArtworks = [...artworks].sort((a, b) => b.id - a.id);

  return (
    <div>
      <h1 className="artgrid-title text-center mt-8">Pick an Art, See All Its Products</h1>
      <div className={`artgrid ${isVisible ? "slide-in" : "slide-out"}`}>
        {sortedArtworks.map((artwork) => (
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
