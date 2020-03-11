import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="container">
      <Link to="/email">
        <button className="button button-large">Sign Up</button>
      </Link>
    </section>
  );
}
