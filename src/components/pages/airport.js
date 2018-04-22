import React, { Component } from 'react';

class Airport extends Component {
  render() {
    return (
      <div id="wrapper">
        <section id="contentstart">
          <article>
            <h2>Airport</h2>
            <p>
              One of the most beautiful airports on the entire west coast, the Gold Beach Airport is located just south
              of the mouth of the Rogue River. The airport is managed by the Port of Gold Beach.
            </p>
            <ul>
              <li>Terminal and fuel hours are self-service 24/7. </li>
              <li>Tie downs are available. </li>
              <li>Emergency on-call service is available outside of normal business hours.</li>
            </ul>
            <p>
              For After-Hours or Weekend Assistance, you may reach the Port Staff on the mobile phone by dialing
              541-425-1569. The Gold Beach Airport is located immediately adjacent to the town of Gold Beach.
              Restaurants and lodging are easily within walking distance. Ride upriver on Jerry&#39;s Rogue Jets to
              experience the Rogue River at it&#39;s fullest. The Rogue River is rich with thrills and wildlife and the
              upriver jet boats are the best way to see it all - short of hiking or rafting/kayaking the river.
            </p>

            <p className="airportVideo">
              <iframe
                name="youtubeIframe"
                title="airport video"
                width="854"
                height="480"
                src="https://www.youtube.com/embed/0pXsxz1W6gU"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </p>
          </article>
        </section>
      </div>
    );
  }
}

export default Airport;
