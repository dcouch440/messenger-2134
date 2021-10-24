import { Typography, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => {
  const lgScreen = theme.breakpoints.up("lg");
  const xsScreen = theme.breakpoints.down("sm");

  return {
    root: {
      fontSize: "26px",
      fontWeight: "600",
      marginBottom: "40px",
      [lgScreen]: {
        fontSize: "36px",
      },
      [xsScreen]: {
        fontSize: "14px",
        margin: "0",
        paddingTop: "50px",
        paddingBottom: "25px",
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
