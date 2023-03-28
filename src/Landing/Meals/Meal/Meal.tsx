import { FC, useState } from "react";
import { Meal } from "../types";
import { Box, Typography } from "@mui/material";
import { MealWrapper } from "./styled";
import ItemCounter from "./ItemCounter";
const Meal: FC<Meal> = ({ id, name, description, price }) => {
  const [amount, setAmount] = useState(0);

  const handleAddMeal = () => setAmount((prev) => amount + 1);
  const handleRemoveMeal = () => setAmount((prev) => amount - 1);
  return (
    <MealWrapper>
      <Box
        display="flex"
        width="100%"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography
          variant="h5"
          sx={{
            margin: "0 0 0.25rem 0",
          }}
        >
          {name}
        </Typography>
        <Typography variant="body1">{description}</Typography>
        <Typography
          variant="h4"
          sx={{ marginTop: "0.25rem", fontWeight: "bold", fontSize: "1.25rem" }}
        >
          {"$" + price}
        </Typography>
      </Box>
      <ItemCounter
        count={amount}
        onRemoveItem={handleRemoveMeal}
        onAddItem={handleAddMeal}
      />
    </MealWrapper>
  );
};

export default Meal;
