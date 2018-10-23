import React from "react";
import { Switch, Route } from "react-router-dom";

import Movies from "./Movies";
import AddMovie from "./AddMovie";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Movies} />
      <Route path="/add" component={AddMovie} />
    </Switch>
  </main>
);

export default Main;
