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
      marginTop: theme.spacing(4),
      [xsScreen]: {
        display: "flex",
      },
    },
    slogan: {
      paddingTop: theme.spacing(1),
      fontSize: theme.typography.fontSize,
      textAlign: "center",
    },
    blueBubble: {
      width: "30vw",
      height: "auto",
    },
  };
});

/**
 * @description BubbleMobile component displays a chat bubble with text below it.
 */

const BubbleMobile = ({ className }) => {
  const classes = useStyles();

  return (
    <Box className={`${classes.root} ${className ?? ""}`}>
      <img
        src={bubbleBlue}
        className={classes.blueBubble}
        alt="A blue chat bubble svg with three dots."
      />
      <Typography color="secondary" className={classes.slogan}>
        Converse with anyone with any language
      </Typography>
    </Box>
  );
};

export default BubbleMobile;
