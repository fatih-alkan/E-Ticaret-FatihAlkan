import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import clientReducer from "./reducers/clientSlice";
import productReducer from "./reducers/productSlice";
import shoppingCartReducer from "./reducers/shoppingCartSlice";
import categoryReducer from "./reducers/categorySlice";
import productDetailReducer from "./reducers/productDetailSlice";
import addressReducer from "./reducers/addressSlice";
import paymentReducer from "./reducers/paymentSlice";
import ordersReducer from "./reducers/ordersSlice";
import likedReducer from "./reducers/likedSlice";
const store = configureStore({
  reducer: {
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
    categories: categoryReducer,
    productDetail: productDetailReducer,
    address: addressReducer,
    payment: paymentReducer,
    orders: ordersReducer,
    liked: likedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
