import { Box, makeStyles } from "@material-ui/core";

import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const Attachments = ({ attachments }) => {
  const classes = useStyles();

  const attachmentCB = (attachment) => (
    <img src={attachment} style={{ width: "120px" }} key={attachment} />
  );

  return <Box className={classes.root}>{attachments?.map(attachmentCB)}</Box>;
};

export default Attachments;
