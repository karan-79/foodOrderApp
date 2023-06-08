import { Box } from "@mui/material";
import MealsSummary from "./MealsSummary/MealsSummary";
import { MealsContainer } from "./styled";
import { DUMMY_MEALS } from "./data/meals";
import { FC, useEffect } from "react";
import MealItem from "./Meal";
import { useDispatch, useSelector } from "react-redux";
import { fetchMealItems } from "./mealsThunk";
import { Meal } from "./types";

const Meals: FC = () => {
  const meals: Meal[] = useSelector((state: any) => state.availableMeals.meals);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMealItems()(dispatch);
  }, []);
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
          {meals.length != 0 &&
            meals.map(({ id, name, description, price }, index) => {
              return (
                <Box marginY="6px" key={"meal-" + index}>
                  <MealItem
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
