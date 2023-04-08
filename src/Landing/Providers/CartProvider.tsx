import React, { FC, PropsWithChildren } from "react";
import { Meal, MealItemType } from "../Meals/types";
import { useReducer } from "react";
import { isEmpty, multiply, replace } from "lodash";
import {
  CartActions,
  CartContextType,
  CartType,
  ReducerActionAdd,
  ReducerActionRemove,
  ReducerActionUpdate,
} from "../../types/CartActions";
import { match } from "ts-pattern";
import _ from "lodash";
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
  const getTotalAmount = () => {
    return (
      state.totalAmount +
      multiply(
        "item" in action ? action.item?.price : 0,
        "item" in action ? action.item?.numberOfItems : 0
      )
    );
  };
  const handleAddItem = () => {
    const getItems = () => {
      return "item" in action ? [...state.items, action.item] : state.items;
    };
    return {
      items: getItems(),
      totalAmount: getTotalAmount(),
    };
  };
  const handleUpdateItem = () => {
    const getUpdatedItemArray = () => {
      let arrayToReturn = _.cloneDeep(state.items);
      if ("item" in action) {
        const index = _.findIndex(
          arrayToReturn,
          (i) => i.id === action.item.id
        );

        arrayToReturn[index].numberOfItems += action.item.numberOfItems;
      }
      return arrayToReturn;
    };
    return {
      items: "item" in action ? getUpdatedItemArray() : state.items,
      totalAmount: getTotalAmount(),
    };
  };

  const handleRemoval = () => {
    //TODO: need to see through this removal logic
    if ("id" in action) {
      return {
        items: _.remove([...state.items], (i) => i.id === action.id),
        totalAmount: getTotalAmount(),
      };
    }
    return state;
  };
  return match(action.type)
    .with(CartActions.Add, handleAddItem)
    .with(CartActions.Remove, handleRemoval)
    .with(CartActions.Update, handleUpdateItem)
    .otherwise(() => {
      return {
        items: [] as MealItemType[],
        totalAmount: 0,
      };
    });
};

const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  // try useMemo for context value
  const [cartState, dispatchCartState] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addItemHandler = (item: MealItemType) => {
    const t = isEmpty(cartState.items.find((i) => i.id === item.id))
      ? CartActions.Add
      : CartActions.Update;
    dispatchCartState({ type: t, item });
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
