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
 * @description Login Component is a Material-UI full page component for users to login
 */

const Login = (props) => {
  const { user, login } = props;

  const handleLogin = async (event, { username, password }) => {
    try {
      event.preventDefault();

      await login({ username, password });
    } catch (err) {
      console.log(err);
    }
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
        <LoginForm onSubmit={handleLogin} />
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
