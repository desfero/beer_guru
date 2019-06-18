import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

const withThemeProvider = () => Wrapper => props => (
  <ThemeProvider theme={theme}>
    <Wrapper {...props} />
  </ThemeProvider>
);

export { withThemeProvider };
