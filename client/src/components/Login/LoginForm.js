import { Box, makeStyles } from "@material-ui/core";
import { LoginBubbleMobile, LoginButton, LoginHeader, LoginInput } from ".";

import { ChangeRouteButton } from "..";
import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";

const useStyles = makeStyles((theme) => {
  const xsScreen = theme.breakpoints.down("sm");

  return {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flex: "1",
    },
    mobileRouteButton: {
      display: "none",
      [xsScreen]: {
        display: "flex",
        width: "100%",
        marginTop: "25px",
      },
    },
  };
});

/**
 * @description LoginForm component is a Material-UI form that takes username and password - does not prevent default.
 */

const LoginForm = ({ onSubmit }) => {
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

  const handleSubmit = (event) => onSubmit(event, { username, password });

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
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
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
