export type Meal = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export type MealItemType = Meal & { numberOfItems: number };
// export type CartMealEntity = MealItemType & {
//   onAddMealItem: () => void;
//   onRemoveMealItem: () => void;
// };
// TODO:this needs more thought
