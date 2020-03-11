import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setPassword } from "../redux/actions";
import { withRouter } from "react-router-dom";

function EmailPage(props) {
  //redux
  const emailFromStore = useSelector(state => state.email);
  const passwordFromStore = useSelector(state => state.password);
  const dispatch = useDispatch();

  //state
  const [emailValue, setEmailValue] = useState(emailFromStore);
  const [passwordValue, setPasswordValue] = useState(passwordFromStore);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = e => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = e => {
    setPasswordValue(e.target.value);
  };

  const handleShowPassword = e => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setEmail(emailValue));
    dispatch(setPassword(passwordValue));
    props.history.push("/name");
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-input-wrapper">
          <div className="form-input">
            <label htmlFor="sign-up-email">Email</label>
            <input
              id="sign-up-email"
              type="email"
              name="email"
              value={emailValue}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="sign-up-password">Password</label>
            <input
              id="sign-up-password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={passwordValue}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <div className="form-button-wrapper">
          <button className="button button-small" onClick={handleShowPassword}>
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
          <button className="button button-small">Next</button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(EmailPage);
