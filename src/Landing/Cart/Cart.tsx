import { FC, useContext } from "react";
import Modal from "../../Ui-components/Modal";
import { CartContext } from "../Providers/CartProvider";
import MealPresenter from "../Meals/Meal/MealPresenter/MealPresenter";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { MealItemType } from "../Meals/types";
import { Typography } from "@mui/material";
type Props = {
  isOpen: boolean;
  handleClose: () => void;
};
const Cart: FC<Props> = ({ isOpen, handleClose }) => {
  const items: MealItemType[] = useSelector(
    (state: any) => state.ordered.meals
  );
  return (
    <Modal open={isOpen} toClose={handleClose}>
      {items.map(({ name, price, numberOfItems, description, id }, index) => {
        return (
          <>
            {numberOfItems != 0 && (
              <CartItem
                key={index}
                id={id}
                price={price}
                description={description}
                numberOfItems={numberOfItems}
                name={name}
              />
            )}
          </>
        );
      })}
      {items.length === 0 && <Typography>NO ITems</Typography>}
    </Modal>
  );
};
export default Cart;
