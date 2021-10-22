import { Box, Container, Typography, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";
import bgImage from "../../assets/img/bg-img.webp";
import bubble from "../../assets/svg/bubble.svg";

const useStyles = makeStyles((theme) => {
  const xsScreen = theme.breakpoints.down("xs");
  const smlScreen = theme.breakpoints.only("sm");
  const lgScreen = theme.breakpoints.up("lg");

  return {
    root: {
      height: "100vh",
      minHeight: "650px",
      display: "flex",
    },
    childrenOuter: {
      height: "100%",
      flex: 1,
      paddingBottom: "25px",
    },
    children: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      [xsScreen]: {
        flexDirection: "column-reverse",
      },
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
        width: "20px",
        background: "none",
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
 *
 * @description LoginLayout renders child components in with a side banner.
 *
 */

const LoginLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
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
      <Container className={classes.childrenOuter}>
        <Box className={classes.children}>{children}</Box>
      </Container>
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
