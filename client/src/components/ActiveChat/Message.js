import { Avatar, Box, Typography } from "@material-ui/core";

import Attachments from "./Attachments";
import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    display: ({ isOtherUser }) => (isOtherUser ? "flex" : "initial"),
    marginBottom: theme.spacing(1),
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
    color: theme.palette.lightGrayishBlue.main,
    fontWeight: "bold",
    // if date comes last add space.
    marginTop: ({ date }) => (date === 3 ? theme.spacing(0.5) : 0),
    marginBottom: ({ date, hasManyAttachments }) =>
      date === 1 && hasManyAttachments
        ? 0 /* if date comes first and many attachments are present, remove margin. Images need margin to stack. */
        : /* if date comes first but many attachments are not present add margin, image top contains no margin */
        date === 1
        ? theme.spacing(0.5) /* add spacing */
        : 0 /* unless bottom */,
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

/**
 * @description Message component displays user messages based on their contents.
 * if there is an image and text the order is time, image text.
 * if there are images and text the order is text, images, date.
 * if there is only an image the order is date, image.
 * if there is only text the order is date, text.
 */

const Message = ({ message, otherUser, messageOrder, isOtherUser }) => {
  const { text, attachments, createdAt } = message;
  const { username, photoUrl } = otherUser;
  const hasManyAttachments = Boolean(attachments?.length > 1);
  const classes = useStyles({
    ...messageOrder,
    isOtherUser,
    hasManyAttachments,
    hasAttachments: Boolean(attachments?.length),
  });
  const time = moment(createdAt).format("h:mm");

  return (
    <Box className={classes.root}>
      {isOtherUser ? (
        <Box>
          <Avatar alt={username} src={photoUrl} className={classes.avatar} />
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
            hasManyAttachments={hasManyAttachments}
          />
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

Message.propTypes = {
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
  message: PropTypes.shape({
    text: PropTypes.string,
    attachments: PropTypes.array,
    createdAt: PropTypes.string.isRequired,
  }),
};

export default Message;
