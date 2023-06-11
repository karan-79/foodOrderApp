import { configureStore, createSlice } from "@reduxjs/toolkit";
import { cartSlice } from "../../Landing/Cart/cartSlice";
import { mealSlice } from "../../Landing/Meals/mealsSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    ordered: cartSlice.reducer,
    availableMeals: mealSlice.reducer,
    user: userSlice.reducer,
  },
});
export default store;
