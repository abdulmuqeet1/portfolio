import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#f1faee",
    },
    secondary: {
      main: "#000011",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
