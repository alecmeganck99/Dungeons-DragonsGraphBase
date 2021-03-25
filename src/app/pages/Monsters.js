import React from "react";
import DocumentTitle from "react-document-title";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

import logo from '../images/logo.svg';
import "../css/App.css";
import AddMonster from "../components/AddMonster";

function Monsters() {
  return (
    <DocumentTitle title="Dungeons & Dragons | Monsters">
      <div className="section">
        <div className="section__header section__part--blue">
          <div className="homepage">
            <img src={logo} className="homepage__logo" alt="logo" />
            <Link to="/">
              <h1 className="homepage__title">DUNGEONS and DRAGONS <br></br> AMPBASE</h1>
            </Link>
          </div>
        </div>
        <div className="section__monsters">
          <AddMonster />
        </div>
      </div>
    </DocumentTitle >
  );
}

export default Monsters;
