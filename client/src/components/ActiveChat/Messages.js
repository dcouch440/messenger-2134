import { OtherUserBubble, SenderBubble } from "../ActiveChat";

import { Box } from "@material-ui/core";
import React from "react";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  // messages are stored in a reverse order.
  // reversing messages to display in the correct order.
  const reversedMessages = [...messages].reverse();

  return (
    <Box>
      {reversedMessages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
