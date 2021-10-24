import {
  InputContainer,
  LoginLayout,
  TopButtonContainer,
} from "./Layout/Login";

import { ChangeRouteButton } from "./components";
import React from "react";
import { Redirect } from "react-router-dom";
import { SignupForm } from "./components/Signup";
import { connect } from "react-redux";
import { register } from "./store/utils/thunkCreators";

/**
 * @description Signup Component is a full page component for users to signup.
 */

const Signup = ({ user, register }) => {
  if (user.id) {
    return <Redirect to="/home" />;
  }

  const handleRegister = async (event, { username, email, password }) => {
    try {
      event.preventDefault();
      await register({ username, email, password });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginLayout>
      <TopButtonContainer>
        <ChangeRouteButton
          route="/login"
          sideText="Already have an account?"
          buttonText="Login"
          variant="contained"
        />
      </TopButtonContainer>
      <InputContainer>
        <SignupForm onSubmit={handleRegister} />
      </InputContainer>
    </LoginLayout>
  );
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  register: (credentials) => {
    dispatch(register(credentials));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
