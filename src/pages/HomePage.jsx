import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container">
      <Link to="/email">
        <button>Sign Up</button>
      </Link>
    </div>
  );
}
