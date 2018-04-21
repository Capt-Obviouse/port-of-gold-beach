import React from 'react';
import { FormErrors } from './FormErrors';
class contactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Email: '',
      Subject: '',
      Message: '',
      formErrors: { Name: '', Email: '', Subject: '', Message: '' },
      EmailValid: false,
      NameValid: false,
      SubjectValid: false,
      MessageValid: false,
      formValid: false
    };
    this.baseState = this.state;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value
      },
      () => {
        this.validateField(name, value);
      }
    );
  }

  handleSubmit(event) {
    alert(
      'Thank you ' +
        this.state.Name +
        ', the following information has been submited\n\n' +
        this.state.Email +
        '\n' +
        this.state.Subject +
        '\n' +
        this.state.Message
    );
    this.setState(this.baseState);
    // this.getElementById('contactFform').reset();
    event.preventDefault();
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let EmailValid = this.state.EmailValid;
    let NameValid = this.state.NameValid;
    let MessageValid = this.state.NameValid;
    let SubjectValid = this.state.SubjectValid;

    switch (fieldName) {
      case 'Email':
        EmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.Email = EmailValid ? '' : ' is invalid';
        break;
      case 'Name':
        NameValid = value.length >= 2;
        fieldValidationErrors.Name = NameValid ? '' : ' is too short';
        break;
      case 'Message':
        MessageValid = value.length >= 5;
        fieldValidationErrors.Message = MessageValid ? '' : ' is to short';
        break;
      case 'Subject':
        SubjectValid = value.length >= 3;
        fieldValidationErrors.Subject = SubjectValid ? '' : ' is to short';
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        EmailValid: EmailValid,
        NameValid: NameValid,
        MessageValid: MessageValid,
        SubjectValid: SubjectValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.EmailValid && this.state.NameValid && this.state.MessageValid && this.state.SubjectValid
    });
  }
  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }
  render() {
    return (
      <div className="form">
        <div className="errorPannel">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <form onSubmit={this.handleSubmit} id="contactForm">
          <p>
            <label>
              Name:<br />
              <input
                type="text"
                name="Name"
                value={this.state.Name}
                placeholder="Name"
                onChange={(this.handleChange = this.handleChange.bind(this))}
              />
            </label>
          </p>
          <p>
            <label>
              Email:<br />
              <input
                type="Email"
                name="Email"
                placeholder="user@Email.com"
                value={this.state.Email}
                onChange={(this.handleChange = this.handleChange.bind(this))}
              />
            </label>
          </p>
          <p>
            <label>
              Subject:<br />
              <input
                type="text"
                name="Subject"
                value={this.state.Subject}
                placeholder="Message Subject"
                onChange={(this.handleChange = this.handleChange.bind(this))}
              />
            </label>
          </p>
          <p>
            Message:<br />
            <textarea
              value={this.state.Message}
              placeholder="Enter your message here"
              name="Message"
              onChange={(this.handleChange = this.handleChange.bind(this))}
            />
          </p>
          <p>
            <button type="submit" disabled={!this.state.formValid}>
              Submit
            </button>
          </p>
        </form>
      </div>
    );
  }
}

export default contactForm;
