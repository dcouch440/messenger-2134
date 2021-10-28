import { Typography, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => {
  const lgScreen = theme.breakpoints.up("lg");
  const xsScreen = theme.breakpoints.down("sm");

  return {
    root: {
      marginBottom: theme.spacing(3),
      [lgScreen]: {
        fontSize: theme.typography.fontSizeXL,
      },
      [xsScreen]: {
        fontSize: theme.typography.fontSize,
        margin: 0,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(2),
      },
    },
  };
});

/**
 * @description Header component displays an Material-UI Typography h2 element that increases in size for large screens.
 */

const Header = ({ text, className }) => {
  const classes = useStyles();
  return (
    <Typography className={`${classes.root} ${className ?? ""}`} variant="h2">
      {text}
    </Typography>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Header;
