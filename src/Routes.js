import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import productes from "./Components/productes/productes";

import Home from "./Components/home/Home";
import history from "./Components/header/history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/Components/home/Home" exact component={Home} />
          <Route path="/Components/productes/productes" component={productes} />
        </Switch>
      </Router>
    );
  }
}
