import { Box, makeStyles } from "@material-ui/core";
import {
  LoginBubbleMobile,
  LoginButton,
  LoginHeader,
  LoginInput,
} from "../Login";
import React, { useState } from "react";

import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
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
    flex: 1,
  },
  header: {
    marginBottom: "20px",
  },
  createButton: {
    marginTop: "4px",
  },
}));

/**
 * @description SignupForm component is a Material-UI component.
 */

const SignupForm = ({ onSubmit }) => {
  const [formErrorMessage, setFormErrorMessage] = useState({
    confirmPassword: "",
  });
  const [{ username, email, password, confirmPassword }, setSignupInputs] =
    useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  const classes = useStyles();
  const hasError = Boolean(formErrorMessage.confirmPassword);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setSignupInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    onSubmit(event, { username, email, password, confirmPassword });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <LoginBubbleMobile />
      <LoginHeader className={classes.header} text="Create an account." />
      <Box>
        <LoginInput
          ariaLabel="username"
          label="Username"
          name="username"
          type="text"
          onChange={handleChange}
          value={username}
          required
        />
        <LoginInput
          ariaLabel="e-mail address"
          label="E-mail address"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <LoginInput
          ariaLabel="password"
          label="password"
          ariaDescribedBy="password-input"
          UserInputProps={{ minLength: 6 }}
          type="password"
          name="password"
          error={hasError}
          formHelperText={formErrorMessage.confirmPassword}
          onChange={handleChange}
          value={password}
          required
        />
        <LoginInput
          ariaLabel="confirm password"
          ariaDescribedBy="password-confirmation"
          label="Confirm Password"
          UserInputProps={{ minLength: 6 }}
          type="password"
          name="confirmPassword"
          error={hasError}
          formHelperText={formErrorMessage.confirmPassword}
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
    </form>
  );
};

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
