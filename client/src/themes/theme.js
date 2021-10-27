import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    fontSizeXL: 36,
    h2: {
      fontWeight: 600,
      fontSize: 26,
    },
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: 600,
      monoserrat: "Montserrat, sans-serif",
    },
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold",
      },
    },
  },
  palette: {
    primary: { main: "#3A8DFF", dark: "#86B9FF" },
    secondary: { main: "#B0B0B0" },
    transparentBlue: { main: "#4A6A9520" },
    transparentWhite: { main: "#FFFFFF10" },
    blueGradient: {
      main: "linear-gradient(0deg, rgba(134,185,255,.85) 0%, rgba(58,141,255,.85) 100%)",
    },
  },
  spacing: 12,
});
