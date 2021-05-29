import { Component } from "react";
import "./Contact.css";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="contact-container">
        <br />
        <h2>Contact me</h2>
        <form onSubmit={this.handleSubmit}>
          <br />
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <br />
          </label>
          <label>
            Email:
            <input
              type="Email"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Message:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Submit" className="btn" />
        </form>
      </div>
    );
  }
}
