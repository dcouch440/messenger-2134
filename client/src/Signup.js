import { Box, makeStyles } from "@material-ui/core";
import {
  InputContainer,
  LoginLayout,
  TopButtonContainer,
} from "./Layout/LoginLayout";
import { LoginButton, LoginHeader, LoginInput } from "./components/Login";
import React, { useState } from "react";

import ChangeRouteButton from "./components/ChangeRouteButton";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "./store/utils/thunkCreators";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
  },
  header: {
    marginBottom: "20px",
  },
  createButton: {
    marginTop: "4px",
  },
}));

/**
 * @description Signup Component is a full page component for users to login
 */

const Signup = (props) => {
  const { user, register } = props;
  const [signupInputs, setSignupInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const classes = useStyles();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setSignupInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const { username, email, password } = signupInputs;

    await register({ username, email, password });
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
        <form className={classes.form} onSubmit={handleRegister}>
          <LoginHeader className={classes.header} text="Create an account." />
          <Box>
            <LoginInput
              ariaLabel="username"
              label="Username"
              name="username"
              type="text"
              onChange={handleChange}
              value={signupInputs.username}
              required
            />
            <LoginInput
              ariaLabel="e-mail address"
              label="E-mail address"
              type="email"
              name="email"
              onChange={handleChange}
              value={signupInputs.email}
            />
            <LoginInput
              ariaLabel="password"
              label="password"
              UserInputProps={{ minLength: 6 }}
              type="password"
              name="password"
              onChange={handleChange}
              value={signupInputs.password}
              required
            />
          </Box>
          <LoginButton
            className={classes.createButton}
            type="submit"
            variant="contained"
            size="large"
            text="Create"
          />
        </form>
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
