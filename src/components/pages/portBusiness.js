import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Portbusiness extends Component {
  render() {
    return (
      <div id="wrapper">
        <section id="contentstart">
          <article>
            <h2>Port Business</h2>
            <p>
              The Port of Gold Beach is entrusted with certain public assets, taxes and authorities to be used for the
              good of the community.
            </p>
          </article>
          <article>
            <h2>Information</h2>
            <ul>
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
          </article>
        </section>
      </div>
    );
  }
}

export default Portbusiness;
