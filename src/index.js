import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import GamesHeader from './GamesHeader.js';
import Games from './Games.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

class BamaSchedule extends Component {
  render() {
    return (
      <div className="schedule_body">
        <Header />
        <GamesHeader />
        <Games />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <BamaSchedule />,
  document.getElementById('root')
);
