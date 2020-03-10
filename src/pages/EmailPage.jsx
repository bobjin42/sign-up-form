import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function EmailPage({ email, password, setEmail, setPassword }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = e => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <form className="form">
        <label htmlFor="sign-up-email">
          Email
          <input
            id="sign-up-email"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="sign-up-password">
          Password
          <input
            id="sign-up-password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleShowPassword}>
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
        <Link to="/name">
          <button>Next</button>
        </Link>
      </form>
    </div>
  );
}
