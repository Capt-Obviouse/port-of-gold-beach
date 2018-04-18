import React, { Component } from 'react';

class Meetings extends Component {
  render() {
    return (
      <div id="wrapper">
        <section id="contentstart">
          <article>
            <h2>Meetings 2018</h2>
            <ul>
              <li>
                <a
                  href="http://portofgoldbeach.com/_2018_Downloads_pdf/20180322_Agenda.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Agenda for March 22
                </a>
              </li>
              <li>
                <a
                  href="http://portofgoldbeach.com/_2018_Downloads_pdf/20180315_Agenda.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Agenda for March 15 - CANCELLED
                </a>
              </li>
              <li>
                <a
                  href="http://portofgoldbeach.com/_2018_Downloads_pdf/20180222_Agenda.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Agenda for February 22
                </a>
              </li>
              <li>
                <a
                  href="http://portofgoldbeach.com/_2018_Downloads_pdf/20180118_Agenda.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Agenda for January 18
                </a>
              </li>
            </ul>
          </article>
        </section>
      </div>
    );
  }
}

export default Meetings;
