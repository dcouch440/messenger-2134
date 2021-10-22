import { Box, Container, Typography, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";
import bgImage from "../../assets/img/bg-img.webp";
import bubble from "../../assets/svg/bubble.svg";

const useStyles = makeStyles((theme) => {
  const xsScreen = theme.breakpoints.only("xs");
  const smlScreen = theme.breakpoints.only("sm");
  const lgScreen = theme.breakpoints.up("lg");

  return {
    root: {
      height: "100vh",
      minHeight: "650px",
      display: "flex",
    },
    children: {
      height: "100%",
      flex: 1,
    },
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
        display: "none",
      },
    },
    sloganAndBubbleContainer: {
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
    },
    sloganText: {
      ...theme.typography.fontWeightMedium,
      color: "white",
      marginTop: "15px",
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
 *
 * @description LoginLayout renders child components in with a side banner.
 *
 */

const LoginLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.sideBanner}>
        <Box className={classes.sloganAndBubbleContainer}>
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
      <Container className={classes.children}>{children}</Container>
    </Box>
  );
};

LoginLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default LoginLayout;
