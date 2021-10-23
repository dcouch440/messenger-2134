import {
  Box,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => {
  const xsScreen = theme.breakpoints.down("xs");

  return {
    root: {
      width: "380px",
      height: "66px",
      marginBottom: "36px",
      [xsScreen]: {
        width: "85vw",
        margin: "0",
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
        paddingLeft: "5px",
        paddingBottom: "10px",
        fontSize: "14px",
      },
    },
    forgotPassword: {
      ...theme.typography.fontWeightMedium,
      position: "absolute",
      paddingBottom: "10px",
      bottom: 0,
      right: "10px",
      fontSize: "12px",
      color: theme.colors.lightBlue,
      fontWeight: "600",
    },
  };
});

/**
 * @description LoginInput component is an text input created for the login screen.
 */

const LoginInput = ({
  onChange,
  ariaLabel,
  label,
  forgot,
  required,
  value,
  type,
  name,
  UserInputProps,
  error,
  formHelperText,
  ...props
}) => {
  const history = useHistory("/forgot-password");
  const classes = useStyles();

  // placeholder
  const handleRouteChange = () => history.push("/forgot-password-route");

  return (
    <Box className={classes.root}>
      <FormControl
        className={classes.formControl}
        required={required}
        error={error}
      >
        <TextField
          onChange={onChange}
          className={classes.input}
          aria-label={ariaLabel}
          label={label}
          name={name}
          value={value}
          type={type}
          UserInputProps={UserInputProps}
          {...props}
        />
        {forgot ? (
          <Typography
            className={classes.forgotPassword}
            onClick={handleRouteChange}
          >
            Forgot?
          </Typography>
        ) : null}
        {formHelperText ? (
          <FormHelperText id={ariaLabel}>{formHelperText}</FormHelperText>
        ) : null}
      </FormControl>
    </Box>
  );
};

LoginInput.propTypes = {
  UserInputProps: PropTypes.object,
  ariaLabel: PropTypes.string.isRequired,
  error: PropTypes.bool,
  forgot: PropTypes.bool,
  formHelperText: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.any,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default LoginInput;
