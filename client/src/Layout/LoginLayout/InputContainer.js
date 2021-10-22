import { Box, Container, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => {
  const xsScreen = theme.breakpoints.down("sm");

  return {
    root: {
      flex: 1,
      width: "100%",
    },
    innerBox: {
      width: "100%",
      paddingTop: "85px",
      [xsScreen]: {
        display: "flex",
        justifyContent: "center",
      },
    },
  };
});

/**
 * @description InputContainer component is a Material-UI Container that fills the remaining space vertically when the parent element flex is set to column.
 */

const InputContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <Container fluid className={classes.root}>
      <Box className={classes.innerBox}>{children}</Box>
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
