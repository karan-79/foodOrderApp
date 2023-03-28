import { FC } from "react";
import Modal from "../../Ui-components/Modal";
type Props = {
  isOpen: boolean;
  handleClose: () => void;
};
const Cart: FC<Props> = ({ isOpen, handleClose }) => {
  return (
    <Modal open={isOpen} toClose={handleClose}>
      some content
    </Modal>
  );
};
export default Cart;
