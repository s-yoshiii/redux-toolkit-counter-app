import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      action.payload === 0
        ? (state.value += 1)
        : (state.value += action.payload);
    },
    decrement: (state, action) => {
      action.payload === 0
        ? (state.value -= 1)
        : (state.value -= action.payload);
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
