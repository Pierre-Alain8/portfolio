import React, { Component } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import "../scss/contact.scss";
import { withRouter } from "react-router-dom";
import * as emailjs from "emailjs-com";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      from_name: [name, email],
      to_name: "b3122c7907e1e77de19b5abcf7d8bd2f",
      subject: subject,
      message_html: message,
    };
    emailjs.send(
      "gmail",
      "template_NDECGWNG",
      templateParams,
      "user_5bf4F4cQnqO2j9p4owUSd"
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <section className="contact-portfolio">
        <div className="contact-container">
          <div className="form-container">
            <h1>CONTACTEZ-MOI</h1>
            <form
              className="form-contact"
              onSubmit={this.handleSubmit.bind(this)}
            >
              <div className="email-name-group">
                <FormGroup>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this, "email")}
                    placeholder="Enter email"
                  />
                </FormGroup>
                <FormGroup>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange.bind(this, "name")}
                    placeholder="Name"
                  />
                </FormGroup>
              </div>

              <div className="subject-container">
                <FormGroup>
                  <label>Sujet</label>
                  <input
                    type="text"
                    name="subject"
                    value={this.state.subject}
                    onChange={this.handleChange.bind(this, "subject")}
                    placeholder="Subject"
                  />
                </FormGroup>
              </div>

              <div className="message-container">
                <FormGroup>
                  <label>Message</label>
                  <textarea
                    type="textarea"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange.bind(this, "message")}
                  />
                </FormGroup>
              </div>
              <div className="button-submit">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className="illustration-container">
            <div className="contact-illustration">
              <img src="img/contact-me.png" alt="contactez-moi cover" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default withRouter(Contact);
