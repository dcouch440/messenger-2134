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

// message format to send to postgres: {recipientId, text, conversationId, sender, attachments}
// conversationId will be set to null if its a brand new conversation
export const postMessage = (body) => async (dispatch) => {
  try {
    const { attachments, ...message } = body;

    // if any attachments are present, send them to cloudinary and return the url.
    const imageRequests = attachments.map(async (attachment) => {
      try {
        // cloudinary will not accept with x-access-token present.
        const { data } = await axios({
          method: "POST",
          url: "https://api.cloudinary.com/v1_1/dyc2vfni0/image/upload",
          transformRequest: [
            (data, headers) => {
              delete headers["x-access-token"];
              return data;
            },
          ],
          data: attachment,
        });

        return data.secure_url;
      } catch (error) {
        console.error(error);
      }
    });

    // removing non url's values to prevent server store / reject of values we dont want. the successful images can still be sent.
    const filterBadRequests = (arr) =>
      arr.filter((url) => typeof url === "string");

    const imageUrls = await Promise.all(imageRequests).then(filterBadRequests);

    // exit if nothing was successful.
    if (!message.text && !imageUrls.length) {
      throw new Error("No content to send, all images failed to send.");
    }

    // attaching successful urls
    const bodyWithAttachments = {
      ...message,
      attachments: imageUrls,
    };

    // saving message to database.
    const messageResponse = await saveMessage(bodyWithAttachments);

    if (!message.conversationId) {
      dispatch(addConversation(message.recipientId, messageResponse.message));
    } else {
      dispatch(setNewMessage(messageResponse.message));
    }

    sendMessage(messageResponse, bodyWithAttachments);
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
