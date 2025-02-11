import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import './components/Header/header.css';
import './components/CategoryFilter/CategoryFilter.css';
import MasonryGrid from './components/MansoryGrid/MasonryGrid';
import './components/MansoryGrid/masonrygrid.css';
import Footer from './components/Footer/Footer';
import './components/Footer/footer.css';
import ArtOptionsGrid from './components/ArtOptionsGrid/ArtOptionsGrid';
import './components/ArtOptionsGrid/ArtOptionsGrid.css';
import Newsletter from './components/newspopup/Newsletter';
import './components/newspopup/Newsletter.css';
import AboutUs from './components/About/AboutUs';
import './components/About/AboutUs.css';

function App() {
  const [grid, setGrid] = useState('MasonryGrid'); // The current grid (MasonryGrid or ArtOptionsGrid)
  const [isPageVisible, setIsPageVisible] = useState(true); // For animation control

  const handlePlusClick = () => {
    setIsPageVisible(false); // Set slide-out effect
    setTimeout(() => {
      setGrid('ArtOptionsGrid');
      setIsPageVisible(true); // Set slide-in effect after transition
    }, 500); // Match the slide-out duration
  };

  const handleHomeClick = () => {
    setIsPageVisible(false);
    setTimeout(() => {
      setGrid('MasonryGrid');
      setIsPageVisible(true);
    }, 500);
  };

  const handleGiftClick = () => {
    setIsPageVisible(false);
    setTimeout(() => {
      setGrid('Newsletter');
      setIsPageVisible(true);
    }, 500);
  };

  const handleUserClick = () => {
    setIsPageVisible(false);
    setTimeout(() => {
      setGrid('AboutUs');
      setIsPageVisible(true);
    }, 500);
  };

  return (
    <div className="App">
      <Header />
      <div className="grid-container">
  <div className={isPageVisible ? "slide-in" : "slide-out"}>
    {grid === "MasonryGrid" && <MasonryGrid />}
    {grid === "ArtOptionsGrid" && <ArtOptionsGrid />}
    {grid === "Newsletter" && <Newsletter />}
    {grid === "AboutUs" && <AboutUs />}
  </div>
</div>


      <Footer
        onPlusClick={handlePlusClick}
        onHomeClick={handleHomeClick}
        onGiftClick={handleGiftClick}
        onUserClick={handleUserClick}
      />
    </div>
  );
}

export default App;
