import { FC } from "react";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Box, Chip, IconButton, Typography } from "@mui/material";
type Props = {
  items?: number;
};
const CartButton: FC<Props> = ({ items = 0 }) => (
  <Chip
    sx={{ paddingInline: "20px" }}
    icon={<ShoppingCart />}
    color="primary"
    clickable
    label={
      <Box display="flex" alignItems="center">
        <Typography>{items}</Typography>
      </Box>
    }
  ></Chip>
);

export default CartButton;
