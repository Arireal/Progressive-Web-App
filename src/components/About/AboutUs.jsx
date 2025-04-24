import React from "react";
import "./AboutUs.css"; // If you have a separate CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-box">
      <div className="about-title-section">
        <h1 className="about-title">ABOUT US</h1>
      </div>

      <div className="about-section">
        <div className="about-content-column">
        <p className="stylized">Where Creativity Meets Whimsy:</p>
        <br />
        At ADW Studium, we specialize in turning imagination into art. From vibrant, playful illustrations to custom products like tote bags, phone cases, and planners, we create designs that bring a fresh, whimsical touch to your everyday life. If you're a book-loving, imaginative, and artistic person who enjoys expressing their passion through stylish,
        whimsical products, then ADW Studium is for you!

        </div>

        <div className="about-content-column">
       Our hub is perfect for anyone looking for something unique—whether you're shopping for a one-of-a-kind gift or adding a creative flair to your personal collection. Explore our Redbubble products for designs that combine storytelling with artistry. With more exciting creations on the horizon, ADW Studium is the place where art meets personality.
        </div>

        <div className="about-logo">
          <img src="imgs/logo-gif.gif" alt="ADW Studium Logo" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
