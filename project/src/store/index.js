import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import clientReducer from "./reducers/clientSlice";
import productReducer from "./reducers/productSlice";
import shoppingCartReducer from "./reducers/shoppingCartSlice";
import categoryReducer from "./reducers/categorySlice";
const store = configureStore({
  reducer: {
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
    categories: categoryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
