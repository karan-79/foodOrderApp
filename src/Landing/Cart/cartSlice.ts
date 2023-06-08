import { createSlice } from "@reduxjs/toolkit";
import { MealItemType } from "../../Landing/Meals/types";
export type mealStoreState = { meals: MealItemType[] };
const initialState: mealStoreState = { meals: [] };

//holds all added/selected meal items with their ammounts
export const cartSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    // we can remove the whole payload logic as we can just give id and numberOfitems as payload when we'll provide food items via store
    addMeal(state, action) {
      if (state.meals.find((obj) => obj.id === action.payload.id)) {
        state.meals.find(
          (obj) => obj.id === action.payload.id
        )!.numberOfItems += action.payload.numberOfItems;
      } else {
        state.meals = state.meals.concat([action.payload]);
      }
    },
    removeMeal(state, action) {
      if (state.meals.find((obj) => obj.id === action.payload.id)) {
        const item = state.meals.find((obj) => obj.id === action.payload.id)!;
        item.numberOfItems -= action.payload.numberOfItems; //will always be 1 at a time
        console.log("number of items left " + item.numberOfItems);
        if (item.numberOfItems === 0) {
          console.log("clearing state");
          state.meals = state.meals.filter((o) => o.id != action.payload.id);
        }
      }
    },
    deleteMeal(state, action) {
      state.meals = state.meals.filter((o) => o.id != action.payload.id);
    },
  },
});
export const foodActions = cartSlice.actions;
