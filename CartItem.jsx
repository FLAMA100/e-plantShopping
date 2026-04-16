import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../store/CartSlice';

const CartItem = ({ onNavigate }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // ── Derived values ──────────────────────────────────────────────────────────
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // ── Handlers ────────────────────────────────────────────────────────────────
  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('🌿 Coming Soon! Thank you for shopping at Paradise Nursery.');
  };

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className="cart-page">
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

      <h1>🛒 Your Shopping Cart</h1>

      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty. Start adding some plants! 🌱</p>
            <br />
            <button
              className="continue-btn"
              onClick={() => onNavigate('products')}
              style={{ maxWidth: '220px', margin: '0 auto', display: 'block' }}
            >
              Browse Plants
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            {cartItems.map((item) => {
              const itemTotal = item.price * item.quantity;
              return (
                <div key={item.id} className="cart-item">
                  {/* Thumbnail */}
                  <img src={item.image} alt={item.name} />

                  {/* Name + unit price */}
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>Unit price: ${item.price.toFixed(2)}</p>
                  </div>

                  {/* Quantity controls */}
                  <div className="quantity-controls">
                    <button
                      onClick={() => handleDecrease(item)}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(item)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  {/* Item total cost */}
                  <div className="cart-item-price">${itemTotal.toFixed(2)}</div>

                  {/* Delete button */}
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                    title="Remove item"
                  >
                    🗑️
                  </button>
                </div>
              );
            })}

            {/* Summary */}
            <div className="cart-summary">
              <div className="cart-total">
                <span>Total ({totalCount} item{totalCount !== 1 ? 's' : ''})</span>
                <span>${totalCost.toFixed(2)}</span>
              </div>
              <div className="cart-actions">
                <button
                  className="continue-btn"
                  onClick={() => onNavigate('products')}
                >
                  ← Continue Shopping
                </button>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Checkout — Coming Soon
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartItem;
