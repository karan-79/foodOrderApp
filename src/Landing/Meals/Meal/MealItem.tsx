import { FC, useContext, useState } from "react";
import { Meal, MealItemType } from "../types";
import { Box, Button, Typography } from "@mui/material";
import { MealWrapper } from "./styled";
import ItemCounter from "./ItemCounter";
import { CartContext } from "../../Providers/CartProvider";
import MealPresenter from "./MealPresenter";

const MealItem: FC<Meal> = ({ id, name, description, price }) => {
  const [amount, setAmount] = useState(0);
  const handleAddMeal = () => setAmount((prev) => prev + 1);
  const handleRemoveMeal = () => {
    setAmount((prev) => (prev === 0 ? prev : prev - 1));
  };
  const { addItem } = useContext(CartContext);
  const handleAddMealItem = () => {
    addItem({
      id: "cart-" + id,
      description: description,
      name: name,
      price: price,
      numberOfItems: amount,
    });
    setAmount(0);
  };
  return (
    <MealWrapper>
      <MealPresenter
        id={id}
        name={name}
        description={description}
        price={price}
        numberOfItems={amount}
      />
      <ItemCounter
        count={amount}
        onRemoveItem={handleRemoveMeal}
        onAddItem={handleAddMeal}
      />
      {amount > 0 && <Button onClick={handleAddMealItem}>Add to cart</Button>}
    </MealWrapper>
  );
};

export default MealItem;
