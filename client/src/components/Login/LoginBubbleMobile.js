import { Box, Typography, makeStyles } from "@material-ui/core";

import React from "react";
import bubbleBlue from "../../assets/svg/bubble-blue.svg";

const useStyles = makeStyles((theme) => {
  const xsScreen = theme.breakpoints.down("xs");

  return {
    root: {
      display: "none",
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "4vh",
      [xsScreen]: {
        display: "flex",
      },
    },
    slogan: {
      ...theme.typography.fontWeightMedium,
      color: theme.colors.lightGrey,
      paddingTop: "15px",
      fontSize: "12px",
      textAlign: "center",
    },
    blueBubble: {
      width: "30vw",
      height: "auto",
    },
  };
});

/**
 * @description LoginBubbleMobile component is a Material-UI component that displays a chat bubble with text below it.
 */

const LoginBubbleMobile = ({ className }) => {
  const classes = useStyles();

  return (
    <Box className={`${classes.root} ${className}`}>
      <img src={bubbleBlue} className={classes.blueBubble} />
      <Typography className={classes.slogan}>
        Converse with anyone with any language
      </Typography>
    </Box>
  );
};

export default LoginBubbleMobile;
