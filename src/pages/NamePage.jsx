import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName, setAge } from "../redux/actions";
import { withRouter } from "react-router-dom";

function NamePage(props) {
  //redux
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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setName(nameValue));
    dispatch(setAge(ageValue));
    props.history.push("/confirmation");
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
