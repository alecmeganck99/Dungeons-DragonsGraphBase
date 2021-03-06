import React from "react";
import DocumentTitle from "react-document-title";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

import logo from '../images/logo.svg';
import "../css/App.css";

function Home() {
  return (
    <DocumentTitle title="Dungeons & Dragons | Home">
      <div className="section">
        <div className="section__header section__part--blue">
          <div className="homepage">
            <img src={logo} className="homepage__logo" alt="logo" />
            <Link to="/">
              <h1 className="homepage__title">DUNGEONS and DRAGONS <br></br> AMPBASE</h1>
            </Link>
          </div>
        </div>
        <Link className="homepage--links" to="/rooms">
          <p>Rooms</p>
        </Link>
        <Link className="homepage--links--blue" to="/monsters">
          <p>Monsters</p>
        </Link>
        <Link className="homepage--links" to="/treasures">
          <p>Treasures</p>
        </Link>
      </div>
    </DocumentTitle >
  );
}

export default Home;
