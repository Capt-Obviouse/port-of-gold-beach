import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="homeSearch">
        <p>
          <span>
            <form>
              <label>
                I want to..<br />
                <input
                  id="searchBox"
                  type="text"
                  placeholder="Launch my boat"
                  name="search"
                  autofocus="autofocus"
                  onfocus="this.select()"
                />
              </label>
            </form>
          </span>
        </p>
      </div>
    );
  }
}

export default Home;
