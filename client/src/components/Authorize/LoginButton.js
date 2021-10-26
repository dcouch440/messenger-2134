import { Button, Typography, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => {
  const xsScreen = theme.breakpoints.down("xs");

  return {
    root: {
      backgroundColor: theme.colors.lightBlue,
      color: "white",
      width: 160,
      height: 56,
      margin: "0 auto",
      borderRadius: 3,
      marginTop: 24,
      boxShadow: "none",
      fontFamily: theme.fonts.monoserrat,
      "&:hover": {
        backgroundColor: "transparent",
        color: theme.colors.lightBlue,
      },
      [xsScreen]: {
        width: "100%",
        marginTop: "0",
      },
    },
    text: {
      fontSize: 16,
    },
  };
});

/**
 * @description LoginButton component is a large blue Material-UI button - width becomes 100% of its container on xs screens.
 */

const LoginButton = ({ text, onClick, type, variant, className }) => {
  const classes = useStyles();

  return (
    <Button
      className={`${classes.root} ${className}`}
      onClick={onClick}
      type={type}
      variant={variant}
      size="large"
    >
      <Typography className={classes.text}>{text}</Typography>
    </Button>
  );
};

export default LoginButton;

LoginButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
};
