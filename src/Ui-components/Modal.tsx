import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import React, { FC, PropsWithChildren } from "react";
import TransitionDialog from "./TransitionDialog";

//Todo this is supposed to be a generic dialog
type Props = {
  open: boolean;
  toClose: () => void;
  onOrder: () => void;
} & PropsWithChildren;
export default function CartDialog({
  open,
  toClose,
  children,
  onOrder,
}: Props) {
  return (
    <TransitionDialog open={open} onClose={toClose}>
      <DialogTitle>{"Your items in cart"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-slide-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onOrder}>Order</Button>
        <Button onClick={toClose}>Close</Button>
      </DialogActions>
    </TransitionDialog>
  );
}
