import { Box, Typography, makeStyles } from "@material-ui/core";

import React from "react";
import bgImage from "../../assets/img/bg-img.webp";
import bubble from "../../assets/svg/bubble.svg";

const useStyles = makeStyles((theme) => {
  const smlScreen = theme.breakpoints.only("sm");
  const lgScreen = theme.breakpoints.up("lg");
  const xsScreen = theme.breakpoints.down("xs");

  return {
    sideBanner: {
      position: "relative",
      height: "100%",
      width: 425,
      backgroundColor: theme.palette.primary.dark,
      background: `
        ${theme.palette.blueGradient.main},
        url(${bgImage})
      `,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      [lgScreen]: {
        width: 550,
      },
      [xsScreen]: {
        display: "None",
      },
    },
    sloganAndBubbleBox: {
      position: "absolute",
      top: 190,
      right: 0,
      left: 0,
      width: 270,
      margin: "0 auto",
      textAlign: "center",
      [lgScreen]: {
        top: 260,
      },
      [smlScreen]: {
        width: 160,
      },
    },
    sloganText: {
      color: "white",
      marginTop: theme.spacing(3),
      fontSize: theme.typography.fontSizeLg,
      [smlScreen]: {
        fontSize: theme.typography.fontSize,
      },
    },
    bubble: {
      [lgScreen]: {
        width: 67,
      },
    },
  };
});

/**
 * @description LoginSideBar component displays a full hight styled image that changes with screen width.
 */

const LoginSideBar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.sideBanner}>
      <Box className={classes.sloganAndBubbleBox}>
        <img
          className={classes.bubble}
          src={bubble}
          alt="Chat bubble svg with three dots in the middle."
        />
        <Typography className={classes.sloganText}>
          Converse with anyone with any language
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginSideBar;
