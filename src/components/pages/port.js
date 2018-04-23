import React, { Component } from 'react';
import PortSunset from '../../Assets/img/port_sunset_l.jpg';
import PortSunsetMedium from '../../Assets/img/port_sunset_m.jpg';
import PortSunsetSmall from '../../Assets/img/port_sunset_s.jpg';
class Port extends Component {
  render() {
    return (
      <div id="wrapper">
        <section id="contentstart">
          <article>
            <h2>Port of Gold Beach</h2>

            <p>
              The Port of Gold Beach is for tourists, for residents, and for commercial fishermen. At the top of the
              Recreation Dock ramp is a fish cleaning station. At the top of the Commercial Dock are restaurants, shops,
              fish buyers, sellers, and processing.
            </p>
            <p className="pageTitleImage">
              <img
                className="pageTitleImage"
                src={PortSunsetSmall}
                srcSet={PortSunsetMedium + ' 700w, ' + PortSunset + ' 1920w'}
                alt="Port of Gold Beach docks in the sunset"
              />
            </p>
          </article>
        </section>
      </div>
    );
  }
}

export default Port;
