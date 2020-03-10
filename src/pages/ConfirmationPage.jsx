import React from "react";
import { useSelector } from "react-redux";

export default function ConfirmationPage() {
  //redux
  const currentUserFromStore = useSelector(state => state.currentUser);

  return (
    <div className="container">
      Thank you {currentUserFromStore} for signing up!
    </div>
  );
}
