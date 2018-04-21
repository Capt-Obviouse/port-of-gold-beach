import React, { Component } from 'react';
import ContactForm from './forms/contactForm';

class Contact extends Component {
  render() {
    return (
      <div id="wrapper">
        <section id="contentstart">
          <article className="col-2">
            <h2>Contact</h2>
            <p>
              The Port Office is open Monday thru Friday 8 am until 5 pm. We welcome your visit! Contact the Port Office
              at 541-247-6269 or by email: portoffice@portofgoldbeach.com or visit us in person to conduct your port
              business or make inquires.
            </p>
          </article>
          <article className="col-2 contact">
            <h2>Port of Gold Beach</h2>
            <p>Port of Gold Beach</p>
            <p>29891 Harbor Way</p>
            <p>P.O. Box 1126</p>
            <p>Gold Beach, OR 97444</p>

            <p>Phone: 541-247-6269</p>
            <p>Fax: 541-247-6268</p>

            <p>www.PortOfGoldBeach.com</p>

            <p>Email: portoffice@portofgoldbeach.com</p>
          </article>
          <article className="contactForm">
            <h2>Send us a message</h2>
            <ContactForm />
          </article>
        </section>
      </div>
    );
  }
}

export default Contact;
