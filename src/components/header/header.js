import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="subNav">
            <ul>
              <li>Directions</li>
              <li>541-610-7994</li>
              <li>Search</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
          <p>Port of Gold Beach</p>
          <nav>
            <ul>
              <li>HOME</li>
              <li>PORT</li>
              <li>AIRPORT</li>
              <li>CONTACT</li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
