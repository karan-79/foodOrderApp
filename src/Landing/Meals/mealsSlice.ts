import { createSlice } from "@reduxjs/toolkit";
import { Meal } from "./types";
import { initial } from "lodash";
const initialState: {
  meals: Meal[];
} = {
  meals: [],
};
export const mealSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    setMeals: (state, action) => {
      state.meals = action.payload;
    },
  },
});

export const mealActions = mealSlice.actions;
