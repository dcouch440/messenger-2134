import { Button, Grid, makeStyles } from "@material-ui/core";
import { LoginLayout, TopButtonContainer } from "./Layout/LoginLayout";

import ChangeRouteButton from "./components/ChangeRouteButton";
import LoginInput from "./components/LoginInput";
import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "./store/utils/thunkCreators";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
  },
}));

const UserInput = (props) => {
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
      <Grid className={classes.root}>
        <TopButtonContainer>
          <ChangeRouteButton
            route="/register"
            sideText="Don't have an account?"
            buttonText="Create account"
          />
        </TopButtonContainer>
        <form onSubmit={handleLogin}>
          {/*
            example is currently E-mail
          */}
          <Grid>
            <LoginInput
              ariaLabel="username"
              label="Username"
              name="username"
              type="text"
              required={true}
            />
            <LoginInput
              label="Password"
              ariaLabel="password"
              type="password"
              name="password"
              required={true}
            />
            <Grid>
              <Button type="submit" variant="contained" size="large">
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);
