import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import clientReducer from "./reducers/clientSlice";
import productReducer from "./reducers/productSlice";
import shoppingCartReducer from "./reducers/shoppingCartSlice";
import categoryReducer from "./reducers/categorySlice";
import productDetailReducer from "./reducers/productDetailSlice";
const store = configureStore({
  reducer: {
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
    categories: categoryReducer,
    productDetail: productDetailReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
