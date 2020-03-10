import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName, setAge, setErrorMessage } from "../redux/actions";
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
        props.history.push("/confirmation");
      })
      .catch(err => {
        //In real world we should dispatch an error message
        // dispatch(setErrorMessage("Sign Up Failed"));

        //In real world we should put this in the .then block
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
        <label htmlFor="sign-up-name">
          Name
          <input
            id="sign-up-name"
            type="text"
            name="name"
            value={nameValue}
            onChange={handleNameChange}
          />
        </label>
        <label htmlFor="sign-up-age">
          Age
          <input
            id="sign-up-age"
            type="number"
            name="age"
            min="0"
            value={ageValue}
            onChange={handleAgeChange}
          />
        </label>
        <button onClick={handleBack}>Back</button>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default withRouter(NamePage);
