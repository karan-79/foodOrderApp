import { FC, useState } from "react";
import AppHeader from "./Layout/AppHeader";
import { Box, BoxProps } from "@mui/material";
import styled from "styled-components";

import backImage from "../assets/meals.jpg";
import Meals from "./Meals";
import Meal from "./Meals/Meal";
import Cart from "./Cart";
import CartProvider from "./Providers/CartProvider";
import { OrdersDialogState, isOpenState } from "./types";
import OrdersDialog from "./OrdersDialog/OrdersDialog";

const Landing: FC = () => {
  const [showCart, setShowCart] = useState(false);
  const [showOrders, setShowOrders] = useState<OrdersDialogState>({
    __tag: "Closed",
  });
  const handleOpenOrders = (id: string) => {
    //fetch orders with userid
  };
  return (
    <>
      {showCart && (
        <Cart isOpen={showCart} handleClose={() => setShowCart(false)} />
      )}
      <OrdersDialog
        open={isOpenState(showOrders)}
        onClose={() => setShowOrders({ __tag: "Closed" })}
      />
      <Box display="flex" flexDirection="column">
        <AppHeader
          openCart={() => setShowCart(true)}
          openOrders={handleOpenOrders}
        />
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
    </>
  );
};

export default Landing;
