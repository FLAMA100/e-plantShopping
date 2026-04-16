import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/CartSlice';

// ─── Plant Data ───────────────────────────────────────────────────────────────

const categories = [
  {
    id: 'air-purifying',
    name: '🌬️ Air Purifying Plants',
    plants: [
      {
        id: 'ap-1',
        name: 'Peace Lily',
        price: 14.99,
        description: 'Elegant white blooms, thrives in low light.',
        image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=400&auto=format&fit=crop',
      },
      {
        id: 'ap-2',
        name: 'Spider Plant',
        price: 9.99,
        description: 'Fast-growing and nearly indestructible.',
        image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&auto=format&fit=crop',
      },
      {
        id: 'ap-3',
        name: 'Snake Plant',
        price: 12.99,
        description: 'Converts CO₂ to oxygen at night.',
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400&auto=format&fit=crop',
      },
      {
        id: 'ap-4',
        name: 'Boston Fern',
        price: 11.99,
        description: 'Lush fronds that act as natural humidifiers.',
        image: 'https://images.unsplash.com/photo-1520302630591-fd1b1d4ae645?w=400&auto=format&fit=crop',
      },
      {
        id: 'ap-5',
        name: 'Aloe Vera',
        price: 8.99,
        description: 'Purifies air and soothes skin burns.',
        image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8c76ea7?w=400&auto=format&fit=crop',
      },
      {
        id: 'ap-6',
        name: 'Chrysanthemum',
        price: 13.49,
        description: 'Colorful blooms that filter benzene.',
        image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=400&auto=format&fit=crop',
      },
      {
        id: 'ap-7',
        name: 'Rubber Plant',
        price: 18.99,
        description: 'Bold, glossy leaves with powerful air-filtering.',
        image: 'https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?w=400&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'low-maintenance',
    name: '🪴 Low Maintenance Plants',
    plants: [
      {
        id: 'lm-1',
        name: 'ZZ Plant',
        price: 19.99,
        description: 'Thrives on neglect, perfect for busy people.',
        image: 'https://images.unsplash.com/photo-1611211232932-da3113c5b960?w=400&auto=format&fit=crop',
      },
      {
        id: 'lm-2',
        name: 'Pothos',
        price: 7.99,
        description: 'Cascading vines that forgive missed waterings.',
        image: 'https://images.unsplash.com/photo-1599598425947-5202edd56fdf?w=400&auto=format&fit=crop',
      },
      {
        id: 'lm-3',
        name: 'Cast Iron Plant',
        price: 16.99,
        description: 'Survives low light, dust, and drought.',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4abb2?w=400&auto=format&fit=crop',
      },
      {
        id: 'lm-4',
        name: 'Jade Plant',
        price: 11.49,
        description: 'Succulent that stores water in thick leaves.',
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&auto=format&fit=crop',
      },
      {
        id: 'lm-5',
        name: 'Cactus Mix',
        price: 6.99,
        description: 'Desert survivors needing water once a month.',
        image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&auto=format&fit=crop',
      },
      {
        id: 'lm-6',
        name: 'Dracaena',
        price: 14.49,
        description: 'Striking vertical form, tolerates low light.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop',
      },
      {
        id: 'lm-7',
        name: 'Chinese Evergreen',
        price: 13.99,
        description: 'Patterned leaves, adapts to almost any light.',
        image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?w=400&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'tropical',
    name: '🌴 Tropical Plants',
    plants: [
      {
        id: 'tr-1',
        name: 'Monstera Deliciosa',
        price: 34.99,
        description: 'Iconic split leaves, a statement in any room.',
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&auto=format&fit=crop',
      },
      {
        id: 'tr-2',
        name: 'Bird of Paradise',
        price: 44.99,
        description: 'Bold, banana-like leaves for a jungle feel.',
        image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=400&auto=format&fit=crop',
      },
      {
        id: 'tr-3',
        name: 'Fiddle Leaf Fig',
        price: 39.99,
        description: 'Trendy statement tree with large violin-shaped leaves.',
        image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=400&auto=format&fit=crop',
      },
      {
        id: 'tr-4',
        name: 'Calathea Orbifolia',
        price: 22.99,
        description: 'Striped leaves that move with the light cycle.',
        image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=400&auto=format&fit=crop',
      },
      {
        id: 'tr-5',
        name: 'Philodendron',
        price: 17.99,
        description: 'Heart-shaped leaves, easy tropical charm.',
        image: 'https://images.unsplash.com/photo-1601412436518-782d57fc0b37?w=400&auto=format&fit=crop',
      },
      {
        id: 'tr-6',
        name: 'Anthurium',
        price: 21.99,
        description: 'Lacquered blooms in vivid red and pink.',
        image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8c76ea7?w=400&auto=format&fit=crop',
      },
      {
        id: 'tr-7',
        name: 'Banana Plant',
        price: 29.99,
        description: 'Lush tropical giant for bright indoor spaces.',
        image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&auto=format&fit=crop',
      },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const ProductList = ({ onNavigate }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Track which product IDs have been added (to disable their buttons)
  const addedIds = new Set(cartItems.map((item) => item.id));

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-page">
      {/* Navbar */}
      <nav className="navbar">
        <a
          className="navbar-brand"
          onClick={() => onNavigate('landing')}
          style={{ cursor: 'pointer' }}
        >
          🌿 Paradise Nursery
        </a>
        <ul className="navbar-links">
          <li>
            <a onClick={() => onNavigate('landing')} style={{ cursor: 'pointer' }}>
              Home
            </a>
          </li>
          <li>
            <a onClick={() => onNavigate('products')} style={{ cursor: 'pointer' }}>
              Plants
            </a>
          </li>
          <li>
            <a onClick={() => onNavigate('about')} style={{ cursor: 'pointer' }}>
              About
            </a>
          </li>
          <li>
            <a
              className="cart-icon"
              onClick={() => onNavigate('cart')}
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

      {/* Header */}
      <div className="product-page-header">
        <h1>Our Plant Collection</h1>
        <p>Handpicked houseplants for every space and lifestyle</p>
      </div>

      {/* Categories */}
      {categories.map((category) => (
        <div key={category.id} className="category-section">
          <h2 className="category-title">{category.name}</h2>
          <div className="product-grid">
            {category.plants.map((plant) => {
              const isAdded = addedIds.has(plant.id);
              return (
                <div key={plant.id} className="product-card">
                  <img src={plant.image} alt={plant.name} loading="lazy" />
                  <div className="product-info">
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <div className="product-price">${plant.price.toFixed(2)}</div>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(plant)}
                      disabled={isAdded}
                      aria-label={isAdded ? `${plant.name} added to cart` : `Add ${plant.name} to cart`}
                    >
                      {isAdded ? '✓ Added' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
