import { Button, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => {
  const xsScreen = theme.breakpoints.down("xs");

  return {
    root: {
      color: "white",
      width: 160,
      height: 56,
      borderRadius: 3,
      marginTop: theme.spacing(2),
      boxShadow: "none",
      fontWeight: theme.typography.fontWeightMedium,
      "&:hover": {
        backgroundColor: "transparent",
        color: theme.palette.primary.main,
      },
      [xsScreen]: {
        width: "100%",
        marginTop: "0",
      },
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
      className={`${classes.root} ${className ?? ""}`}
      onClick={onClick}
      type={type}
      color="primary"
      variant={variant}
      size="large"
    >
      {text}
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
