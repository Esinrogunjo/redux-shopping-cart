import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cardSlice from "./card-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cardSlice.reducer,
  },
});

export default store;
