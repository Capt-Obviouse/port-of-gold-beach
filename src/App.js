import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './Assets/css/default.min.css';
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import Homepage from './components/pages/homePage';
import Airport from './components/pages/airport';
import Airportplan from './components/pages/AirportPlan';
import Budget from './components/pages/budget';
import Commercialfacilities from './components/pages/commercialFacilities';
import Contact from './components/pages/contact';
import Meetings from './components/pages/meetings';
import Ordinance from './components/pages/ordinance';
import Port from './components/pages/port';
import Portbusiness from './components/pages/portBusiness';
import Porthistory from './components/pages/portHistory';
import Portmission from './components/pages/portMission';
import Portservices from './components/pages/portServices';
import Portstorage from './components/pages/portStorage';
import Resolutions from './components/pages/resolutions';
import Strategicplan from './components/pages/strategicPlan';
import Sitemap from './components/pages/sitemap';
import Huntleypark from './components/pages/huntleyPark';
import Portheader from './components/headerComponents/portHeader';
import Portbusinessheader from './components/headerComponents/portBusinessHeader';
import Blanksecondheader from './components/headerComponents/blankSecondHeader';
import Rentalcars from './components/pages/rentalCars';

class App extends Component {
  render() {
    return (
      <Router basename={'/~jduncan128/webproject/'}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/port_business*" component={Portbusinessheader} />
            <Route exact path="/port*" component={Portheader} />
            <Route exact path="/*" component={Blanksecondheader} />
          </Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/~jduncan128/*" component={Homepage} />
          <Route exact path="/Port_Business/Airport_Plan" component={Airportplan} />
          <Route exact path="/Port_Business/Budget" component={Budget} />
          <Route exact path="/Port_Business" component={Portbusiness} />
          <Route exact path="/Port_Business/Meetings" component={Meetings} />
          <Route exact path="/Port_Business/Ordinance" component={Ordinance} />
          <Route exact path="/Port_Business/Resolutions" component={Resolutions} />
          <Route exact path="/Port_Business/Strategic_Plan" component={Strategicplan} />
          <Route exact path="/Port" component={Port} />
          <Route exact path="/History" component={Porthistory} />
          <Route exact path="/Port/Commercial_Facilities" component={Commercialfacilities} />
          <Route exact path="/Port/Mission" component={Portmission} />
          <Route exact path="/Port/Services" component={Portservices} />
          <Route exact path="/Port/Storage" component={Portstorage} />
          <Route exact path="/Port/Rental_Cars" component={Rentalcars} />
          <Route exact path="/Huntley_Park" component={Huntleypark} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Airport" component={Airport} />
          <Route exact path="/Sitemap" component={Sitemap} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
