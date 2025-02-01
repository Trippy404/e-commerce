// src/pages/Home.jsx
import React from 'react';
import './HomePage.css'; // Correct the import
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/hero'); // Navigate to the About page
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero1">
        <div className="hero-content">
          <h1 className="animated-text">Welcome to Our E-Commerce Store</h1>
          <p className="animated-text">Discover the latest trends in fashion, electronics, and more.</p>
          <button className="cta-button animated-button" onClick={handleShopNow}>
            Shop Now
          </button>
        </div>
        <div className="floating-icons">
          <div className="icon">🛍️</div>
          <div className="icon">📦</div>
          <div className="icon">💳</div>
          <div className="icon">📱</div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 E-Commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;