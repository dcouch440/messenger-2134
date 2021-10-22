import { Typography, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => {
  const lgScreen = theme.breakpoints.up("lg");

  return {
    root: {
      fontSize: "26px",
      fontWeight: "600",
      marginBottom: "23px",
      [lgScreen]: {
        fontSize: "36px",
      },
    },
  };
});
/**
 * @description LoginHeader component displays an Material-UI Typography h2 element that increases in side for large screens.
 */

const LoginHeader = ({ text }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.root} variant="h2">
      {text}
    </Typography>
  );
};

LoginHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default LoginHeader;
