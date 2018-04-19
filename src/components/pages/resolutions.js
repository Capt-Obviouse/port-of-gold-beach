import React, { Component } from 'react';

class Resolutions extends Component {
  render() {
    return (
      <div id="wrapper">
        <section id="contentstart">
          <article>
            <h2>Resolution 2017-02</h2>
            <p>
              BE IT RESOLVED that the Board of Commissioners of the Port of Gold Beach herby adopts the budget for
              fiscal year 2017-18 in the total of $2,019.740 now on file at the Port Office, 29891 Harbo Way, Gold
              Beach, OR 97444
            </p>
            <h3>MAKING APPROPRIATIONS</h3>
            <p>
              BE IT RESOLVED that the amounts for the fiscal year beginning July 1, 2017, and for the purposes shown
              below are hereby appropriated:
            </p>
            <table className="resolutions">
              <thead>
                <tr>
                  <th>General Fund</th>
                  <th>Budget</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Personal Services</td>
                  <td>$313,060</td>
                </tr>
                <tr>
                  <td>Materials & Services</td>
                  <td>$330,190</td>
                </tr>
                <tr>
                  <td>Capital Outlay</td>
                  <td>$87,500</td>
                </tr>
                <tr>
                  <td>Debt Service</td>
                  <td>$48,714</td>
                </tr>
                <tr>
                  <td>Transfers</td>
                  <td>$25,000</td>
                </tr>
                <tr>
                  <td>Contingency</td>
                  <td>$25,000</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td>$829,464</td>
                </tr>
              </tfoot>
            </table>
          </article>
        </section>
      </div>
    );
  }
}

export default Resolutions;
