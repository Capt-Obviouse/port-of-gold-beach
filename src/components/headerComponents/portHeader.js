import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Portheader extends Component {
  render() {
    return (
      <ul className="subNav-Mobile">
        <li>
          <Link to="/Port/Services">Services</Link>
        </li>
        <li>
          <Link to="/Port/Storage">Storage</Link>
        </li>
        <li>
          <Link to="/Port/Commercial_Facilities">Commerical Facilities</Link>
        </li>
        <li>
          <Link to="/Port/Mission">Mission</Link>
        </li>
      </ul>
    );
  }
}

export default Portheader;
