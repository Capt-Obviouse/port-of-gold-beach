import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="homeSearch">
        <p>I want to...</p>
        <p>
          <form>
            <input id="searchBox" type="text" name="search" autofocus="autofocus" onfocus="this.select()" />
          </form>
        </p>
      </div>
    );
  }
}

export default Home;
