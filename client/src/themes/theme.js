import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    fontSizeLg: 26,
    fontSizeXL: 36,
    fontWeightMedium: 600,
    h2: {
      fontWeight: 600,
      fontSize: 26,
    },
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: 600,
      fontFamily: "Montserrat, sans-serif",
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
    dimGrey: { main: "#F4F6FA" },
    darkBlueGradient: {
      main: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    },
    white: { main: "#FFFFFF" },
    nepal: { main: "#91A3C0" },
    lightGrayishBlue: { main: "#BECCE2" },
  },
  spacing: 12,
});
