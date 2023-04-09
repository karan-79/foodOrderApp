import React, { FC, PropsWithChildren } from "react";
import { Meal, MealItemType } from "../Meals/types";
import { useReducer } from "react";
import _, { isEmpty, multiply, replace } from "lodash";
import {
  CartActions,
  CartContextType,
  CartType,
  ReducerActionAdd,
  ReducerActionChangeAmount,
  ReducerActionRemove,
  ReducerActionUpdate,
} from "../../types/CartActions";
import { match } from "ts-pattern";
export const CartContext = React.createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  changeAmount: (id, isIncrease) => {},
});

//TODO need to think about the actions as every time i need to ensure it!!
const cartReducer = (
  state: CartType,
  action:
    | ReducerActionAdd
    | ReducerActionRemove
    | ReducerActionUpdate
    | ReducerActionChangeAmount
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

  //TODO: this update can be improved if we just recieve the 'id' and a bit to increase/decrease the number of items
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
    return { items: [...state.items], totalAmount: getTotalAmount() };
  };

  const handleIncrease = () => {
    //comes the logic
    //TODO need to do something about the total price too!!
    if ("id" in action) {
      const newState = _.cloneDeep(state.items);
      const idx = _.findIndex(newState, (item) => item.id === action.id);
      newState[idx].numberOfItems += 1;
      return { items: newState, totalAmount: getTotalAmount() };
    }
    return { items: [...state.items], totalAmount: getTotalAmount() };
  };
  const handleDecrease = () => {
    //comes the logic
    if ("id" in action) {
      const newState = _.cloneDeep(state.items);
      const idx = _.findIndex(newState, (item) => item.id === action.id);
      newState[idx].numberOfItems -= 1;
      return { items: newState, totalAmount: getTotalAmount() };
    }
    return { items: [...state.items], totalAmount: getTotalAmount() };
  };
  return match(action.type)
    .with(CartActions.Add, handleAddItem)
    .with(CartActions.Remove, handleRemoval)
    .with(CartActions.Update, handleUpdateItem) // needs to be optimised or removed for just decrease using another action
    .with(CartActions.IncreaseAmount, handleIncrease)
    .with(CartActions.DecreaseAmount, handleDecrease)
    .otherwise(() => {
      return {
        items: [] as MealItemType[],
        totalAmount: 0,
      };
    });
};

const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  //TODO try useMemo for context value
  const [cartState, dispatchCartState] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  // TODO maybe use useEffect for the totalAmount

  const addItemHandler = (item: MealItemType) => {
    const t = isEmpty(cartState.items.find((i) => i.id === item.id))
      ? CartActions.Add
      : CartActions.Update;
    dispatchCartState({ type: t, item });
  };
  const removeItemHandler = (id: string | number) => {
    dispatchCartState({ type: CartActions.Remove, id: id });
  };

  const handleChangeAmount = (id: string | number, isIncrease: boolean) => {
    dispatchCartState({
      type: isIncrease
        ? CartActions.IncreaseAmount
        : CartActions.DecreaseAmount,
      id: id,
    });
  };
  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        changeAmount: handleChangeAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
