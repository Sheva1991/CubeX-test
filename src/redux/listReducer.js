import {
  ADD_LIST_ITEM,
  REMOVE_LIST_ITEM,
  UP_LIST_ITEM,
  DOWN_LIST_ITEM
} from "./types";

const initialState = {
  content: []
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST_ITEM:
      return { ...state, content: [...state.content, action.payload] };
    case REMOVE_LIST_ITEM:
      return {
        ...state,
        content: state.content.filter(post => {
          return post._id !== action.id;
        })
      };
    case UP_LIST_ITEM:
      let arr = [...state.content];
      arr.splice(action.index - 1, 0, arr.splice(action.index, 1)[0]);
      return {
        ...state,
        content: arr
      };
    case DOWN_LIST_ITEM:
      let arr1 = [...state.content];
      arr1.splice(action.index + 1, 0, arr1.splice(action.index, 1)[0]);
      return {
        ...state,
        content: arr1
      };
    default:
      return state;
  }
};
