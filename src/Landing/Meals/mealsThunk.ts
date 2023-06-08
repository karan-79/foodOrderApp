import { AnyAction } from "@reduxjs/toolkit";
import { getAvailableMeals } from "../../services/mealsService";
import { mealActions } from "./mealsSlice";
import { Meal } from "./types";
export const fetchMealItems = () => {
  //if need be will fetch user specific available meals
  return (dispatch: any) => {
    getAvailableMeals().then((meals) => {
      dispatch(
        mealActions.setMeals(
          meals.reduce(
            (acc, curr) => acc.concat([{ ...curr, price: +curr.price }]),
            [] as Meal[]
          )
        )
      );
    });
  };
};
