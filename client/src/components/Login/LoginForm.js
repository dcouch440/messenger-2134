import { Box, makeStyles } from "@material-ui/core";
import { LoginBubbleMobile, LoginButton, LoginHeader, LoginInput } from ".";

import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";

const useStyles = makeStyles(() => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flex: 1,
    },
  };
});

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
          ariaLabel="username"
          label="Username"
          name="username"
          type="text"
          onChange={handleChange}
          value={username}
          required
        />
        <LoginInput
          label="Password"
          ariaLabel="password"
          type="password"
          name="password"
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
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
