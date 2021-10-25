import { OtherUserBubble, SenderBubble } from "../ActiveChat";

import { Box } from "@material-ui/core";
import React from "react";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");
        const { text, attachments } = message;
        return (
          <>
            {message.senderId === userId ? (
              <SenderBubble
                key={message.id}
                attachments={attachments}
                text={text}
                time={time}
              />
            ) : (
              <OtherUserBubble
                key={message.id}
                attachments={attachments}
                text={text}
                time={time}
                otherUser={otherUser}
              />
            )}
          </>
        );
      })}
    </Box>
  );
};

export default Messages;
