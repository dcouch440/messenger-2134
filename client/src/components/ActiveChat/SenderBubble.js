import { Box, Typography } from "@material-ui/core";

import Attachments from "./Attachments";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
    order: ({ date }) => date,
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
    order: ({ bubble }) => bubble,
  },
}));

const SenderBubble = (props) => {
  const { time, text, attachments, messageOrder } = props;
  const classes = useStyles(messageOrder);
  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
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
  );
};

export default SenderBubble;
