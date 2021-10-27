import { ChangeRouteButton } from "../components";
import { Form } from "../components/Authorize";
import { Layout } from "../Layout/Authorize";
import React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { login } from "../store/utils/thunkCreators";

/**
 * @description Login component is a full page component that takes username and password.
 */

const Login = ({ user, login }) => {
  if (user.id) {
    return <Redirect to="/home" />;
  }

  const handleAuth = ({ username, password }) => {
    login({ username, password });
  };

  const topButton = () => (
    <ChangeRouteButton
      route="/register"
      sideText="Don't have an account?"
      buttonText="Create account"
      variant="contained"
    />
  );

  return (
    <Layout topButton={topButton()}>
      <Form handleAuth={handleAuth} />
    </Layout>
  );
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch(login(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
