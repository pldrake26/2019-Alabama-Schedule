import React, {Component} from 'react';

export default class Gamesheader extends Component {
  render() {
    return (
      <div className="container games-header">
        <div className="row">
          <div className="col-sm">
            DATE
          </div>
          <div className="col-sm">
            TEAM
          </div>
          <div className="col-sm">
            TIME
          </div>
        </div>
      </div>
    );
  }
}
