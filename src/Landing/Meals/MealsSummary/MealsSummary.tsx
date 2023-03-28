import { Box, Typography } from "@mui/material";

const MealsSummary = () => {
  return (
    <Box
      display="flex"
      sx={{
        textAlign: "center",
        width: "90%",
        margin: "auto",
        marginTop: "-10rem",
        position: "relative",
        color: "white",
        borderRadius: "14px",
        boxShadow: "0 1px 18px 10px rgba(0,0,0,0.50)",
        backgroundColor: "#212D40",
        maxWidth: "45rem",
        padding: "1px",
      }}
      flexDirection="column"
    >
      <Typography variant="h2" margin="1rem" fontSize="2rem">
        Delicious Food, Delivered To You
      </Typography>
      <Typography variant="body1" margin="1rem">
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </Typography>
      <Typography variant="body2" margin="1rem">
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </Typography>
    </Box>
  );
};

export default MealsSummary;
