import {
  AppBar,
  Avatar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
  colors,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FC } from "react";
import CartButton from "../CartButton";
import { useSelector } from "react-redux";
import UserMenu from "./UserMenu/UserMenu";
type Props = {
  openCart: () => void;
  openOrders: (id: string) => void;
};
const AppHeader: FC<Props> = ({ openCart, openOrders }) => {
  return (
    <Box display="flex">
      <AppBar component="nav" color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Mealz
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" }, width: "10%" }}>
            <CartButton onClick={openCart} />
          </Box>
          <UserMenu openOrders={openOrders} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default AppHeader;
