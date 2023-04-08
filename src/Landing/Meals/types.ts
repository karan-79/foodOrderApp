export type Meal = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export type MealItemType = Meal & { numberOfItems: number };
