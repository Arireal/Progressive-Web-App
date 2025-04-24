import React, { useEffect, useState, useRef } from "react";
import "./masonrygrid.css";
import { Heart } from 'lucide-react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [enteringProducts, setEnteringProducts] = useState([]);
  const [leavingProducts, setLeavingProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState({});

  const handleLikeClick = (productId, e) => {
    // Prevent event from bubbling up to parent elements
    e.stopPropagation();
    
    // Toggle liked state
    setLikedProducts((prev) => {
      const newState = {
        ...prev,
        [productId]: !prev[productId],
      };
      
      // Store in local storage for persistence
      localStorage.setItem('likedProducts', JSON.stringify(newState));
      
      return newState;
    });

    // Optional: Send to backend for tracking
    // fetch('/api/track-like', { method: 'POST', body: JSON.stringify({ id: productId }) })
  };

  // Categories List
  const categories = ["All", "Spring Whimsy", "OAK Collection", "Spooky Season"];

  // Drag-to-scroll functionality for category filter
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const filterRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - filterRef.current.offsetLeft);
    setScrollLeft(filterRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - filterRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    filterRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    // Load liked products from localStorage on component mount
    const storedLikes = localStorage.getItem('likedProducts');
    if (storedLikes) {
      setLikedProducts(JSON.parse(storedLikes));
    }
    
    fetch("/productData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched product data:", data);
        
        // First sort all products by ID (newest first)
        const sortedData = [...data].sort((a, b) => b.id - a.id);
        
        // Keep the first 4 products sorted by ID
        const topFourProducts = sortedData.slice(0, 4);
        
        // Shuffle all remaining products
        const remainingProducts = sortedData.slice(4);
        const shuffledRemainingProducts = shuffleArray(remainingProducts);
        
        // Combine the arrays back together - top 4 in ID order, rest shuffled
        const finalProductList = [...topFourProducts, ...shuffledRemainingProducts];
        
        setProducts(finalProductList);
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  // Shuffle function for randomizing products
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
    }
    return newArray;
  };

  // Filter products based on active category
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) =>
          product.category.includes(activeCategory)
        );

  // Handle product slide-in effect when the category is changed
  useEffect(() => {
    setEnteringProducts(filteredProducts);
    setLeavingProducts(
      products.filter((product) => !filteredProducts.includes(product))
    );

    const timeoutId = setTimeout(() => {
      setLeavingProducts([]);
    }, 300); // Match with CSS animation duration

    return () => clearTimeout(timeoutId);
  }, [activeCategory, filteredProducts, products]);
  
  return (
    <div>
      {/* Category Buttons with Dragging */}
      <div
        className="category-filter"
        ref={filterRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <h1 className="artgrid-title text-center">Choose by Collection</h1>

      {/* Render filtered products inside the grid */}
      <div className="container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`box ${
                enteringProducts.includes(product)
                  ? "masonry-slide-in"
                  : leavingProducts.includes(product)
                  ? "masonry-slide-out"
                  : ""
              }`}
            >
              <div className="product-image-container">
                <a href={product.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={
                      product.img.startsWith("http")
                        ? product.img
                        : `${process.env.PUBLIC_URL}/${product.img}`
                    }
                    alt={product.title}
                  />
                  <div className="overlay">
                    <span>BUY IT NOW</span>
                  </div>
                </a>
              </div>
              
              <div className="product">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                
                {product.price && (
                  <p className="product-price">Price: ${product.price}</p>
                )}
                
                <div className="heart-icon">
                  <button 
                    className="like-button" 
                    onClick={(e) => handleLikeClick(product.id, e)}
                    aria-label={likedProducts[product.id] ? "Unlike" : "Like"}
                  >
                    <Heart 
                      fill={likedProducts[product.id] ? "#ffb426" : "none"} 
                      color="#ffb426" 
                      size={24} 
                    />
                  </button>
                  <span>{product.reviews} liked this</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;