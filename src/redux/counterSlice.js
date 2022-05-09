import { createSlice } from "@reduxjs/toolkit";

export const consterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
export const { increment, decrement } = consterSlice.actions;
export default consterSlice.reducer;
