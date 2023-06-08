import { FC, useContext } from "react";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Box, Chip, IconButton, Typography } from "@mui/material";
import { CartContext } from "../../Providers/CartProvider";
import { Meal, MealItemType } from "../../Meals/types";
import { useSelector } from "react-redux";
type Props = {
  onClick: () => void;
};
const CartButton: FC<Props> = ({ onClick }) => {
  const items: MealItemType[] = useSelector(
    (state: any) => state.ordered.meals
  );
  const totalItems = items.reduce((acc, curr) => {
    return acc.includes(curr) ? acc : [...acc, curr];
  }, [] as MealItemType[]).length;
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
