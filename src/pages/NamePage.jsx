import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setName,
  setAge,
  setErrorMessage,
  clearForm,
  setCurrentUser
} from "../redux/actions";
import { withRouter } from "react-router-dom";

function NamePage(props) {
  //redux
  const emailFromStore = useSelector(state => state.email);
  const passwordFromStore = useSelector(state => state.password);
  const nameFromStore = useSelector(state => state.name);
  const ageFromStore = useSelector(state => state.age);
  const dispatch = useDispatch();

  //state
  const [nameValue, setNameValue] = useState(nameFromStore);
  const [ageValue, setAgeValue] = useState(ageFromStore);

  const handleNameChange = e => {
    setNameValue(e.target.value);
  };

  const handleAgeChange = e => {
    setAgeValue(e.target.value);
  };

  const handleBack = e => {
    e.preventDefault();
    dispatch(setName(nameValue));
    dispatch(setAge(ageValue));
    props.history.push("/email");
  };

  const signUpCall = () => {
    fetch("https://www1.nyc.gov/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        emailFromStore,
        passwordFromStore,
        nameFromStore,
        ageFromStore
      })
    })
      .then(r => r.json())
      .then(data => {
        //In real world, we will get a JWT token and automatically have the user signed in, clear the form input fields, and redirect to the confirmation page
        dispatch(setCurrentUser(nameValue));
        dispatch(clearForm());
        props.history.push("/confirmation");
      })
      .catch(err => {
        //In real world, the error message should be aligned with the backend response message
        dispatch(setErrorMessage("Sign Up Failed"));

        //In real world we should only put the code below in the .then block
        dispatch(setCurrentUser(nameValue));
        dispatch(clearForm());
        props.history.push("/confirmation");
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setName(nameValue));
    dispatch(setAge(ageValue));
    signUpCall();
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-input-wrapper">
          <div className="form-input">
            <label htmlFor="sign-up-name">Name</label>
            <input
              id="sign-up-name"
              type="text"
              name="name"
              value={nameValue}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="sign-up-age">Age</label>
            <input
              id="sign-up-age"
              type="number"
              name="age"
              min="0"
              value={ageValue}
              onChange={handleAgeChange}
            />
          </div>
        </div>
        <div className="form-button-wrapper">
          <button className="button button-small" onClick={handleBack}>
            Back
          </button>
          <button className="button button-small">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(NamePage);
