import { Container, makeStyles } from "@material-ui/core";

import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    paddingTop: "35px",
    paddingRight: "50px",
  },
}));

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

export default TopButtonContainer;
