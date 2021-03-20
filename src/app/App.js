import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";


import Home from "./pages/Home";

import "./css/App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
