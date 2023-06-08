import { FC, useContext, useState } from "react";
import ItemCounter from "../../Meals/Meal/ItemCounter";
import MealPresenter from "../../Meals/Meal/MealPresenter";
import { MealWrapper } from "../../Meals/Meal/styled";
import { MealItemType } from "../../Meals/types";
import { CartContext } from "../../Providers/CartProvider";
import { useDispatch } from "react-redux";
import { foodActions } from "../../Cart/cartSlice";
import { IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
const CartItem: FC<MealItemType> = ({
  name,
  id,
  description,
  numberOfItems,
  price,
}) => {
  const dispatch = useDispatch();
  //TODO:this is noise the rest of the entities should not be sent as only the number is being increased

  const addItem = () => {
    dispatch(
      foodActions.addMeal({
        id,
        numberOfItems: 1,
      })
    );
  };
  const removeItem = () => {
    dispatch(
      foodActions.removeMeal({
        id,
        numberOfItems: 1,
      })
    );
  };
  const handleUpdateItem = (key: string) => {
    //update meal items amount
    return key === "add" ? () => addItem() : () => removeItem();
  };

  const deleteMealItem = () => {
    // removal
    dispatch(foodActions.deleteMeal({ id }));
  };
  return (
    <MealWrapper>
      <MealPresenter
        id={id}
        description={description}
        numberOfItems={numberOfItems}
        name={name}
        price={price}
      />
      <ItemCounter
        count={numberOfItems}
        showCount={false}
        onAddItem={handleUpdateItem("add")}
        onRemoveItem={handleUpdateItem("remove")}
      />
      <IconButton color="primary" onClick={deleteMealItem}>
        <HighlightOffIcon />
      </IconButton>
    </MealWrapper>
  );
};

export default CartItem;
