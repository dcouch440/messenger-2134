import { Box, Container, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => {
  const xsScreen = theme.breakpoints.down("xs");
  const lgScreen = theme.breakpoints.up("lg");
  const smlScreen = theme.breakpoints.down("sm");

  return {
    root: {
      flex: 1,
      width: "100%",
      height: "100%",
      paddingLeft: "87px",
      [smlScreen]: {
        paddingLeft: "0",
        paddingRight: "0",
        paddingBottom: "25px",
      },
      [xsScreen]: {
        padding: "0",
        minHeight: "100%",
        display: "flex",
      },
    },
    innerBox: {
      width: "100%",
      paddingTop: "85px",
      [xsScreen]: {
        display: "flex",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0",
      },
    },
    // contains the button on large screens, container fits to button width.
    innerInputContainer: {
      display: "flex",
      flexDirection: "column",
      height: "358px",
      justifyContent: "space-between",
      width: "fit-content",
      [lgScreen]: {
        paddingTop: "20px",
      },
      [xsScreen]: {
        height: "unset",
      },
    },
  };
});

/**
 * @description FormContainer component is a Material-UI Container that renders a form - adapts to screen size.
 */

const FormContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.innerBox}>
        <Box className={classes.innerInputContainer}>{children}</Box>
      </Box>
    </Container>
  );
};

FormContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default FormContainer;
