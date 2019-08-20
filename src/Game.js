import React, { Component } from "react";

export default class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="container">
          <div className="row">
            <div className="col-sm">{this.props.date}</div>
            <div className="col-sm">{this.props.team}</div>
            <div className="col-sm">{this.props.time}</div>
          </div>
        </div>
      </div>
    );
  }
}
