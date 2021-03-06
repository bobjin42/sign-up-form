import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import EmailPage from "../pages/EmailPage";
import NamePage from "../pages/NamePage";
import ConfirmationPage from "../pages/ConfirmationPage";

function App() {
  return (
    <HashRouter basename="/">
      <div className="background center">
        <Switch>
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/home" exact render={() => <HomePage />} />
          <Route path="/email" exact render={() => <EmailPage />} />
          <Route path="/name" exact render={() => <NamePage />} />
          <Route
            path="/confirmation"
            exact
            render={() => <ConfirmationPage />}
          />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
