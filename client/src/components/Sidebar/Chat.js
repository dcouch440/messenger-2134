import { BadgeAvatar, ChatContent } from "../Sidebar";

import { Box } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { userViewedConversation } from "../../store/utils/thunkCreators";

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: 8,
    height: 80,
    boxShadow: "0 2px 10px 0 rgba(88,133,196,0.05)",
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "grab",
    },
  },
}));

const Chat = (props) => {
  const classes = useStyles();
  const { conversation } = props;
  const { otherUser } = conversation;

  const handleClick = (conversation) => {
    props.userViewedConversation({
      username: conversation.otherUser.username,
      id: conversation.id,
    });
  };

  return (
    <Box onClick={() => handleClick(conversation)} className={classes.root}>
      <BadgeAvatar
        photoUrl={otherUser.photoUrl}
        username={otherUser.username}
        online={otherUser.online}
        sidebar={true}
      />
      <ChatContent conversation={conversation} />
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    userViewedConversation: ({ username, id }) => {
      dispatch(userViewedConversation({ username, id }));
    },
  };
};

export default connect(null, mapDispatchToProps)(Chat);
