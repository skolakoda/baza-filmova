import React from "react";
import { Switch, Route } from "react-router-dom";

import Movies from "./Movies";
import AddMovie from "./AddMovie";
import SingleMovie from "./SingleMovie";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Movies} />
      <Route path="/add" component={AddMovie} />
      <Route path="/singlemovie/:naziv" component={SingleMovie} />
    </Switch>
  </main>
);

export default Main;
