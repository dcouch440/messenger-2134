import { Button, CssBaseline, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { fetchConversations, logout } from "../store/utils/thunkCreators";

import { ActiveChat } from "./ActiveChat";
import { Redirect } from "react-router-dom";
import { SidebarContainer } from "./Sidebar";
import { clearOnLogout } from "../store/index";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const { user, logout, fetchConversations } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (user.id) {
      setIsLoggedIn(true);
    }
  }, [user.id]);

  useEffect(() => {
    fetchConversations();
  }, [fetchConversations]);

  if (!user.id) {
    // If we were previously logged in, redirect to login instead of register
    if (isLoggedIn) return <Redirect to="/login" />;
    return <Redirect to="/register" />;
  }

  const handleLogout = async () => {
    await logout(user.id);
  };

  return (
    <>
      {/* logout button will eventually be in a dropdown next to username */}
      <Button className={classes.logout} onClick={handleLogout}>
        Logout
      </Button>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <SidebarContainer />
        <ActiveChat />
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    conversations: state.conversations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (id) => {
      dispatch(logout(id));
      dispatch(clearOnLogout());
    },
    fetchConversations: () => {
      dispatch(fetchConversations());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
