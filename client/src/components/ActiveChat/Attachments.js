import { Box, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    order: ({ order }) => order,
    marginBottom: theme.spacing(0.5),
  },
  image: {
    height: ({ isMany }) => (isMany ? "auto" : 140),
    maxHeight: ({ isMany }) => (isMany ? 80 : 140),
    maxWidth: ({ isMany }) => (isMany ? 100 : 140),
    marginLeft: ({ isMany }) => (isMany ? theme.spacing(0.5) : 0),
    borderRadius: "7px 7px 0 7px",
    objectFit: "cover",
  },
}));

const Attachments = ({ attachments, order }) => {
  const classes = useStyles({
    order,
    isMany: attachments.length > 1,
  });

  const attachmentCB = (attachment, key) => (
    <img className={classes.image} src={attachment} key={key} />
  );

  return <Box className={classes.root}>{attachments?.map(attachmentCB)}</Box>;
};

Attachments.propTypes = {
  attachments: PropTypes.arrayOf(PropTypes.string).isRequired,
  order: PropTypes.number.isRequired,
};

export default Attachments;
