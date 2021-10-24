import { FormContainer, LoginLayout, TopButtonContainer } from "./Layout/Login";

import { ChangeRouteButton } from "./components";
import React from "react";
import { Redirect } from "react-router-dom";
import { SignupForm } from "./components/Signup";
import { connect } from "react-redux";

/**
 * @description Signup Component is a full page component for users to signup.
 */

const Signup = ({ user }) => {
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
          variant="contained"
        />
      </TopButtonContainer>
      <FormContainer>
        <SignupForm />
      </FormContainer>
    </LoginLayout>
  );
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Signup);
