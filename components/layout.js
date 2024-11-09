import * as React from "react";
import Header from "./header";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material";

const darkCloudTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1d1d1d",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

export default (props) => {
  return (
    <ThemeProvider theme={darkCloudTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        {props.children}
      </Container>
    </ThemeProvider>
  );
};
