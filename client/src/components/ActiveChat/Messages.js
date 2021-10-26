import { OtherUserBubble, SenderBubble } from "../ActiveChat";

import { Box } from "@material-ui/core";
import React from "react";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

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
        const time = moment(message.createdAt).format("h:mm");
        const { text, attachments } = message;
        const messageOrder = orderMessage({ text, attachments });
        return (
          <React.Fragment key={message.id}>
            {message.senderId === userId ? (
              <SenderBubble
                attachments={attachments}
                text={text}
                time={time}
                messageOrder={messageOrder}
              />
            ) : (
              <OtherUserBubble
                attachments={attachments}
                text={text}
                time={time}
                otherUser={otherUser}
              />
            )}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default Messages;
