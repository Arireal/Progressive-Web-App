import React, { useEffect, useState } from "react";
import "./Newsletter.css";

const SubscriptionBox = () => {
  const [isVisible, setIsVisible] = useState(false);
 

  useEffect(() => {
    // Trigger slide-in animation after the component mounts
    setIsVisible(true);
  }, []);

  

  return (
    <div className={`news-container ${isVisible ? "newsletter-slide-in" : "newsletter-slide-out"}`}>
      <div className="subscription-box">
        <h1 className="newsletter-title">Become a<br />subscriber</h1>
        <p className="newsletter-subtitle">
          Join our mailing list to receive the<br />latest coastal style news and trends.
        </p>
        <form className="newsletter-signup-form">
          <input type="email" className="newsletter-signup-input" placeholder="Sign up now" required />
          <button type="submit" className="newsletter-submit-btn">
            <span className="newsletter-arrow"></span>
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default SubscriptionBox;
