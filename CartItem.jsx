import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const dispatch = useDispatch();

  // Select all cart items from Redux store
  const cart = useSelector((state) => state.cart.items);

  // ── Calculate total cart amount (sum of cost × quantity for all items) ──
  const calculateTotalAmount = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].cost * cart[i].quantity;
    }
    return total.toFixed(2);
  };

  // ── Calculate total cost for a single item (cost × quantity) ──
  const calculateTotalCost = (item) => {
    return (item.cost * item.quantity).toFixed(2);
  };

  // ── Increment item quantity ──
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // ── Decrement item quantity (remove if reaches 0) ──
  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.name));
    } else {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  // ── Remove item entirely from cart ──
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // ── Continue Shopping handler ──
  const handleContinueShopping = () => {
    if (onContinueShopping) {
      onContinueShopping();
    }
  };

  // ── Checkout handler ──
  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', background: '#f5f5f0' }}>

      {/* Page Title */}
      <h2 style={{
        textAlign: 'center',
        padding: '2rem 1rem 0.5rem',
        color: '#1b5e20',
        fontSize: '2rem',
        fontWeight: 800,
      }}>
        Shopping Cart
      </h2>

      {/* Total Cart Amount */}
      <div style={{
        textAlign: 'center',
        fontSize: '1.3rem',
        fontWeight: 700,
        color: '#2e7d32',
        marginBottom: '1.5rem',
      }}>
        Total Cart Amount: ${calculateTotalAmount()}
      </div>

      {/* Cart Items List */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 1.5rem' }}>

        {cart.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#888', fontSize: '1.1rem', padding: '3rem 0' }}>
            Your cart is empty. 🌱
          </p>
        ) : (
          cart.map((item) => (
            <div
              key={item.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                background: '#fff',
                borderRadius: '14px',
                padding: '1rem 1.25rem',
                marginBottom: '1rem',
                boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
              }}
            >
              {/* Plant Thumbnail */}
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  flexShrink: 0,
                }}
              />

              {/* Plant Name and Unit Price */}
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: 0, color: '#1b5e20', fontSize: '1rem', fontWeight: 700 }}>
                  {item.name}
                </h3>
                <p style={{ margin: '0.2rem 0 0', color: '#777', fontSize: '0.85rem' }}>
                  Unit Price: ${parseFloat(item.cost).toFixed(2)}
                </p>
              </div>

              {/* Quantity Controls: Increase and Decrease buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={() => handleDecrement(item)}
                  style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    border: '2px solid #4caf50', background: 'transparent',
                    color: '#4caf50', fontSize: '1.2rem', fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  -
                </button>

                <span style={{ fontWeight: 700, fontSize: '1rem', minWidth: '28px', textAlign: 'center' }}>
                  {item.quantity}
                </span>

                <button
                  onClick={() => handleIncrement(item)}
                  style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    border: '2px solid #4caf50', background: 'transparent',
                    color: '#4caf50', fontSize: '1.2rem', fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  +
                </button>
              </div>

              {/* Total cost for this item (unit price × quantity) */}
              <div style={{
                fontWeight: 700, color: '#2e7d32',
                fontSize: '1rem', minWidth: '72px', textAlign: 'right',
              }}>
                ${calculateTotalCost(item)}
              </div>

              {/* Delete / Remove button */}
              <button
                onClick={() => handleRemove(item)}
                style={{
                  background: 'none', border: 'none',
                  color: '#e53935', fontSize: '1.3rem', cursor: 'pointer',
                }}
              >
                🗑
              </button>
            </div>
          ))
        )}

        {/* Action Buttons */}
        {cart.length > 0 && (
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>

            {/* Continue Shopping — links back to product listing */}
            <button
              onClick={handleContinueShopping}
              style={{
                flex: 1, padding: '0.85rem',
                background: 'transparent', border: '2px solid #4caf50',
                color: '#4caf50', borderRadius: '10px',
                fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer',
              }}
            >
              Continue Shopping
            </button>

            {/* Checkout — shows Coming Soon message */}
            <button
              onClick={handleCheckoutShopping}
              style={{
                flex: 1, padding: '0.85rem',
                background: '#4caf50', border: 'none',
                color: '#fff', borderRadius: '10px',
                fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer',
              }}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
