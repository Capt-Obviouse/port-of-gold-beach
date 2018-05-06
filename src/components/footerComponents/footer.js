import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  currentYear() {
    var d = new Date();
    if (d.getFullYear() === 2018) {
      return '2018';
    } else {
      return '2018 - ' + d.getFullYear();
    }
  }
  render() {
    return (
      <footer>
        <ul className="footer-links">
          <li>
            <Link to="/Sitemap">Sitemap</Link>
          </li>
          <li>
            <a href="https://bobbi.ivytech.edu/~jduncan128/project_plan/" target="_blank">
              Project Plan
            </a>
          </li>
          <li>
            <Link to="/Documentation">Documentation</Link>
          </li>
        </ul>
        <p>
          Copyright &#169; {this.currentYear()} Port of Gold Beach
        </p>
      </footer>
    );
  }
}

export default Footer;
