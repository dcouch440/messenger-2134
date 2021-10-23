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
      paddingTop: "30px",
      paddingRight: "36px",
      [lgScreen]: {
        paddingTop: "65px",
        paddingRight: "25px",
      },
      [smlScreens]: {
        paddingRight: "0",
        justifyContent: "center",
      },
      [xsScreen]: {
        justifyContent: "center",
        padding: "0",
        margin: "0",
        height: "65px",
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
