import { configureStore } from "@reduxjs/toolkit";
import NumberSlice from "./slice/NumberSlice";

const store = configureStore({
  reducer: {
    number: NumberSlice,
  },
});

export default store;
