import { Message } from ".";
import PropTypes from "prop-types";
import React from "react";
import moment from "moment";

const Messages = ({ messages, userId, otherUser }) => {
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

  return messages.map((message) => {
    const { text, attachments } = message;
    const isOtherUser = message.senderId !== userId;
    const time = moment(message.createdAt).format("h:mm");
    const messageOrder = orderMessage({ text, attachments });

    return (
      <Message
        key={message.id}
        attachments={attachments}
        text={text}
        time={time}
        messageOrder={messageOrder}
        otherUser={otherUser}
        isOtherUser={isOtherUser}
      />
    );
  });
};

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  otherUser: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
};

export default Messages;
