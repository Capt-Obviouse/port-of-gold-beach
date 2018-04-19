import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  mainNavToggle(navAction) {
    const NavID = document.getElementsByClassName('mainNavItem');

    switch (navAction) {
      case 'open':
        for (var i = 0; i < NavID.length; i++) {
          NavID[i].classList.add('active');
        }
        this.portNavToggle('close');
        break;
      case 'close':
        for (i = 0; i < NavID.length; i++) {
          NavID[i].classList.remove('active');
        }
        break;
      default:
        for (i = 0; i < NavID.length; i++) {
          NavID[i].classList.toggle('active');
        }
        break;
    }
  }
  menuToggle(action) {
    const NavID = document.getElementsByClassName('mainNavItem');
    const PortID = document.getElementsByClassName('subNav-Mobile port');
    const PortBusinessSubNavID = document.getElementsByClassName('subNav-Mobile port-business');

    if (
      NavID[0].classList.contains('active') ||
      PortID[0].classList.contains('active') ||
      PortBusinessSubNavID[0].classList.contains('active')
    ) {
      this.mainNavToggle('close');
      this.portNavToggle('close');
      this.portBusinessNavToggle('close');
    } else {
      this.mainNavToggle('open');
    }
  }
  portNavToggle(action) {
    const PortSubNavID = document.getElementsByClassName('subNav-Mobile port');
    switch (action) {
      case 'open':
        for (var i = 0; i < PortSubNavID.length; i++) {
          PortSubNavID[i].classList.add('active');
        }
        break;

      case 'close':
        for (i = 0; i < PortSubNavID.length; i++) {
          PortSubNavID[i].classList.remove('active');
        }
        break;
      default:
        for (i = 0; i < PortSubNavID.length; i++) {
          PortSubNavID[i].classList.toggle('active');
        }
        break;
    }
  }
  portBusinessNavToggle(action) {
    const PortBusinessSubNavID = document.getElementsByClassName('subNav-Mobile port-business');
    switch (action) {
      case 'open':
        for (var i = 0; i < PortBusinessSubNavID.length; i++) {
          PortBusinessSubNavID[i].classList.add('active');
        }
        break;

      case 'close':
        for (i = 0; i < PortBusinessSubNavID.length; i++) {
          PortBusinessSubNavID[i].classList.remove('active');
        }
        break;
      default:
        for (i = 0; i < PortBusinessSubNavID.length; i++) {
          PortBusinessSubNavID[i].classList.toggle('active');
        }
        break;
    }
  }
  NavToggle(classToggle) {
    switch (classToggle) {
      case 'port':
        this.portNavToggle();
        this.mainNavToggle();
        break;
      case 'port-business':
        this.portBusinessNavToggle();
        this.mainNavToggle();
        break;
      default: {
        this.mainNavToggle();
        break;
      }
    }
  }

  render() {
    return (
      <header>
        <p className="skipnavigation">
          <a href="#contentstart">Skip Navigation</a>
        </p>

        <p>
          <img src={require('../../Assets/img/port_logo_2.png')} alt="Port of Gold Beach Logo" />
        </p>
        <p>Port of Gold Beach</p>
        <nav id="mainNav">
          <ul>
            <li className="mainNavItem">
              <Link to="/" onClick={this.menuToggle.bind(this)}>
                Home
              </Link>
            </li>
            <li id="port" className="port mainNavItem">
              <Link to="/Port" onClick={this.menuToggle.bind(this)}>
                Port
              </Link>
              <span className="port">
                <a onClick={this.NavToggle.bind(this, 'port')}>+</a>
              </span>
            </li>
            <li className="subNav-Mobile port">
              <Link to="/Port" onClick={this.menuToggle.bind(this)}>
                Port
              </Link>
              <span className="port">
                <a onClick={this.NavToggle.bind(this, 'port')}>-</a>
              </span>
            </li>
            <li className="subNav-Mobile port">
              <Link to="/Port/Services" onClick={this.menuToggle.bind(this)}>
                Services
              </Link>
            </li>
            <li className="subNav-Mobile port">
              <Link to="/Port/Storage" onClick={this.menuToggle.bind(this)}>
                Storage
              </Link>
            </li>
            <li className="subNav-Mobile port">
              <Link to="/Port/Commercial_Facilities" onClick={this.menuToggle.bind(this)}>
                Commerical Facilities
              </Link>
            </li>
            <li className="subNav-Mobile port">
              <Link to="/Port/Mission" onClick={this.menuToggle.bind(this)}>
                Mission
              </Link>
            </li>
            <li className="mainNavItem">
              <Link to="/Airport" onClick={this.menuToggle.bind(this)}>
                Airport
              </Link>
            </li>
            <li className="mainNavItem">
              <Link to="/Huntley_Park" onClick={this.menuToggle.bind(this)}>
                Huntley Park
              </Link>
            </li>
            <li className="mainNavItem">
              <Link to="/History" onClick={this.menuToggle.bind(this)}>
                History
              </Link>
            </li>
            <li className="mainNavItem">
              <Link to="/Port_Business" onClick={this.menuToggle.bind(this)}>
                Port Business
              </Link>
              <span className="port-business">
                <a onClick={this.NavToggle.bind(this, 'port-business')}>+</a>
              </span>
            </li>
            <li className="subNav-Mobile port-business">
              <Link to="/Port_Business" onClick={this.menuToggle.bind(this)}>
                Port Business
              </Link>
              <span className="port-business">
                <a onClick={this.NavToggle.bind(this, 'port-business')}>-</a>
              </span>
            </li>
            <li className="subNav-Mobile port-business">
              <Link to="/Port_Business/Ordinance" onClick={this.menuToggle.bind(this)}>
                Ordinance
              </Link>
            </li>
            <li className="subNav-Mobile port-business">
              <Link to="/Port_Business/Budget" onClick={this.menuToggle.bind(this)}>
                Budget
              </Link>
            </li>
            <li className="subNav-Mobile port-business">
              <Link to="/Port_Business/Meetings" onClick={this.menuToggle.bind(this)}>
                Meetings
              </Link>
            </li>
            <li className="subNav-Mobile port-business">
              <Link to="/Port_Business/Resolutions" onClick={this.menuToggle.bind(this)}>
                Resolutions
              </Link>
            </li>
            <li className="subNav-Mobile port-business">
              <Link to="/Port_Business/Strategic_Plan" onClick={this.menuToggle.bind(this)}>
                Strategic Plan
              </Link>
            </li>
            <li className="subNav-Mobile port-busniess">
              <Link to="/Port_Business/Airport_Plan" onClick={this.menuToggle.bind(this)}>
                Airport Plan
              </Link>
            </li>
            <li className="mainNavItem">
              <Link to="/Contact" onClick={this.menuToggle.bind(this)}>
                Contact
              </Link>
            </li>
            <li id="nav-menu-button">
              <a onClick={this.menuToggle.bind(this)}>
                <div className="nav-icon-wrapper">
                  <div className="nav-icon"> </div>
                  <div className="nav-icon"> </div>
                  <div className="nav-icon"> </div>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
