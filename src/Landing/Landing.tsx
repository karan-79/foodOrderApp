import { FC, useState } from "react";
import AppHeader from "./Layout/AppHeader";
import { Box, BoxProps } from "@mui/material";
import styled from "styled-components";

import backImage from "../assets/meals.jpg";
import Meals from "./Meals";
import Meal from "./Meals/Meal";
import Cart from "./Cart";
import CartProvider from "./Providers/CartProvider";

const Landing: FC = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <CartProvider>
      {showCart && (
        <Cart isOpen={showCart} handleClose={() => setShowCart(false)} />
      )}
      <Box display="flex" flexDirection="column">
        <AppHeader openCart={() => setShowCart(true)}></AppHeader>
        <Box
          sx={{ width: "100%", height: "25rem", zIndex: 0, overflow: "hidden" }}
        >
          <Box
            component="img"
            src={backImage}
            sx={{
              objectFit: "cover",
              width: "110%",
              height: "100%",
              transform: "rotateZ(-5deg) translateY(-4rem) translateX(-1rem)",
            }}
          />
        </Box>
        <Meals />
      </Box>
    </CartProvider>
  );
};

export default Landing;
