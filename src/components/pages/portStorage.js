import React, { Component } from 'react';

class Portstorage extends Component {
  render() {
    return (
      <div id="wrapper">
        <section id="contentstart">
          <article>
            <h2>Storage Facilities</h2>
            The Port of Gold Beach has storage available in the Port compound. The Port Compound is a gated area
            adjacent to the Port Offices. Open, covered, or closed storage are available. RV&#39;s, boats, and trailers
            may all be stored in the Port Compound Contact the Port Office for prices and availability.
          </article>
          <article>
            <h2>Storage Rates</h2>
            <table>
              <thead>
                <tr>
                  <th>Compound Storage Size</th>
                  <th>Monthly Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12 x 35</td>
                  <td>$45</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Bay Storage Size</th>
                  <th>Monthly Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10 x 30 Open Bay</td>
                  <td>$75.00</td>
                </tr>
                <tr>
                  <td>10 x 30 Open Bay with floor</td>
                  <td>$85.00</td>
                </tr>
                <tr>
                  <td>10 x 30 with Door</td>
                  <td>$125</td>
                </tr>
                <tr>
                  <td>12 x 30 Open Bay</td>
                  <td>$100</td>
                </tr>
                <tr>
                  <td>12 x 30 with Door</td>
                  <td>$150</td>
                </tr>
                <tr>
                  <td>15 x 30 Open Bay</td>
                  <td>$115</td>
                </tr>
                <tr>
                  <td>15 x 30 with Door</td>
                  <td>$165</td>
                </tr>
                <tr>
                  <td>12 x 36 with Door</td>
                  <td>$160</td>
                </tr>
                <tr>
                  <td>12 x 36 with Door and Power</td>
                  <td>$170</td>
                </tr>
              </tbody>
            </table>
            <p>
              When renting either compound storage or bay storage all new tenants will be required to have first & last
              months rents as well as a refundable security deposit for cleaning and any legal fees that might be
              incurred if in default of space rented.
            </p>
            <p>
              All new compound storage customers will be required to show that vehicle(s), motor homes, boats &
              trailers, Rv’s, etc. have current tags & registrations and must not be in a dilapidated condition. Any
              vehicle needing to be towed into the compound will not be accepted. Port personnel prior to letting space
              will do a visual inspection of items to be stowed in the compound area.
            </p>
          </article>
        </section>
      </div>
    );
  }
}

export default Portstorage;
