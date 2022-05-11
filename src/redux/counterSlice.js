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
    incrementByAmount: (state, action) => {
      console.log(action);
      if (action.payload === 0) {
        alert("1以上の数値を設定してください");
      }
      state.value += action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
