import { FC, useContext } from "react";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Box, Chip, IconButton, Typography } from "@mui/material";
import { CartContext } from "../../Providers/CartProvider";
import { Meal } from "../../Meals/types";
type Props = {
  onClick: () => void;
};
const CartButton: FC<Props> = ({ onClick }) => {
  const { items } = useContext(CartContext);
  const totalItems = items.reduce((set, curr) => {
    return set.includes(curr) ? set : [...set, curr];
  }, [] as Meal[]).length;
  return (
    <Chip
      sx={{ paddingInline: "20px" }}
      icon={<ShoppingCart />}
      color="primary"
      clickable
      label={
        <Box display="flex" alignItems="center">
          <Typography>{totalItems}</Typography>
        </Box>
      }
      onClick={onClick}
    ></Chip>
  );
};
export default CartButton;
