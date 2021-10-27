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
  return (
    <Layout>
      <TopButtonContainer>
        <ChangeRouteButton
          route={withSignup ? "/login" : "/register"}
          sideText={
            withSignup ? "Already have an account?" : "Don't have an account?"
          }
          buttonText={withSignup ? "Login" : "Create account"}
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
