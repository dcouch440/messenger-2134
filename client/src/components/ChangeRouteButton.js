import { Box, Button, Typography, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => {
  const smlScreen = theme.breakpoints.down("sm");
  const xsScreen = theme.breakpoints.down("xs");

  return {
    root: {
      width: "351px",
      height: "54px",
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      [smlScreen]: {
        width: "300px",
      },
      [xsScreen]: {
        width: "85%",
        height: "unset",
      },
    },
    sText: {
      fontSize: "14px",
      color: theme.colors.lightGrey,
      [xsScreen]: {
        fontSize: "10px",
      },
    },
    routeButton: {
      backgroundColor: "transparent",
      width: "170px",
      height: "54px",
      fontSize: "14px",
      boxShadow: "0px 2px 12px rgba(74,106,149,0.2)",
      borderRadius: "5px",
      color: theme.colors.lightBlue,
      "&:hover": {
        backgroundColor: "#FFFFFF10",
      },
      [smlScreen]: {
        width: "160px",
        fontSize: "12px",
      },
      [xsScreen]: {
        boxShadow: "none",
        width: "fit-content",
        padding: 0,
      },
    },
  };
});

/**
 * @description ChangeRouteButton is a button + styled label component that takes a route as a prop to chang routes when pressed.
 */

const ChangeRouteButton = ({ route, buttonText, sideText, className }) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Box className={`${classes.root} ${className}`}>
      <Typography className={classes.sText}>{sideText}</Typography>
      <Button
        className={classes.routeButton}
        variant="contained"
        onClick={() => history.push(route)}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

ChangeRouteButton.propTypes = {
  buttonText: PropTypes.string,
  className: PropTypes.string,
  route: PropTypes.string,
  sideText: PropTypes.string,
};

export default ChangeRouteButton;
