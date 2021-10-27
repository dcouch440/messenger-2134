import React, { useState } from "react";

import { ChangeRouteButton } from "../components";
import { Form } from "../components/Authorize";
import { Layout } from "../Layout/Authorize";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { register } from "../store/utils/thunkCreators";

/**
 * @description Signup component is a full page component that takes username, email, password, and passwordConfirm.
 */

const Signup = ({ user, register }) => {
  const [{ passwordError }, setFormErrorMessage] = useState({
    passwordError: "",
  });

  if (user.id) {
    return <Redirect to="/home" />;
  }

  const handleAuth = async ({ username, email, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      setFormErrorMessage({ passwordError: "Passwords must match" });
      return;
    }
    register({ username, email, password });
  };

  const topButton = () => (
    <ChangeRouteButton
      route="/login"
      sideText="Already have an account?"
      buttonText="Login"
      variant="contained"
    />
  );

  return (
    <Layout topButton={topButton()}>
      <Form handleAuth={handleAuth} error={passwordError} withSignup />
    </Layout>
  );
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  register: (credentials) => dispatch(register(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
