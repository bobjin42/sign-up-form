import { ActionTypes } from "./actionTypes";

const INITIAL_STATE = {
  email: "",
  password: "",
  name: "",
  age: ""
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case ActionTypes.SET_PASSWORD:
      return {
        ...state,
        password: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
