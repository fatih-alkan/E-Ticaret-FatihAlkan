import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  total: 0,
  limit: 24, 
  fetchState: "NOT_FETCHED",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setFetchState: (state, action) => {
      state.fetchState = action.payload;
    },
  },
});

export const { setProductList, setTotal, setFetchState } = productSlice.actions;

export const fetchProducts =
  ({ limit, offset, category, sort, filter }) =>
  async (dispatch) => {
    try {
      dispatch(setFetchState("FETCHING"));
      let url = category
      ? `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${offset}`
      : `https://dummyjson.com/products?limit=${limit}&skip=${offset}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error("API hatası");

      const data = await res.json();
      let products = data.products || [];

      if (filter) {
        products = products.filter((p) =>
          p.title.toLowerCase().includes(filter.toLowerCase())
        );
      }

      if (sort) {
        const [field, order] = sort.split(":");
        products = [...products].sort((a, b) => {
          if (field === "price" || field === "rating") {
            return order === "asc" ? a[field] - b[field] : b[field] - a[field];
          } else {
            return 0;
          }
        });
      }

      dispatch(setProductList(products));
      dispatch(setTotal(data.total)); // backend total
      dispatch(setFetchState("FETCHED"));
    } catch (err) {
      dispatch(setFetchState("FAILED"));
    }
  };

export default productSlice.reducer;
