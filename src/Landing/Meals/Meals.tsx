import { Box } from "@mui/material";
import MealsSummary from "./MealsSummary/MealsSummary";
import { MealsContainer } from "./styled";
import { DUMMY_MEALS } from "./data/meals";
import { FC } from "react";
import MealItem from "./Meal";

const Meals: FC = () => {
  const handleAddMeal = () => {};
  return (
    <Box display="flex" flexDirection="column">
      <MealsSummary />
      <Box
        sx={{
          maxWidth: "60rem",
          width: "90%",
          margin: "2rem auto",
        }}
      >
        <MealsContainer>
          {DUMMY_MEALS.map(({ id, name, description, price }) => {
            return (
              <Box marginY="6px">
                <MealItem
                  key={"meal-" + id}
                  id={id}
                  name={name}
                  description={description}
                  price={price}
                />
              </Box>
            );
          })}
        </MealsContainer>
      </Box>
    </Box>
  );
};

export default Meals;
