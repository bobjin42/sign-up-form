import React from "react";
import { useSelector } from "react-redux";

export default function ConfirmationPage() {
  //redux
  const currentUserFromStore = useSelector(state => state.currentUser);

  return (
    <section className="container">
      <h1>Thank you {currentUserFromStore} for signing up!</h1>
    </section>
  );
}
