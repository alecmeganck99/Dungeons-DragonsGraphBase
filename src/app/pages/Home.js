import React from "react";
import DocumentTitle from "react-document-title";

import logo from '../images/logo.svg';
import "../css/App.css";
import AddRoom from "../components/AddRoom";
import AddMonster from "../components/AddMonster";

function Home() {
  return (
    <DocumentTitle title="Dungeons & Dragons | Home">
      <div className="section">
        <div className="section__header section__part--blue">
          <div className="homepage">
            <img src={logo} className="homepage__logo" alt="logo" />
            <h1 className="homepage__title">DUNGEONS and DRAGONS <br></br> AMPBASE</h1>
          </div>
        </div>
        <div className="section__rooms">
          <AddRoom />
        </div>
        <div className="section__monsters">
          <AddMonster />
        </div>
      </div>
    </DocumentTitle >
  );
}

export default Home;
