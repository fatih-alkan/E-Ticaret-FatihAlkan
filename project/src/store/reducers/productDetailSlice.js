import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
  "productDetail/fetchProduct",
  async (productId) => {
    const res = await fetch(`https://dummyjson.com/products/${productId}`);
    if (!res.ok) throw new Error("API hatası");
    return await res.json();
  }
);

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productDetailSlice.reducer;
