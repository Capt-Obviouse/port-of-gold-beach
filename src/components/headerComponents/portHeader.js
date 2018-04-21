import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Portheader extends Component {
  render() {
    return (
      <div id="secondNav">
        <ul className="subNav">
          <li>
            <Link to="/Port/Services">Services</Link>
          </li>
          <li>
            <Link to="/Port/Rental_Cars">Rental Cars</Link>
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
      </div>
    );
  }
}

export default Portheader;
