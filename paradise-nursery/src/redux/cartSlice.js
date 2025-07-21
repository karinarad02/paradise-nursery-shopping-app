// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {}, // key: productId, value: { product info + quantity }
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      if (!state.items[product.id]) {
        state.items[product.id] = { ...product, quantity: 1 };
        state.totalItems++;
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity++;
        state.totalItems++;
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      if (state.items[id] && state.items[id].quantity > 1) {
        state.items[id].quantity--;
        state.totalItems--;
      }
    },
    deleteItem(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        state.totalItems -= state.items[id].quantity;
        delete state.items[id];
      }
    },
    clearCart(state) {
      state.items = {};
      state.totalItems = 0;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
