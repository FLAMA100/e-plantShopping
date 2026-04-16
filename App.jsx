import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  // 'landing' | 'products' | 'cart' | 'about'
  const [currentPage, setCurrentPage] = useState('landing');
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navigate = (page) => setCurrentPage(page);

  return (
    <div className="app">
      {/* Navbar — hidden on landing page */}
      {currentPage !== 'landing' && (
        <nav className="navbar">
          <a
            className="navbar-brand"
            onClick={() => navigate('landing')}
            style={{ cursor: 'pointer' }}
          >
            🌿 Paradise Nursery
          </a>
          <ul className="navbar-links">
            <li>
              <a onClick={() => navigate('landing')} style={{ cursor: 'pointer' }}>
                Home
              </a>
            </li>
            <li>
              <a onClick={() => navigate('products')} style={{ cursor: 'pointer' }}>
                Plants
              </a>
            </li>
            <li>
              <a onClick={() => navigate('about')} style={{ cursor: 'pointer' }}>
                About
              </a>
            </li>
            <li>
              <a
                className="cart-icon"
                onClick={() => navigate('cart')}
                style={{ cursor: 'pointer' }}
                aria-label={`Cart with ${totalCount} items`}
              >
                🛒
                {totalCount > 0 && (
                  <span className="cart-badge">{totalCount}</span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      )}

      {/* Pages */}
      {currentPage === 'landing' && (
        <div className="landing-page">
          <div className="landing-content">
            <h1>
              Welcome to <span>Paradise Nursery</span>
            </h1>
            <p>
              Discover beautiful, hand-picked houseplants that bring life, color,
              and calm to any space. From air purifiers to tropical wonders — your
              perfect plant is waiting.
            </p>
            <button
              className="get-started-btn"
              onClick={() => navigate('products')}
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {currentPage === 'products' && (
        <ProductList onNavigate={navigate} />
      )}

      {currentPage === 'cart' && (
        <CartItem onNavigate={navigate} />
      )}

      {currentPage === 'about' && (
        <AboutUs />
      )}
    </div>
  );
}

export default App;
