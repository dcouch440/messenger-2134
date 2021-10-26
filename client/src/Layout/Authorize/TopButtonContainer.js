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
      marginTop: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [lgScreen]: {
        paddingTop: theme.spacing(5),
        paddingRight: theme.spacing(2),
      },
      [smlScreens]: {
        paddingRight: 0,
        justifyContent: "center",
      },
      [xsScreen]: {
        padding: 0,
        order: 2,
      },
    },
  };
});

/**
 * @description TopButtonContainer renders children in a flex container positioned to the right. hides on xs screens.
 */

const TopButtonContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
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
