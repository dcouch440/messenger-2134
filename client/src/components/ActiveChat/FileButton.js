import { Fab, makeStyles } from "@material-ui/core";

import { FileCopyOutlined } from "@material-ui/icons";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(() => ({
  fab: {
    outline: "none",
    boxShadow: "none",
    background: "none",
    "&:hover": {
      background: "none",
    },
  },
  icon: {
    width: "60%",
    height: "60%",
  },
  input: {
    display: "none",
  },
}));

/**
 * @description FileButton component displays a hidden input that captures input changes with a Icon for display.
 */

const FileButton = ({ onChange, className }) => {
  const classes = useStyles();

  return (
    <label htmlFor="upload-photo" className={className}>
      <input
        className={classes.input}
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
        <FileCopyOutlined color="secondary" />
      </Fab>
    </label>
  );
};

FileButton.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FileButton;
