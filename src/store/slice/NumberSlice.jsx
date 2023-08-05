import { createSlice } from "@reduxjs/toolkit";

const NumberSlice = createSlice({
  name: "number",
  initialState: { value: 0 },
  reducers: {
    addNumber: (state, action) => {
      state.value += action.payload;
    },
    subNumber: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { addNumber, subNumber } = NumberSlice.actions;

export default NumberSlice.reducer;
