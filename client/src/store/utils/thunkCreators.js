import {
  addConversation,
  gotConversations,
  setNewMessage,
  setSearchedUsers,
} from "../conversations";
import { gotUser, setFetchingStatus } from "../user";

import axios from "axios";
import socket from "../../socket";

axios.interceptors.request.use(async function (config) {
  const token = await localStorage.getItem("messenger-token");
  config.headers["x-access-token"] = token;

  return config;
});

// USER THUNK CREATORS

export const fetchUser = () => async (dispatch) => {
  dispatch(setFetchingStatus(true));
  try {
    const { data } = await axios.get("/auth/user");
    dispatch(gotUser(data));
    if (data.id) {
      socket.emit("go-online", data.id);
    }
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(setFetchingStatus(false));
  }
};

export const register = (credentials) => async (dispatch) => {
  try {
    const { data } = await axios.post("/auth/register", credentials);
    await localStorage.setItem("messenger-token", data.token);
    dispatch(gotUser(data));
    socket.emit("go-online", data.id);
  } catch (error) {
    console.error(error);
    dispatch(gotUser({ error: error.response.data.error || "Server Error" }));
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    const { data } = await axios.post("/auth/login", credentials);
    await localStorage.setItem("messenger-token", data.token);
    dispatch(gotUser(data));
    socket.emit("go-online", data.id);
  } catch (error) {
    console.error(error);
    dispatch(gotUser({ error: error.response.data.error || "Server Error" }));
  }
};

export const logout = (id) => async (dispatch) => {
  try {
    await axios.delete("/auth/logout");
    await localStorage.removeItem("messenger-token");
    dispatch(gotUser({}));
    socket.emit("logout", id);
  } catch (error) {
    console.error(error);
  }
};

// CONVERSATIONS THUNK CREATORS

export const fetchConversations = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/conversations");
    dispatch(gotConversations(data));
  } catch (error) {
    console.error(error);
  }
};

const saveMessage = async (body) => {
  const { data } = await axios.post("/api/messages", body);
  return data;
};

const sendMessage = (data, body) => {
  socket.emit("new-message", {
    message: data.message,
    recipientId: body.recipientId,
    sender: data.sender,
    attachments: data.attachments,
  });
};

// message format to send: {recipientId, text, conversationId}
// conversationId will be set to null if its a brand new conversation
export const postMessage = (body) => async (dispatch) => {
  try {
    const { attachments, ...messageData } = body;

    // if any attachments are in the present, send them to cloudinary and return the url.
    const imageUrls = await Promise.all(
      attachments.map(async (attachment) => {
        try {
          const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
          const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
          const formData = new FormData();

          formData.append("file", attachment);
          formData.append(
            "upload_preset",
            process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
          );

          const response = await fetch(url, {
            method: "POST",
            body: formData,
          });
          const { secure_url } = await response.json();

          return secure_url;
        } catch (error) {
          console.error(error);
        }
      })
    );

    const newBody = {
      ...messageData,
      attachments: imageUrls,
    };

    const data = await saveMessage(newBody);

    if (!messageData.conversationId) {
      dispatch(addConversation(messageData.recipientId, data.message));
    } else {
      dispatch(setNewMessage(data.message));
    }

    sendMessage(data, newBody);
  } catch (error) {
    console.error(error);
  }
};

export const searchUsers = (searchTerm) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/users/${searchTerm}`);
    dispatch(setSearchedUsers(data));
  } catch (error) {
    console.error(error);
  }
};
