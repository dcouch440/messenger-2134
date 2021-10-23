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
      width: "425px",
      backgroundColor: "rgb(134,185,255)",
      background: `
        linear-gradient(0deg, rgba(134,185,255,.85) 0%, rgba(58,141,255,.85) 100%),
        url(${bgImage})
      `,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      [lgScreen]: {
        width: "550px",
      },
      [xsScreen]: {
        display: "None",
      },
    },
    sloganAndBubbleBox: {
      position: "absolute",
      top: "190px",
      right: 0,
      left: 0,
      width: "270px",
      margin: "0 auto",
      textAlign: "center",
      [lgScreen]: {
        top: "260px",
      },
      [smlScreen]: {
        width: "240px",
      },
      [xsScreen]: {
        display: "none",
      },
    },
    sloganText: {
      ...theme.typography.fontWeightMedium,
      color: "white",
      marginTop: "39px",
      fontSize: "26px",
      [smlScreen]: {
        fontSize: "20px",
      },
    },
    bubble: {
      [lgScreen]: {
        width: "67px",
      },
    },
  };
});

/**
 * @description LoginSideBar component is a Material-UI component that displays a full hight styled image that changes with screen width.
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
