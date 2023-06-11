import { FC, useCallback, useContext } from "react";
import Modal from "../../Ui-components/Modal";
import { CartContext } from "../Providers/CartProvider";
import MealPresenter from "../Meals/Meal/MealPresenter/MealPresenter";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { MealItemType } from "../Meals/types";
import { Typography } from "@mui/material";
import CartDialog from "../../Ui-components/Modal";
import { orderMapper } from "./utils";
import { postOrder } from "../../services/orderService";
type Props = {
  isOpen: boolean;
  handleClose: () => void;
};
const Cart: FC<Props> = ({ isOpen, handleClose }) => {
  const cartItems: MealItemType[] = useSelector(
    (state: any) => state.ordered.meals
  );
  const userId = useSelector((state: any) => state.user.userId);

  const handleOrder = () => {
    // PUT THE ORDERS IN A ORDER SLICE
    postOrder({ userId, cartItems: cartItems.map(orderMapper) }).then(() => {
      console.log("CREATED!");
    });
  };

  return (
    <CartDialog open={isOpen} toClose={handleClose} onOrder={handleOrder}>
      {cartItems.map(
        ({ name, price, numberOfItems, description, id }, index) => {
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
        }
      )}
      {cartItems.length === 0 && <Typography>NO ITems</Typography>}
    </CartDialog>
  );
};
export default Cart;
