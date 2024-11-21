import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./products-slice";
import CartReducer from "./cart-slice";

const store = configureStore({
  reducer: {
    product: ProductsReducer,
    cart: CartReducer,
  },
});

export default store;
