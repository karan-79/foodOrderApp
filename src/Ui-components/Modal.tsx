import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import React, { FC, PropsWithChildren } from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});
type Props = {
  open: boolean;
  toClose: () => void;
} & PropsWithChildren;
export default function Modal({ open, toClose, children }: Props) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={toClose}
      aria-describedby="dialog-slide-description"
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>{"Your items in cart"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-slide-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button>Order</Button>
        <Button onClick={toClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
