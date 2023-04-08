import { MealItemType } from "../Landing/Meals/types";

export enum CartActions {
  Add,
  Remove,
  Update,
}
export type CartType = {
  items: MealItemType[];
  totalAmount: number;
};
export type CartFunctions = {
  addItem: (item: MealItemType) => void;
  removeItem: (id: string | number) => void;
};
export type CartContextType = CartType & CartFunctions;
export type ReducerActionAdd = {
  type: CartActions;
  item: MealItemType;
};
export type ReducerActionUpdate = {
  type: CartActions;
  item: MealItemType;
  id: string | number;
};
export type ReducerActionRemove = {
  type: CartActions;
  id: string | number;
};
