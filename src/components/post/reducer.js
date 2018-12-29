import { SET_LIST } from "./actionType";

const initialState = {
  list: [],
};

const post = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      return { list: [...action.list] };
    default:
      return state;
  }
};

export default post;
