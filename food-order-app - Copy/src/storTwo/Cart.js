import { createSlice } from "@reduxjs/toolkit";

const initialvalue = {
  cart: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialvalue,
  reducers: {
    cartincrement: (state) => {
      state.cart += 1;
    },
    caredecrement: (state) => {
      state.cart -= 1;
    },
    clearall: (state) => {
      state.cart = 0;
    },
  },
});

export const { cartincrement, caredecrement, clearall } = cartSlice.actions;
export default cartSlice.reducer;
