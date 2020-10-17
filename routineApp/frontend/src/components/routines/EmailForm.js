import React, { Component, Fragment } from "react";

export class EmailForm extends Component {
  render() {
    return (
      <Fragment>
        <h1>Send a report of your skincare routine history to your e-mail</h1>
        <form method="POST" action="http://localhost:3000/send">
          <label>Name</label>
          <input type="text" name="name" />
          <br />

          <label>Company</label>
          <input type="text" name="company" />
          <br />

          <label>Email Address</label>
          <input type="email" name="email" />
          <br />

          <label>Phone Number</label>
          <input type="text" name="phone" />
          <br />

          <label>Message</label>
          <textarea name="message" rows="5"></textarea>
          <br />

          <button type="submit">Submit</button>
        </form>
      </Fragment>
    );
  }
}

export default EmailForm;
