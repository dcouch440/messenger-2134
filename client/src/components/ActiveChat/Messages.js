import { Box } from "@material-ui/core";
import React from "react";
import { SenderBubble } from "../ActiveChat";
import moment from "moment";

const Messages = (props) => {
  const { messages, userId, otherUser } = props;
  const orderMessage = ({ text, attachments }) => {
    // if text is present and there is more than one image
    if (Boolean(text) && attachments?.length > 1) {
      return {
        bubble: 1,
        attachments: 2,
        date: 3,
      };
    }
    // else bubble always come last.
    return {
      date: 1,
      attachments: 2,
      bubble: 3,
    };
  };

  return (
    <Box>
      {messages.map((message) => {
        const { text, attachments } = message;
        const isOtherUser = message.senderId !== userId;
        const time = moment(message.createdAt).format("h:mm");
        const messageOrder = orderMessage({ text, attachments });

        return (
          <React.Fragment key={message.id}>
            <SenderBubble
              attachments={attachments}
              text={text}
              time={time}
              messageOrder={messageOrder}
              otherUser={otherUser}
              isOtherUser={isOtherUser}
            />
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default Messages;
