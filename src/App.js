import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/new-header';
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
import Frontpage from './components/Frontpage/frontpage'; // ✅ Your new landing page

function MainApp() {
  const [grid, setGrid] = useState('MasonryGrid');
  const [isPageVisible, setIsPageVisible] = useState(true);

  const handlePlusClick = () => {
    setIsPageVisible(false);
    setTimeout(() => {
      setGrid('ArtOptionsGrid');
      setIsPageVisible(true);
    }, 500);
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frontpage />} /> {/* 👈 Default landing page */}
        <Route path="/main" element={<MainApp />} /> {/* 👈 Old experience lives here */}
      </Routes>
    </Router>
  );
}

export default App;
