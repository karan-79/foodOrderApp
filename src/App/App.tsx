import { useState } from "react";
import { Alert, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Landing from "../Landing";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Provider } from "react-redux";
import store from "./store/foodStore";
const { palette } = createTheme();
import "./config/axiosInterceptors";
const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#212D40",
        },
      },
    },
    // MuiIcon:{
    //   styleOverrides:{
    //     colorPrimary:{
    //       backgroundColor
    //     }
    //   }
    // }
  },
  palette: {
    secondary: {
      main: "#D66853",
    },
    background: {
      default: "#11151C",
    },
    primary: {
      main: "#7D4E57",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Landing />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
