import React, { useState, useEffect } from 'react';
import './CategoryFilter.css';
import "font-awesome/css/font-awesome.min.css";

function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [products, setProducts] = useState([]);

  const categories = ['All', 'OAK Collection', 'Spooky Season'];

  // Fetch product data from the public folder
  useEffect(() => {
    fetch('/productData.json')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched Data:', data);
        setProducts(data);  // Store products in state
      })
      .catch((error) => console.error('Error loading products:', error));
  }, []);

  // Filter products based on active category
  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter((product) =>
        product.category.includes(activeCategory)  // Check if category array includes the active category
      );

  return (
    <div>
      {/* Category Buttons */}
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Render filtered products inside the grid */}
      <div className="container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="box">
              <a href={product.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={product.img.startsWith("http") ? product.img : `${process.env.PUBLIC_URL}/${product.img}`}
                  alt={product.title}
                />
                <div className="overlay">
                  <span>BUY IT NOW</span>
                </div>
              </a>
              <div className="product">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>

                {/* Heart icon with reviews */}
                <div className="heart-icon">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                  <span>{product.reviews} reviews</span>
                </div>

                {/* Display price if available */}
                {product.price && <p className="product-price">Price: ${product.price}</p>}
              </div>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryFilter;
