import { ActionTypes } from "./actionTypes";

export const setEmail = email => ({
  type: ActionTypes.SET_EMAIL,
  payload: email
});

export const setPassword = password => ({
  type: ActionTypes.SET_PASSWORD,
  payload: password
});

export const setName = name => ({
  type: ActionTypes.SET_NAME,
  payload: name
});

export const setAge = age => ({
  type: ActionTypes.SET_AGE,
  payload: age
});
