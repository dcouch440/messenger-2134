import { Box, makeStyles } from "@material-ui/core";
import { BubbleMobile, Header, Input, SubmitButton } from "../Authorize";
import React, { useState } from "react";
import { login, register } from "../../store/utils/thunkCreators";

import PropTypes from "prop-types";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => {
  const smlScreen = theme.breakpoints.down("sm");
  const xsScreen = theme.breakpoints.down("xs");

  return {
    root: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flex: 1,
    },
    header: {
      marginBottom: theme.spacing(2),
      [xsScreen]: {
        margin: 0,
      },
    },
    inputBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    inputs: {
      marginBottom: theme.spacing(2),
      [smlScreen]: {
        marginBottom: theme.spacing(2),
      },
    },
    mobileRouteButton: {
      display: "none",
      [xsScreen]: {
        display: "flex",
        width: "100%",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
      },
    },
  };
});

/**
 * @description Form component is a form that takes username, password, password confirm, and email. use withSignup to create a signup page.
 * If passwords do not match formHelperText appears bellow the input to display passwords did not match.
 */

const Form = ({ register, login, withSignup }) => {
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
  const headerText = `${withSignup ? "Create an account." : "Welcome Back!"}`;
  const submitButtonText = withSignup ? "Create" : "Login";

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setSignupInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();

    if (!withSignup) {
      login({ username, password });
      return;
    }

    if (password !== confirmPassword) {
      setFormErrorMessage({ passwordError: "Passwords must match" });
      return;
    }

    register({ username, email, password });
  };

  return (
    <form className={classes.form} onSubmit={handleRegister}>
      <BubbleMobile />
      <Header className={classes.header} text={headerText} />
      <Box className={classes.inputBox}>
        <Input
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
        {withSignup && (
          <Input
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
        )}
        <Input
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
          forgot={withSignup ? false : true}
          required
        />
        {withSignup && (
          <Input
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
        )}
        <SubmitButton
          type="submit"
          variant="contained"
          size="large"
          text={submitButtonText}
        />
      </Box>
    </form>
  );
};

Form.propTypes = {
  register: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  register: (credentials) => {
    dispatch(register(credentials));
  },
  login: (credentials) => {
    dispatch(login(credentials));
  },
});

export default connect(null, mapDispatchToProps)(Form);
