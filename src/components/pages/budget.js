import React, { Component } from 'react';

class Budget extends Component {
  render() {
    return (
      <div id="wrapper">
        <section id="contentstart">
          <article>
            <h2>Budget</h2>
            <ul>
              <li>
                <a
                  href="http://portofgoldbeach.com/_2017_Downloads_pdf/17-18_Budget.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  2017/2018
                </a>
              </li>
              <li>
                <a
                  href="http://portofgoldbeach.com/_2017_Downloads_pdf/16-17_Budget.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  2016/2017
                </a>
              </li>
              <li>
                <a
                  href="http://portofgoldbeach.com/_2015_Downloads_pdf/15-16_Budget.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  2015/2016
                </a>
              </li>
              <li>
                <a
                  href="http://portofgoldbeach.com/_2014_Downloads_pdf/14-15_Budget.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  2014/2015
                </a>
              </li>
            </ul>
          </article>
        </section>
      </div>
    );
  }
}

export default Budget;
