import { Avatar, Box, Typography } from "@mui/material";
import { Meal, MealItemType } from "../../types";
import { FC } from "react";

const MealPresenter: FC<MealItemType> = ({
  name,
  description,
  price,
  numberOfItems,
}) => {
  return (
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
      <Avatar>{numberOfItems}</Avatar>
    </Box>
  );
};

export default MealPresenter;
