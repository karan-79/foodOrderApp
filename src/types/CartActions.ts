import { MealItemType } from "../Landing/Meals/types";

export enum CartActions {
  Add,
  Remove,
  Update,
  IncreaseAmount,
  DecreaseAmount,
}
export type CartType = {
  items: MealItemType[];
  totalAmount: number;
};
export type CartFunctions = {
  addItem: (item: MealItemType) => void;
  removeItem: (id: string | number) => void;
  changeAmount: (id: string | number, isIncrease: boolean) => void;
};

export type CartContextType = CartType & CartFunctions;
//TODO the 'type' for the actions can be made more specific add,remove,upate etc
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
export type ReducerActionChangeAmount = {
  type: CartActions.IncreaseAmount | CartActions.DecreaseAmount;
  id: string | number;
};
