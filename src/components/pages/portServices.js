import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Portservices extends Component {
  render() {
    return (
      <div id="wrapper">
        <section id="contentstart">
          <article>
            <h2>Services</h2>
            <p>The Port of Gold Beach Staff is available to assist you when needed. Services and equipment include:</p>
            <ul>
              <li>
                <Link to="/Port/Storage">Storage</Link>
              </li>
              <li>
                <Link to="/Port/Rental_Cars">Rental Cars</Link>
              </li>
              <li> Marine Fuel</li>
              <li> Forklift</li>
            </ul>
            <p>
              {' '}
              <Link to="/Contact">Contact</Link> the Port Office to arrange for services and/or equipment.
            </p>
          </article>
        </section>
      </div>
    );
  }
}

export default Portservices;
