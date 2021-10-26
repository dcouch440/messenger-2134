import { Box, FilledInput, FormControl } from "@material-ui/core";
import React, { useState } from "react";

import FileButton from "./FileButton";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { postMessage } from "../../store/utils/thunkCreators";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    position: "relative",
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
  },
  uploadButtonBox: {
    position: "absolute",
    height: 60,
    display: "flex",
    alignItems: "center",
    right: 10,
  },
  uploadButton: {
    height: 25,
  },
}));

const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const { postMessage, otherUser, conversationId, user } = props;
  const [attachments, setAttachments] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments,
    };

    await postMessage(reqBody);
    setText("");
    setAttachments([]);
  };

  const handleAddFile = ({ target }) => {
    const { files } = target;
    setAttachments((prev) => [...prev, ...files]);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          className={classes.input}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
        />
        <Box className={classes.uploadButtonBox}>
          <FileButton
            onChange={handleAddFile}
            className={classes.uploadButton}
          />
        </Box>
      </FormControl>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
