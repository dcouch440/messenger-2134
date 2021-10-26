import {
  FormContainer,
  LoginLayout,
  TopButtonContainer,
} from "../Layout/Authorize";

import { ChangeRouteButton } from "../components";
import { LoginForm } from "../components/Authorize";
import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

/**
 * @description Login Component is a full page component for users to login.
 */

const Login = ({ user }) => {
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
          variant="contained"
        />
      </TopButtonContainer>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </LoginLayout>
  );
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Login);
