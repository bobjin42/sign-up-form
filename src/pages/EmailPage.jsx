import React from "react";
import { Link } from "react-router-dom";

export default function EmailPage() {
  return (
    <div className="container">
      <form className="form">
        <label htmlFor="sign-up-email">
          Email
          <input id="sign-up-email" type="email" name="email" />
        </label>
        <label htmlFor="sign-up-password">
          Password
          <input id="sign-up-password" type="password" name="password" />
        </label>
        <Link to="/name">
          <button>Next</button>
        </Link>
      </form>
    </div>
  );
}
