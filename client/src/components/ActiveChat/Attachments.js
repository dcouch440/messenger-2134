import React from "react";

const Attachments = ({ attachments }) => {
  const attachmentCB = (attachment) => (
    <img src={attachment} key={attachment} />
  );

  return attachments?.map(attachmentCB);
};

export default Attachments;
