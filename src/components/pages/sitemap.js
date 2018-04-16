import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sitemap extends Component {
  render() {
    return (
      <div id="wrapper">
        <section id="contentstart">
          <h1>Sitemap</h1>
          <article>
            <ul className="sitemap">
              <li>
                <Link to="/" className="open">
                  Home
                </Link>
                <ul>
                  <li>
                    <Link to="/Port" className="open">
                      Port
                    </Link>
                    <ul>
                      <li>
                        <Link to="/Port/Services">Services</Link>
                      </li>
                      <li>
                        <Link to="/Port/Storage">Storage</Link>
                      </li>
                      <li>
                        <Link to="/Port/Commercial_Facilities">Commercial Facilities</Link>
                      </li>
                      <li>
                        <Link to="/Port/History">History</Link>
                      </li>
                      <li>
                        <Link to="/Port/Mission">Mission</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/Airport">Airport</Link>
                    <ul>
                      <li>
                        <a href="https://www.fly.faa.gov/flyfaa/usmap.jsp" rel="noopener noreferrer" target="_blank">
                          Real-time Flight Information
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/Huntley_Park/" className="open">
                      Huntley Park
                    </Link>
                  </li>
                  <li>
                    <Link to="/Port_Business">Port Business</Link>
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
                  </li>
                  <li>
                    <Link to="/Contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/Sitemap">Sitemap</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </article>
        </section>
      </div>
    );
  }
}

export default Sitemap;