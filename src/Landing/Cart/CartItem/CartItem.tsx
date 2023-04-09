import { FC, useContext } from "react";
import ItemCounter from "../../Meals/Meal/ItemCounter";
import MealPresenter from "../../Meals/Meal/MealPresenter";
import { MealWrapper } from "../../Meals/Meal/styled";
import { MealItemType } from "../../Meals/types";
import { CartContext } from "../../Providers/CartProvider";

const CartItem: FC<MealItemType> = ({
  name,
  id,
  description,
  numberOfItems,
  price,
}) => {
  const { changeAmount } = useContext(CartContext);

  //TODO:this is noise the rest of the entities should not be sent as only the number is being increased
  const handleAddMealItem = () => {
    changeAmount(id, true);
  };

  const handleRemoveItem = () => {
    changeAmount(id, false);
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
        onAddItem={handleAddMealItem}
        onRemoveItem={handleRemoveItem}
      />
    </MealWrapper>
  );
};

export default CartItem;
