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
      paddingLeft: "87px",
      [smlScreen]: {
        paddingLeft: "0",
        paddingRight: "0",
        paddingBottom: "25px",
        display: "flex",
        alignItems: "center",
      },
    },
    innerBox: {
      width: "100%",
      paddingTop: "85px",
      [xsScreen]: {
        display: "flex",
        justifyContent: "center",
        padding: "0",
      },
    },
    innerInputContainer: {
      display: "flex",
      flexDirection: "column",
      height: "358px",
      justifyContent: "space-between",
      width: "fit-content",
      [lgScreen]: {
        paddingTop: "20px",
      },
    },
  };
});

/**
 * @description InputContainer component is a Material-UI Container.
 */

const InputContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.innerBox}>
        <Box className={classes.innerInputContainer}>{children}</Box>
      </Box>
    </Container>
  );
};

InputContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default InputContainer;
