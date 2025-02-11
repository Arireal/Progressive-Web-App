import React, { useState, useEffect } from 'react';
import './footer.css';
import { FaHome, FaPlus, FaUserCircle, FaGift } from 'react-icons/fa';

function Footer({ onPlusClick, onHomeClick, onGiftClick, onUserClick }) {
  // State to track the active icon, set default to "home"
  const [activeIcon, setActiveIcon] = useState("home");

  // Handle icon click and set active state
  const handleClick = (iconName) => {
    setActiveIcon(iconName);
    // Call the respective passed function for each click
    if (iconName === "home") onHomeClick();
    if (iconName === "plus") onPlusClick();
    if (iconName === "user") onUserClick();
    if (iconName === "gift") onGiftClick();
  };

  return (
    <footer className="footer">
      <div className="footer-icons">
        <FaHome
          className={`footer-icon ${activeIcon === "home" ? "active" : ""}`}
          onClick={() => handleClick("home")}
        />
        <FaPlus
          className={`footer-icon ${activeIcon === "plus" ? "active" : ""}`}
          onClick={() => handleClick("plus")}
        />
        <FaUserCircle
          className={`footer-icon ${activeIcon === "user" ? "active" : ""}`}
          onClick={() => handleClick("user")}
        />
        <FaGift
          className={`footer-icon ${activeIcon === "gift" ? "active" : ""}`}
          onClick={() => handleClick("gift")}
        />
      </div>
    </footer>
  );
}

export default Footer;
