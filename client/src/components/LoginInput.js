import { FormControl, Grid, TextField, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => {
  const smlScreen = theme.breakpoints.down("sm");

  return {
    root: {
      width: "380px",
      height: "66px",
      [smlScreen]: {
        width: "270px",
      },
    },
    formControl: {
      width: "inherit",
    },
    input: {
      backgroundColor: "transparent",
      width: "inherit",
      "& .MuiInputBase-input": {
        padding: " 10px 5px",
        lineHeight: "19px",
        fontSize: "14px",
        fontWeight: "600",
        borderBottomWidth: "2px",
      },
      "& .MuiFormLabel-root": {
        color: theme.colors.lightGrey,
        paddingLeft: "10px",
        fontSize: "14px",
      },
    },
  };
});

/**
 *
 * @description LoginInput component is an text input created for the login screen.
 *
 */

const LoginInput = ({ ariaLabel, label, required, type, name, ...props }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <FormControl className={classes.formControl} required={required}>
        <TextField
          className={classes.input}
          aria-label={ariaLabel}
          label={label}
          name={name}
          type={type}
          {...props}
        />
      </FormControl>
    </Grid>
  );
};

LoginInput.propTypes = {
  ariaLabel: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
};

export default LoginInput;
