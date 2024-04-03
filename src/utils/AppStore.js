import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; //default export from ./cartSlice

const AppStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default AppStore;
