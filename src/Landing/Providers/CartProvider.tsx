import React, { FC, PropsWithChildren } from "react";
import { Meal, MealItemType } from "../Meals/types";
import { useReducer } from "react";
import { isEmpty, multiply } from "lodash";
import {
  CartActions,
  CartContextType,
  CartType,
  ReducerActionAdd,
  ReducerActionRemove,
  ReducerActionUpdate,
} from "../../types/CartActions";
import { match } from "ts-pattern";
export const CartContext = React.createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const cartReducer = (
  state: CartType,
  action: ReducerActionAdd | ReducerActionRemove | ReducerActionUpdate
): CartType => {
  //for now add void until logic is added
  const handleAddItem = () => {
    const total =
      state.totalAmount +
      multiply(
        "item" in action ? action.item?.price : 0,
        "item" in action ? action.item?.numberOfItems : 0
      );
    return {
      items: "item" in action ? [...state.items, action.item] : state.items,
      totalAmount: total,
    };
  };

  return (
    match(action.type)
      .with(CartActions.Add, handleAddItem)
      // .with(CartActions.Remove, () => {})
      // .with(CartActions.Update, () => {})
      .otherwise(() => {
        return {
          items: [] as MealItemType[],
          totalAmount: 0,
        };
      })
  );
};

const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  // try useMemo for context value
  const [cartState, dispatchCartState] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addItemHandler = (item: MealItemType) => {
    dispatchCartState({ type: CartActions.Add, item });
  };
  const removeItemHandler = (id: string | number) => {
    dispatchCartState({ type: CartActions.Remove, id: id });
  };
  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
