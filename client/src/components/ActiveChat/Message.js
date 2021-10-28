import { Avatar, Box, Typography } from "@material-ui/core";

import Attachments from "./Attachments";
import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: ({ isOtherUser }) => (isOtherUser ? "flex" : "initial"),
    marginTop: theme.spacing(1),
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "100%",
    alignItems: ({ isOtherUser }) => (isOtherUser ? "flex-start" : "flex-end"),
  },
  avatar: {
    marginRight: theme.spacing(0.5),
  },
  date: {
    fontSize: 11,
    color: theme.palette.lightGrayishBlue.main,
    fontWeight: "bold",
    order: ({ date }) => date,
  },
  text: {
    fontSize: theme.typography.fontSize,
    color: ({ isOtherUser }) =>
      isOtherUser ? theme.palette.white.main : theme.palette.nepal.main,
    letterSpacing: -0.2,
    padding: `8px 12px`,
    fontWeight: "bold",
  },
  userBubble: {
    background: theme.palette.dimGrey.main,
    borderRadius: "10px 10px 0 10px",
  },
  otherUserBubble: {
    backgroundImage: theme.palette.darkBlueGradient.main,
    borderRadius: "0 10px 10px 10px",
  },
  bubble: {
    order: ({ bubble }) => bubble,
  },
}));

const Message = ({
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
        {text ? (
          <Box
            className={`${
              isOtherUser ? classes.otherUserBubble : classes.userBubble
            } ${classes.bubble}`}
          >
            <Typography className={classes.text}>{text}</Typography>
          </Box>
        ) : (
          <></>
        )}
        {attachments ? (
          <Attachments
            order={messageOrder.attachments}
            attachments={attachments}
            isOtherUser={isOtherUser}
          />
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

Message.propTypes = {
  attachments: PropTypes.arrayOf(PropTypes.string),
  isOtherUser: PropTypes.bool.isRequired,
  messageOrder: PropTypes.shape({
    attachments: PropTypes.number.isRequired,
    bubble: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
  }),
  otherUser: PropTypes.shape({
    photoUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
  text: PropTypes.string.isRequired,
  time: PropTypes.any.isRequired,
};

export default Message;
