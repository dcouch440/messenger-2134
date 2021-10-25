import { Fab, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";
import copyIcon from "../../assets/svg/copy icon.svg";

// #C9D4E2
const useStyles = makeStyles(() => ({
  fab: {
    color: "transparent",
    backgroundColor: "transparent",
    outline: "none",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#fffff20",
    },
  },
  icon: {
    width: "60%",
    height: "60%",
  },
}));

const FileButton = ({ onChange, className }) => {
  const classes = useStyles();

  return (
    <label htmlFor="upload-photo" className={className}>
      <input
        style={{ display: "none" }}
        id="upload-photo"
        name="upload-photo"
        type="file"
        onChange={onChange}
      />
      <Fab
        className={classes.fab}
        size="small"
        component="span"
        aria-label="add"
      >
        <img className={classes.icon} src={copyIcon} alt="a copy icon" />
      </Fab>
    </label>
  );
};

FileButton.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FileButton;
