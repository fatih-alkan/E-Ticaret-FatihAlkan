import { createSlice } from "@reduxjs/toolkit";

const savedLikes = localStorage.getItem("likedItems");

const likedSlice = createSlice({
  name: "liked",
  initialState: {
    likedItems: savedLikes ? JSON.parse(savedLikes) : [],
  },
  reducers: {
    toggleLike: (state, action) => {
      const product = action.payload;
      const exists = state.likedItems.find(item => item.id === product.id);
      if (exists) {
        state.likedItems = state.likedItems.filter(item => item.id !== product.id);
      } else {
        state.likedItems.push(product);
      }
      localStorage.setItem("likedItems", JSON.stringify(state.likedItems));
    },
    removeLike: (state, action) => {
      state.likedItems = state.likedItems.filter(item => item.id !== action.payload);
      localStorage.setItem("likedItems", JSON.stringify(state.likedItems));
    },
    clearLikes: (state) => {
      state.likedItems = [];
      localStorage.setItem("likedItems", JSON.stringify(state.likedItems));
    }
  },
});

export const { toggleLike, removeLike, clearLikes } = likedSlice.actions;
export default likedSlice.reducer;
