import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array of { id, name, image, price, description, quantity }
  },
  reducers: {
    /**
     * addItem – Adds a product to the cart.
     * If the item already exists, increments its quantity.
     * Payload: { id, name, image, price, description }
     */
    addItem(state, action) {
      const incoming = action.payload;
      const existing = state.items.find((item) => item.id === incoming.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...incoming, quantity: 1 });
      }
    },

    /**
     * removeItem – Removes an item entirely from the cart by its id.
     * Payload: id (string)
     */
    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    /**
     * updateQuantity – Updates the quantity of a specific cart item.
     * If the new quantity is 0 or less, the item is removed.
     * Payload: { id, quantity }
     */
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        const item = state.items.find((item) => item.id === id);
        if (item) {
          item.quantity = quantity;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
