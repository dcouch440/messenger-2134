import { Button, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.lightBlue,
    color: "white",
    width: "160px",
    height: "56px",
    alignSelf: "center",
    borderRadius: "3px",
    "&:hover": {
      color: "black",
    },
  },
}));

/**
 * @description LoginButton component is a large blue Material-UI button.
 */

const LoginButton = ({ text, onClick, type, variant }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.root}
      onClick={onClick}
      type={type}
      variant={variant}
      size="large"
    >
      {text}
    </Button>
  );
};

export default LoginButton;

LoginButton.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
};
