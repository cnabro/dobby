export enum ActionType {
  GET_LIST = "post/GET_LIST",
  SET_LIST = "post/SET_LIST"
}

const initialState = {
  list: [],
};

export function getList() {
  return {
    type: ActionType.GET_LIST,
  };
}

const postReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionType.SET_LIST:
      return {
        list: [
          ...action.list,
        ],
      };
    default:
      return state;
  }
};

export default postReducer;
