import { addConversationId } from "./utils/reducerFunctions";

const ADD_CONVERSATION_ID_TO_TABLE = "ADD_CONVERSATION_ID_TO_TABLE";

export const conversationViewed = (id) => {
  return {
    type: ADD_CONVERSATION_ID_TO_TABLE,
    payload: { id },
  };
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CONVERSATION_ID_TO_TABLE: {
      return addConversationId(state, action.payload.id);
    }
    default:
      return state;
  }
};

export default reducer;
