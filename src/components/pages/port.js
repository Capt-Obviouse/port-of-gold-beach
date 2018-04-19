import React, { Component } from 'react';
import PortSunset from '../../Assets/img/port_sunset.jpg';
class Port extends Component {
  render() {
    return (
      <div id="wrapper">
        <section id="contentstart">
          <article>
            <h2>Port of Gold Beach</h2>

            <p>
              The Port of Gold Beach is for tourists, for residents, and for commercial fishermen. Highway 101 can be
              seen running along the top of the image. The entrance through the breakwater from the Rogue River is off
              the left edge of the image. The Port Offices are located off the right edge of the image. At the top of
              the Recreation Dock ramp is a fish cleaning station. At the top of the Commercial Dock are restaurants,
              shops, fish buyers/sellers/processing.
            </p>
            <p className="pageTitleImage">
              <img className="pageTitleImage" src={PortSunset} alt="Port of Gold Beach docks in the sunset" />
            </p>
          </article>
        </section>
      </div>
    );
  }
}

export default Port;
