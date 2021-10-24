import { Box, makeStyles } from "@material-ui/core";
import {
  LoginBubbleMobile,
  LoginButton,
  LoginHeader,
  LoginInput,
} from "../Login";
import React, { useState } from "react";

import { ChangeRouteButton } from "..";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../store/utils/thunkCreators";

const useStyles = makeStyles((theme) => {
  const smlScreen = theme.breakpoints.down("sm");
  const xsScreen = theme.breakpoints.down("xs");

  return {
    root: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flex: "1",
    },
    header: {
      marginBottom: "20px",
      [xsScreen]: {
        margin: "0px",
      },
    },
    inputs: {
      marginBottom: "20px",
      [smlScreen]: {
        marginBottom: "25px",
      },
    },
    mobileRouteButton: {
      display: "none",
      [xsScreen]: {
        display: "flex",
        width: "100%",
        marginTop: "25px",
        marginBottom: "25px",
      },
    },
  };
});

/**
 * @description SignupForm component is a form that takes username, password, password confirm, and email. If passwords do not match formHelperText appears bellow the input to display passwords did not match.
 */

const SignupForm = ({ register }) => {
  const [{ passwordError }, setFormErrorMessage] = useState({
    passwordError: "",
  });
  const [{ username, email, password, confirmPassword }, setSignupInputs] =
    useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  const classes = useStyles();
  const hasPasswordError = Boolean(passwordError);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setSignupInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setFormErrorMessage({ passwordError: "Passwords must match" });
      return;
    }
    register({ username, email, password });
  };

  return (
    <form className={classes.form} onSubmit={handleRegister}>
      <LoginBubbleMobile />
      <LoginHeader className={classes.header} text="Create an account." />
      <Box>
        <LoginInput
          className={classes.inputs}
          ariaLabel="username"
          label="Username"
          name="username"
          autoComplete="username"
          type="text"
          onChange={handleChange}
          value={username}
          required
        />
        <LoginInput
          className={classes.inputs}
          ariaLabel="e-mail address"
          label="E-mail address"
          type="email"
          name="email"
          autoComplete="email"
          onChange={handleChange}
          value={email}
          required
        />
        <LoginInput
          className={classes.inputs}
          ariaLabel="password"
          label="Password"
          ariaDescribedBy="password-input"
          type="password"
          inputProps={{ minLength: 6 }}
          name="password"
          autoComplete="new-password"
          error={hasPasswordError}
          formHelperText={passwordError}
          onChange={handleChange}
          value={password}
          required
        />
        <LoginInput
          className={classes.inputs}
          ariaLabel="confirm password"
          ariaDescribedBy="password-confirmation"
          label="Confirm Password"
          autoComplete="new-password"
          type="password"
          inputProps={{ minLength: 6 }}
          name="confirmPassword"
          error={hasPasswordError}
          formHelperText={passwordError}
          onChange={handleChange}
          value={confirmPassword}
          required
        />
      </Box>
      <LoginButton
        className={classes.createButton}
        type="submit"
        variant="contained"
        size="large"
        text="Create"
      />
      <ChangeRouteButton
        className={classes.mobileRouteButton}
        route="/login"
        sideText="Don't have an account?"
        buttonText="Create account"
        variant="text"
      />
    </form>
  );
};

SignupForm.propTypes = {
  register: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  register: (credentials) => {
    dispatch(register(credentials));
  },
});

export default connect(null, mapDispatchToProps)(SignupForm);
