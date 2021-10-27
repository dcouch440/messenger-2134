import { Box, Button, Typography, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => {
  const smlScreen = theme.breakpoints.down("sm");
  const xsScreen = theme.breakpoints.down("xs");

  return {
    root: {
      width: 351,
      height: 54,
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      [smlScreen]: {
        width: 300,
      },
      [xsScreen]: {
        width: "85%",
        height: "unset",
      },
    },
    sText: {
      fontSize: theme.typography.fontSize,
      [xsScreen]: {
        fontSize: 10,
      },
    },
    routeButton: {
      backgroundColor: "transparent",
      width: 170,
      height: 54,
      fontSize: theme.typography.fontSize,
      fontFamily: theme.typography.fontFamily,
      boxShadow: `0px 2px 12px ${theme.palette.transparentBlue.main}`,
      borderRadius: 5,
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.transparentWhite.main,
      },
      [smlScreen]: {
        width: 160,
      },
      [xsScreen]: {
        boxShadow: "none",
        width: "fit-content",
        height: "fit-content",
        padding: 0,
      },
    },
  };
});

/**
 * @description ChangeRouteButton is a button + styled label component that takes a route as a prop to change routes when pressed.
 */

const ChangeRouteButton = ({
  route,
  buttonText,
  sideText,
  className,
  variant,
}) => {
  const history = useHistory();
  const classes = useStyles();

  const changeRoute = () => history.push(route);

  return (
    <Box className={`${classes.root} ${className ?? ""}`}>
      <Typography color="secondary" className={classes.sText}>
        {sideText}
      </Typography>
      <Button
        className={classes.routeButton}
        variant={variant}
        onClick={changeRoute}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

ChangeRouteButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  className: PropTypes.string,
  route: PropTypes.string.isRequired,
  sideText: PropTypes.string,
};

export default ChangeRouteButton;
