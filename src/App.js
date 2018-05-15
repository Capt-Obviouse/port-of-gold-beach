import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import './assets/css/default.min.css';
import Header from './components/header/header';
import Home from './components/pages/home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="App">
            <Route exact path="/" component={Home} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
