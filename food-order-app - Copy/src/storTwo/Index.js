import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import cartsclice from "./Cart";
import formslice from "./Form"

const store = configureStore({
  reducer: {
    cart: cartsclice,
    form: formslice,
    sidebar: "",
    darkmode: "",
  },
});
export default store;
