import { Dialog, Slide } from "@mui/material";
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
  onClose: () => void;
} & PropsWithChildren;

const TransitionDialog: FC<Props> = ({ open, onClose, children }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="dialog-slide-description"
      maxWidth="md"
      fullWidth
    >
      {children}
    </Dialog>
  );
};

export default TransitionDialog;
