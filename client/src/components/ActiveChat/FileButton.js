import { Fab, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";

// #C9D4E2
const useStyles = makeStyles(() => ({
  fab: {
    outline: "none",
    boxShadow: "none",
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
        multiple
      />
      <Fab
        className={classes.fab}
        size="small"
        component="span"
        aria-label="add"
      >
        <div />
      </Fab>
    </label>
  );
};

FileButton.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FileButton;
