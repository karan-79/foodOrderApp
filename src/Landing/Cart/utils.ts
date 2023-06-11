import { MealItemType } from "../Meals/types";

export const orderMapper = (meal: MealItemType) => {
  return {
    mealId: meal.id,
    amount: meal.numberOfItems,
  };
};
