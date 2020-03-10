import { ActionTypes } from "./actionTypes";

export const setEmail = email => ({
  type: ActionTypes.SET_EMAIL,
  payload: email
});

export const setPassword = password => ({
  type: ActionTypes.SET_PASSWORD,
  payload: password
});
