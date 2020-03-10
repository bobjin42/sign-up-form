import { ActionTypes } from "./actionTypes";

const INITIAL_STATE = {
  email: "",
  password: "",
  name: "",
  age: "",
  errorMessage: "",
  currentUser: ""
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
    case ActionTypes.SET_NAME:
      return {
        ...state,
        name: action.payload
      };
    case ActionTypes.SET_AGE:
      return {
        ...state,
        age: action.payload
      };
    case ActionTypes.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case ActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case ActionTypes.CLEAR_FORM:
      return {
        ...state,
        email: "",
        password: "",
        name: "",
        age: ""
      };
    default:
      return state;
  }
};

export default reducer;
