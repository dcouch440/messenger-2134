import { Box, Container, makeStyles } from "@material-ui/core";

import { LoginSideBar } from "../../components/Login";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => {
  const xsScreen = theme.breakpoints.down("xs");

  return {
    root: {
      height: "100vh",
      minHeight: 650,
      display: "flex",
      width: "100%",
    },
    childrenOuter: {
      height: "100%",
      width: "100%",
      flex: "1",
      [xsScreen]: {
        paddingRight: 0,
        paddingLeft: 0,
      },
    },
    children: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
  };
});

/**
 * @description LoginLayout component is a Material-UI component that renders child components with a side banner.
 */

const LoginLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <LoginSideBar />
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