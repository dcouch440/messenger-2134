import { Box, makeStyles } from "@material-ui/core";
import {
  InputContainer,
  LoginLayout,
  TopButtonContainer,
} from "./Layout/LoginLayout";
import { LoginButton, LoginHeader, LoginInput } from "./components/Login";

import ChangeRouteButton from "./components/ChangeRouteButton";
import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "./store/utils/thunkCreators";

const useStyles = makeStyles((theme) => {
  const lgScreen = theme.breakpoints.up("lg");

  return {
    root: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    innerInputContainer: {
      display: "flex",
      flexDirection: "column",
      height: "358px",
      justifyContent: "space-between",
      width: "fit-content",
      [lgScreen]: {
        paddingTop: "20px",
      },
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "column",
      width: "fit-content",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flex: 1,
    },
  };
});

const Login = (props) => {
  const classes = useStyles();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <LoginLayout>
      <Box className={classes.root}>
        <TopButtonContainer>
          <ChangeRouteButton
            route="/register"
            sideText="Don't have an account?"
            buttonText="Create account"
          />
        </TopButtonContainer>
        <InputContainer>
          <Box className={classes.innerInputContainer}>
            <form className={classes.form} onSubmit={handleLogin}>
              {/*  example is currently E-mail, project expects Username */}
              <LoginHeader text="Welcome Back!" />
              <div>
                <LoginInput
                  ariaLabel="username"
                  label="Username"
                  name="username"
                  type="text"
                  required
                />
                <LoginInput
                  label="Password"
                  ariaLabel="password"
                  type="password"
                  name="password"
                  required
                />
              </div>
              <LoginButton
                type="submit"
                variant="contained"
                size="large"
                text="Login"
              />
            </form>
          </Box>
        </InputContainer>
      </Box>
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
