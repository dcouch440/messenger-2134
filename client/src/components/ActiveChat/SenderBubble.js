import { Avatar, Box, Typography } from "@material-ui/core";

import Attachments from "./Attachments";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: ({ isOtherUser }) => (isOtherUser ? "flex" : "initial"),
    marginTop: theme.spacing(2),
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: ({ isOtherUser }) => (isOtherUser ? "flex-start" : "flex-end"),
  },
  avatar: {
    marginRight: theme.spacing(0.5),
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: theme.spacing(0.5),
    order: ({ date }) => date,
  },
  text: {
    fontSize: theme.typography.fontSize,
    color: ({ isOtherUser }) => (isOtherUser ? "#FFFFFF" : "#91A3C0"),
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
  bubble: {
    backgroundImage: ({ isOtherUser }) =>
      isOtherUser && theme.palette.darkBlueGradient.main,
    background: theme.palette.dimGrey.main,
    marginBottom: theme.spacing(0.5),
    borderRadius: ({ isOtherUser }) =>
      isOtherUser ? "0 10px 10px 10px" : "10px 10px 0 10px",
    order: ({ bubble }) => bubble,
  },
}));

const SenderBubble = ({
  otherUser,
  time,
  text,
  attachments,
  messageOrder,
  isOtherUser,
}) => {
  const classes = useStyles({ ...messageOrder, isOtherUser });
  return (
    <Box className={classes.root}>
      {isOtherUser ? (
        <Box>
          <Avatar
            alt={otherUser.username}
            src={otherUser.photoUrl}
            className={classes.avatar}
          />
        </Box>
      ) : (
        <></>
      )}
      <Box className={classes.messageContainer}>
        <Typography className={classes.date}>
          {isOtherUser && otherUser.username} {time}
        </Typography>
        <Box className={classes.bubble}>
          <Typography className={classes.text}>{text}</Typography>
        </Box>
        {attachments ? (
          <Attachments
            order={messageOrder.attachments}
            attachments={attachments}
          />
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default SenderBubble;
