import {
  InputContainer,
  LoginLayout,
  TopButtonContainer,
} from "./Layout/LoginLayout";

import { ChangeRouteButton } from "./components";
import React from "react";
import { Redirect } from "react-router-dom";
import { SignupForm } from "./components/Signup";
import { connect } from "react-redux";
import { register } from "./store/utils/thunkCreators";

/**
 * @description Signup Component is a Material-UI full page component for users to signup
 */

const Signup = (props) => {
  const { user, register } = props;

  const handleRegister = async (event, { username, email, password }) => {
    try {
      event.preventDefault();
      await register({ username, email, password });
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
          route="/login"
          sideText="Already have an account?"
          buttonText="Login"
        />
      </TopButtonContainer>
      <InputContainer>
        <SignupForm onSubmit={handleRegister} />
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
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
