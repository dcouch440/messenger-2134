import { FormContainer, Layout, TopButtonContainer } from "../Layout/Authorize";

import { ChangeRouteButton } from "../components";
import { Form } from "../components/Authorize";
import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

/**
 * @description Authorize component renders a login and signup page
 * use <Authorize withSignup /> to use the signup page.
 */

const Authorize = ({ user, withSignup }) => {
  if (user.id) {
    return <Redirect to="/home" />;
  }

  const routeText = withSignup ? "/login" : "/register";
  const sideText = `${withSignup ? "Already" : "Don't"} have an account?`;
  const buttonText = `${withSignup ? "Login" : "Create account"}`;

  return (
    <Layout>
      <TopButtonContainer>
        <ChangeRouteButton
          route={routeText}
          sideText={sideText}
          buttonText={buttonText}
          variant="contained"
        />
      </TopButtonContainer>
      <FormContainer>
        <Form withSignup={withSignup} />
      </FormContainer>
    </Layout>
  );
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Authorize);
