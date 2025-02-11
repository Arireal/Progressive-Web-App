import React, { useEffect, useState } from "react";
import "./masonrygrid.css";
import "font-awesome/css/font-awesome.min.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [enteringProducts, setEnteringProducts] = useState([]); // Track products being added
  const [leavingProducts, setLeavingProducts] = useState([]); // Track products being removed

  const categories = ["All", "OAK Collection", "Spooky Season"];

  useEffect(() => {
    fetch("/productData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched product data:", data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  // Filter products based on active category
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) =>
          product.category.includes(activeCategory)
        );

  // Handle product slide-in effect when the category is changed
  useEffect(() => {
    // Identify the products that are new to the current filter
    setEnteringProducts(filteredProducts);

    // Set a timeout for the slide-out effect of leaving products
    setLeavingProducts(
      products.filter((product) => !filteredProducts.includes(product))
    );

    // Clean up the leaving products after animation
    const timeoutId = setTimeout(() => {
      setLeavingProducts([]);
    }, 300); // Adjust the duration to match the CSS animation duration

    return () => clearTimeout(timeoutId);
  }, [activeCategory, filteredProducts, products]);

  return (
    <div>
      {/* Category Buttons */}
      <div className="category-filter">
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
              <div className="product">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <div className="heart-icon">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                  <span>{product.reviews} reviews</span>
                </div>
                {product.price && (
                  <p className="product-price">Price: ${product.price}</p>
                )}
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
