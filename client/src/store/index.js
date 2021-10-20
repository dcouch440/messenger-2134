import { applyMiddleware, combineReducers, createStore } from "redux";

import activeConversation from "./activeConversation";
import conversations from "./conversations";
import loggerMiddleware from "redux-logger";
import previouslyViewed from "./previouslyViewed";
import thunkMiddleware from "redux-thunk";
import user from "./user";

const CLEAR_ON_LOGOUT = "CLEAR_ON_LOGOUT";

export const clearOnLogout = () => {
  return {
    type: CLEAR_ON_LOGOUT,
  };
};

const appReducer = combineReducers({
  user,
  conversations,
  activeConversation,
  previouslyViewed,
});
const rootReducer = (state, action) => {
  if (action.type === CLEAR_ON_LOGOUT) {
    // set state to initial state
    state = undefined;
  }
  return appReducer(state, action);
};

export default createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
