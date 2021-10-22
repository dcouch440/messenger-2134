import { Container, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => {
  const xsScreen = theme.breakpoints.down("xs");
  const smlScreens = theme.breakpoints.down("sm");
  const lgScreen = theme.breakpoints.up("lg");

  return {
    root: {
      display: "flex",
      justifyContent: "flex-end",
      paddingTop: "35px",
      paddingRight: "25px",
      [lgScreen]: {
        paddingTop: "65px",
        paddingRight: "25px",
      },
      [smlScreens]: {
        paddingRight: "0",
      },
      [xsScreen]: {
        justifyContent: "center",
      },
    },
  };
});

/**
 * @description TopButtonContainer renders children in a flex container positioned to the right.
 */

const TopButtonContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <Container maxWidth={"md"} className={classes.root}>
      {children}
    </Container>
  );
};

TopButtonContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default TopButtonContainer;