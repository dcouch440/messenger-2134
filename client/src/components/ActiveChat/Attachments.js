import { Box, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    order: ({ order }) => order,
    justifyContent: ({ isOtherUser }) =>
      isOtherUser ? "flex-start" : "flex-end",
  },
  manyImages: {
    height: "auto",
    maxHeight: 100,
    maxWidth: 100,
    marginTop: theme.spacing(0.5),
  },
  otherUser: {
    marginRight: theme.spacing(0.5),
    borderRadius: "7px 7px 7px 0",
  },
  user: {
    marginLeft: theme.spacing(0.5),
    borderRadius: "7px 7px 0 7px",
  },
  image: {
    height: 140,
    maxHeight: 150,
    maxWidth: 150,
    objectFit: "cover",
  },
}));

const Attachments = ({
  attachments,
  order,
  isOtherUser,
  hasManyAttachments,
}) => {
  const classes = useStyles({ order, isOtherUser });

  const attachmentsCB = (url) => {
    return (
      <img
        className={`
        ${isOtherUser ? classes.otherUser : classes.user}
        ${hasManyAttachments ? classes.manyImages : classes.image}
        `}
        src={url}
        key={url}
      />
    );
  };

  return <Box className={classes.root}>{attachments?.map(attachmentsCB)}</Box>;
};

Attachments.propTypes = {
  attachments: PropTypes.arrayOf(PropTypes.string).isRequired,
  order: PropTypes.number.isRequired,
};

export default Attachments;
