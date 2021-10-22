import { Box, makeStyles } from "@material-ui/core";
import {
  InputContainer,
  LoginLayout,
  TopButtonContainer,
} from "./Layout/LoginLayout";
import { LoginButton, LoginHeader, LoginInput } from "./components/Login";
import React, { useState } from "react";

import ChangeRouteButton from "./components/ChangeRouteButton";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "./store/utils/thunkCreators";

const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
  },
}));

/**
 * @description Login Component is a full page component for users to login
 */

const Login = (props) => {
  const { user, login } = props;
  const [loginInputs, setLoginInputs] = useState({
    username: "",
    password: "",
  });
  const classes = useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    const { username, password } = loginInputs;

    await login({ username, password });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLoginInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <LoginLayout>
      <TopButtonContainer>
        <ChangeRouteButton
          route="/register"
          sideText="Don't have an account?"
          buttonText="Create account"
        />
      </TopButtonContainer>
      <InputContainer>
        <form className={classes.form} onSubmit={handleLogin}>
          {/*  example is currently E-mail, project expects Username */}
          <LoginHeader text="Welcome Back!" />
          <Box>
            <LoginInput
              ariaLabel="username"
              label="Username"
              name="username"
              type="text"
              onChange={handleChange}
              value={loginInputs.username}
              required
            />
            <LoginInput
              label="Password"
              ariaLabel="password"
              type="password"
              name="password"
              onChange={handleChange}
              value={loginInputs.password}
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
      </InputContainer>
    </LoginLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
