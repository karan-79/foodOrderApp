import { configureStore, createSlice } from "@reduxjs/toolkit";
import { cartSlice } from "../../Landing/Cart/cartSlice";
import { mealSlice } from "../../Landing/Meals/mealsSlice";

const store = configureStore({
  reducer: { ordered: cartSlice.reducer, availableMeals: mealSlice.reducer },
});
export default store;
