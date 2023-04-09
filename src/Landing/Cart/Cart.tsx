import { FC, useContext } from "react";
import Modal from "../../Ui-components/Modal";
import { CartContext } from "../Providers/CartProvider";
import MealPresenter from "../Meals/Meal/MealPresenter/MealPresenter";
import CartItem from "./CartItem";
type Props = {
  isOpen: boolean;
  handleClose: () => void;
};
const Cart: FC<Props> = ({ isOpen, handleClose }) => {
  const { items } = useContext(CartContext);
  return (
    <Modal open={isOpen} toClose={handleClose}>
      {items.map(({ name, price, numberOfItems, description, id }) => {
        return (
          <CartItem
            id={id}
            price={price}
            description={description}
            numberOfItems={numberOfItems}
            name={name}
          />
        );
      })}
    </Modal>
  );
};
export default Cart;
