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
  const smlScreen = theme.breakpoints.only("sm");
  const xsScreen = theme.breakpoints.down("xs");
  return {
    root: {
      width: 380,
      height: 66,
      marginBottom: theme.spacing(2),
      [smlScreen]: {
        width: 300,
      },
      [xsScreen]: {
        width: "85vw",
        height: 56,
      },
    },
    formControl: {
      width: "inherit",
    },
    input: {
      backgroundColor: "transparent",
      width: "inherit",
      "& .MuiInputBase-input": {
        padding: "10px 5px",
        borderBottomWidth: 2,
      },
      "& .MuiFormLabel-root": {
        color: theme.palette.secondary.main,
        paddingLeft: theme.spacing(0.5),
        paddingBottom: theme.spacing(1),
        fontSize: theme.typography.fontSize,
      },
    },
    forgotPassword: {
      position: "absolute",
      paddingBottom: theme.spacing(1),
      bottom: 0,
      right: theme.spacing(1),
      fontSize: theme.typography.fontSize,
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightBold,
      "&:hover": {
        cursor: "pointer",
      },
    },
    formHelper: {
      fontSize: 10,
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
  inputProps,
  autoComplete,
  error,
  formHelperText,
  className,
  ariaDescribedBy,
  ...props
}) => {
  const history = useHistory("/forgot-password");
  const classes = useStyles();

  // placeholder
  const handleRouteChange = () => history.push("/forgot-password-route");

  return (
    <Box className={`${classes.root} ${className ?? ""}`}>
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
          inputProps={inputProps}
          autoComplete={autoComplete}
          value={value}
          type={type}
          aria-describedby={ariaDescribedBy}
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
          <FormHelperText className={classes.formHelper} id={ariaDescribedBy}>
            {formHelperText}
          </FormHelperText>
        ) : null}
      </FormControl>
    </Box>
  );
};

LoginInput.propTypes = {
  ariaDescribedBy: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
  error: PropTypes.bool,
  forgot: PropTypes.bool,
  formHelperText: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  onChange: PropTypes.func,
  inputProps: PropTypes.object,
  required: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.PropTypes.string,
};

export default LoginInput;
