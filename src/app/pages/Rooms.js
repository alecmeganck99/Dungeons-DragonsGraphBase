import React from "react";
import DocumentTitle from "react-document-title";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

import logo from '../images/logo.svg';
import "../css/App.css";
import AddRoom from "../components/AddRoom";

function Rooms() {
  return (
    <DocumentTitle title="Dungeons & Dragons | Rooms">
      <div className="section">
        <div className="section__header section__part--blue">
          <div className="homepage">
            <img src={logo} className="homepage__logo" alt="logo" />
            <Link to="/">
              <h1 className="homepage__title">DUNGEONS and DRAGONS <br></br> AMPBASE</h1>
            </Link>
          </div>
        </div>
        <div className="section__rooms">
          <AddRoom />
        </div>
      </div>
    </DocumentTitle >
  );
}

export default Rooms;
