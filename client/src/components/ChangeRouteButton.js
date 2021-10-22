import { Box, Button, Typography, makeStyles } from "@material-ui/core";

import React from "react";
import { theme } from "../themes/theme";
import { useHistory } from "react-router";

const useStyles = makeStyles(() => ({
  root: {
    width: "351px",
    height: "54px",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  sText: {
    fontSize: "14px",
  },
  routeButton: {
    backgroundColor: "transparent",
    width: "170px",
    height: "54px",
    boxShadow: "1px 2px 13px 3px #00000030",
    borderRadius: "10px",
    color: theme.colors.lightBlue,
    fontFamily: theme.fonts.monoserrat,
    "&:hover": {
      backgroundColor: "#FFFFFF10",
    },
  },
}));

/**
 *
 * @description ChangeRouteButton is a button - and styled label component that takes a route as a prop and changes routes when pressed.
 *
 */

const ChangeRouteButton = ({ route, buttonText, sideText }) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
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

export default ChangeRouteButton;
