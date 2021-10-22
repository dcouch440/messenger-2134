import { Button, Typography, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.lightBlue,
    color: "white",
    width: "160px",
    height: "56px",
    margin: "0 auto",
    borderRadius: "3px",
    marginTop: "24px",
    "&:hover": {
      color: "black",
    },
  },
}));

/**
 * @description LoginButton component is a large blue Material-UI button.
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
      <Typography>{text}</Typography>
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
