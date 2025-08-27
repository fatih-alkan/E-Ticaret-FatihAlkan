import { createSlice } from "@reduxjs/toolkit";

// LocalStorage'dan başlat
const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  cart: savedCart,
  payment: {},
  address: {},
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setPayment: (state, action) => {
      state.payment = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    // Yeni eklenen yardımcı reducer'lar
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.product.id === action.payload.id
      );
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.cart.push({ product: action.payload, count: 1, checked: true });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.product.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateCount: (state, action) => {
      const { productId, count } = action.payload;
      const item = state.cart.find((i) => i.product.id === productId);
      if (item) item.count = count;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    toggleChecked: (state, action) => {
      const item = state.cart.find((i) => i.product.id === action.payload);
      if (item) item.checked = !item.checked;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  setCart,
  setPayment,
  setAddress,
  addToCart,
  removeFromCart,
  updateCount,
  toggleChecked,
  clearCart,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
