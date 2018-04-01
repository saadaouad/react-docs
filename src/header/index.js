import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import logo from '../logo.svg';
import './styles.css';

const HomeRoute = () => (
  <Router>
  <div>
    <Link to="/">
    <img src={logo} className="App-logo" alt="logo" />
    </Link>
  </div>
</Router>
)

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header pv3">
           <HomeRoute />
          <h2>Salam alaykum!</h2>
        </div>
      </div>
    );
  }
}

export default Header;
