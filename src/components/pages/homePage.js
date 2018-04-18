import React, { Component } from 'react';
import LandingImg from '../../Assets/img/GB1.jpg';

class Homepage extends Component {
  render() {
    return (
      <div id="wrapper">
        <section>
          <article id="landing">
            <script>document.getElementById("wrapper").style.paddingTop = 0;</script>
            <img src={LandingImg} alt="Aerial view of gold beach" />
          </article>
        </section>
        <section id="contentstart">
          <article className="col-3 blue">
            <h2>Port</h2>
            <p>The Port of Gold Beach is for tourists, for residents, and for commercial fishermen.</p>
          </article>
          <article className="col-3 brown">
            <h2>Airport</h2>
            <p>
              One of the most beautiful airports on the entire west coast, the Gold Beach Airport is located just south
              of the mouth of the Rogue River.
            </p>
          </article>
          <article className="col-3 green">
            <h2>Huntley Park</h2>
            <p>
              Visit lovely Huntley Park Riverside Campground and R.V. Park. Located 7 miles east of Gold Beach on the
              bank of the beautiful Rogue River.
            </p>
          </article>
        </section>
        <section>
          <article className="col-3">
            <h2>Gated Storage</h2>
            <p>
              The Port of Gold Beach has storage available in the Port compound. The Port Compound is a gated area
              adjacent to the Port Offices. Open, covered, or closed storage are available.
            </p>
          </article>
          <article className="col-3">
            <h2>Commercial Facilities</h2>
            <p>
              The Port of Gold Beach manages several commercial facilities. The prime commercial location at this time
              is the Cannery Building. Ocean view space is available upstairs. Build-out can be done for qualified
              tenants.
            </p>
          </article>
          <article className="col-3">
            <h2>Rental Cars</h2>
            <p>Rental cars are available for local travel. Contact the Port Office for details.</p>
          </article>
        </section>
      </div>
    );
  }
}

export default Homepage;
