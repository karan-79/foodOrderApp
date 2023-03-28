import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  colors,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FC } from "react";
import CartButton from "../CartButton";

const AppHeader: FC = () => {
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
            <CartButton />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default AppHeader;
