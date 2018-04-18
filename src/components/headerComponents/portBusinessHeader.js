import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Portbusinessheader extends Component {
  render() {
    return (
      <div id="secondNav">
        <ul className="subNav">
          <li>
            <Link to="/Port_Business/Ordinance">Ordinance</Link>
          </li>
          <li>
            <Link to="/Port_Business/Budget">Budget</Link>
          </li>
          <li>
            <Link to="/Port_Business/Meetings">Meetings</Link>
          </li>
          <li>
            <Link to="/Port_Business/Resolutions">Resolutions</Link>
          </li>
          <li>
            <Link to="/Port_Business/Strategic_Plan">Strategic Plan</Link>
          </li>
          <li>
            <Link to="/Port_Business/Airport_Plan">Airport Plan</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Portbusinessheader;
