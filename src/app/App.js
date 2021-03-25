import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Monsters from "./pages/Monsters";
import Treasures from "./pages/Treasures";

import "./css/App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/monsters" exact component={Monsters} />
        <Route path="/treasures" exact component={Treasures} />
      </Switch>
    </Router>
  );
}

export default App;
