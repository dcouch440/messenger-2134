import { Typography, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => {
  const lgScreen = theme.breakpoints.up("lg");
  const xsScreen = theme.breakpoints.down("sm");

  return {
    root: {
      fontSize: 26,
      fontWeight: 600,
      marginBottom: 40,
      [lgScreen]: {
        fontSize: 36,
      },
      [xsScreen]: {
        fontSize: 14,
        margin: 0,
        paddingTop: 50,
        paddingBottom: 25,
      },
    },
  };
});

/**
 * @description LoginHeader component displays an Material-UI Typography h2 element that increases in size for large screens.
 */

const LoginHeader = ({ text, className }) => {
  const classes = useStyles();
  return (
    <Typography className={`${classes.root} ${className ?? ""}`} variant="h2">
      {text}
    </Typography>
  );
};

LoginHeader.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default LoginHeader;
