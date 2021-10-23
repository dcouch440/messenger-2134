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
      marginBottom: "10vh",
      [xsScreen]: {
        display: "flex",
      },
    },
    slogan: {
      ...theme.typography.fontWeightMedium,
      color: theme.colors.lightGrey,
      paddingTop: "15px",
      fontSize: "14px",
      maxWidth: "150px",
      textAlign: "center",
    },
    blueBubble: {
      width: "40vw",
      height: "auto",
    },
  };
});

const LoginBubbleMobile = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={bubbleBlue} className={classes.blueBubble} />
      <Typography className={classes.slogan}>
        Converse with anyone with any language
      </Typography>
    </Box>
  );
};

export default LoginBubbleMobile;