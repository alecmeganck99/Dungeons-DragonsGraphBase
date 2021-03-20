import React from "react";
import DocumentTitle from "react-document-title";

import logo from '../images/logo.svg';
import "../css/App.css";

function Home() {
  return (
    <DocumentTitle title="Dungeons & Dragons | Home">
      <div className="section">
        <div className="section__part section__part--blue">
          <div className="homepage">
            <img src={logo} className="homepage__logo" alt="logo" />
            <h1 className="homepage__title">DUNGEONS and DRAGONS <br></br> AMPBASE</h1>
          </div>
        </div>
        <div className="section__part">

        </div>
      </div>
    </DocumentTitle >
  );
}

export default Home;
