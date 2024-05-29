import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    cartSlice,
  },
});

export default store;
