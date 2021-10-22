import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

import React from "react";
import bgImage from "../../assets/img/bg-img.webp";
import bubble from "../../assets/svg/bubble.svg";

const useStyles = makeStyles((theme) => {
  const xsScreen = theme.breakpoints.down("xs");
  const smlScreen = theme.breakpoints.down("sml");
  const mdScreen = theme.breakpoints.down("md");

  return {
    root: {
      width: "100vw",
      height: "100vh",
      minHeight: "650px",
      display: "flex",
    },
    children: {
      height: "100%",
      flex: 1,
    },
    sideBanner: {
      height: "100vh",
      minWidth: "425px",
      maxWidth: "600px",
      width: "30%",
      backgroundColor: "rgb(134,185,255)",
      background: `
        linear-gradient(0deg, rgba(134,185,255,.85) 0%, rgba(58,141,255,.85) 100%),
        url(${bgImage})
      `,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      [mdScreen]: {
        width: "30%",
        backgroundSize: "cover",
      },
      [smlScreen]: {
        minWidth: "220px",
        width: "20%",
      },
      [xsScreen]: {
        display: "none",
      },
    },
    slogan: {
      [mdScreen]: {
        width: "100%",
        marginTop: "300px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      },
    },
    sloganText: {
      color: "white",
      [mdScreen]: {
        ...theme.typography.fontWeightMedium,
        marginTop: "15px",
        fontSize: "16px",
      },
    },
    bubble: {
      [mdScreen]: {
        width: "70px",
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
    <Grid container className={classes.root}>
      <Box className={classes.sideBanner}>
        <Box className={classes.slogan}>
          <img
            className={classes.bubble}
            src={bubble}
            alt="Chat bubble overlay svg"
          />
          <Typography className={classes.sloganText}>
            Converse with anyone with any language
          </Typography>
        </Box>
      </Box>
      <Container className={classes.children}>{children}</Container>
    </Grid>
  );
};

export default LoginLayout;
