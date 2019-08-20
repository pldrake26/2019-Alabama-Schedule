import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import GamesHeader from "./GamesHeader.js";
import Game from "./Game.js";
import Footer from "./Footer.js";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

class BamaSchedule extends Component {
  render() {
    return (
      <div className="schedule_body">
        <Header />
        <GamesHeader />
        <Game date="August 31" team="Duke" time="2:30pm CST - ABC" />
        <Game date="September 7th" team="New Mexico State" time="3pm CST - ABC" />
        <Game date="September 14th" team="at South Carolina" time="2:30pm CST - CBS" />
        <Game date="September 21st" team="Southern Mississippi" time="TBA" />
        <Game date="September 28th" team="Ole Miss" time="TBA" />
        <Game date="October 12th" team="at Texas A&M" time="TBA" />
        <Game date="October 19th" team="Tennessee" time="TBA" />
        <Game date="October 26th" team="Arkansas" time="TBA" />
        <Game date="November 9th" team="LSU" time="TBA" />
        <Game date="November 16th" team="at Mississippi State" time="TBA" />
        <Game date="November 23rd" team="West Carolina" time="TBA" />
        <Game date="November 30th" team="at Auburn" time="TBA" />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<BamaSchedule />, document.getElementById("root"));
