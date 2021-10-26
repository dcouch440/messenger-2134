import { Box, makeStyles } from "@material-ui/core";
import { LoginBubbleMobile, LoginButton, LoginHeader, LoginInput } from ".";

import { ChangeRouteButton } from "..";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { login } from "../../store/utils/thunkCreators";
import { useState } from "react";

const useStyles = makeStyles((theme) => {
  const xsScreen = theme.breakpoints.down("sm");

  return {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flex: 1,
    },
    mobileRouteButton: {
      display: "none",
      [xsScreen]: {
        display: "flex",
        width: "100%",
        marginTop: 25,
      },
    },
  };
});

/**
 * @description LoginForm component is a form that takes username and password and signs the user in through connect.
 */

const LoginForm = ({ login }) => {
  const [{ username, password }, setFormInputs] = useState({
    username: "",
    password: "",
  });
  const classes = useStyles();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    login({ username, password });
  };

  return (
    <form className={classes.root} onSubmit={handleLogin}>
      {/* shows on mobile only */}
      <LoginBubbleMobile />
      {/*  example is currently E-mail, project expects Username */}
      <Box>
        <LoginHeader text="Welcome Back!" />
        <LoginInput
          className={classes.inputs}
          ariaLabel="username"
          label="Username"
          name="username"
          type="text"
          autoComplete="username"
          onChange={handleChange}
          value={username}
          required
        />
        <LoginInput
          className={classes.inputs}
          label="Password"
          ariaLabel="password"
          type="password"
          name="password"
          autoComplete="password"
          onChange={handleChange}
          value={password}
          forgot
          required
        />
      </Box>
      <LoginButton
        type="submit"
        variant="contained"
        size="large"
        text="Login"
      />
      <ChangeRouteButton
        className={classes.mobileRouteButton}
        route="/register"
        sideText="Don't have an account?"
        buttonText="Create account"
        variant="text"
      />
    </form>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => {
    dispatch(login(credentials));
  },
});

export default connect(null, mapDispatchToProps)(LoginForm);
