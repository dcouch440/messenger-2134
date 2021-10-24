import {
  InputContainer,
  LoginLayout,
  TopButtonContainer,
} from "./Layout/Login";

import { ChangeRouteButton } from "./components";
import { LoginForm } from "./components/Login";
import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "./store/utils/thunkCreators";

/**
 * @description Login Component is a full page component for users to login.
 */

const Login = ({ user, login }) => {
  if (user.id) {
    return <Redirect to="/home" />;
  }

  const handleLogin = async (event, { username, password }) => {
    try {
      event.preventDefault();
      await login({ username, password });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginLayout>
      <TopButtonContainer>
        <ChangeRouteButton
          route="/register"
          sideText="Don't have an account?"
          buttonText="Create account"
          variant="contained"
        />
      </TopButtonContainer>
      <InputContainer>
        <LoginForm onSubmit={handleLogin} />
      </InputContainer>
    </LoginLayout>
  );
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => {
    dispatch(login(credentials));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
