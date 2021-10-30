import { Box } from "@material-ui/core";
import { Message } from ".";
import PropTypes from "prop-types";
import React from "react";

/**
 * @description Messages component maps through an array of messages and finds the order for each.
 */

const Messages = ({ messages, userId, otherUser }) => {
  // CSS order of messages based on their content.
  const orderMessage = ({ text, attachments }) => {
    const hasTextAndManyImages = Boolean(text) && attachments?.length > 1;
    if (hasTextAndManyImages) {
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
        const messageOrder = orderMessage({ text, attachments });
        const isOtherUser = message.senderId !== userId;

        return (
          <Message
            key={message.id}
            message={message}
            messageOrder={messageOrder}
            otherUser={otherUser}
            isOtherUser={isOtherUser}
          />
        );
      })}
    </Box>
  );
};

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  otherUser: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
};

export default Messages;
