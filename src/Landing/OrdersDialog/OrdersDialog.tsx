import React, { FC } from "react";
import TransitionDialog from "../../Ui-components/TransitionDialog";
import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
type Props = {
  open: boolean;
  onClose: () => void;
};
const OrdersDialog: FC<Props> = ({ open, onClose }) => {
  return (
    <TransitionDialog open={open} onClose={onClose}>
      <DialogTitle>Your Orders</DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions></DialogActions>
    </TransitionDialog>
  );
};

export default OrdersDialog;
