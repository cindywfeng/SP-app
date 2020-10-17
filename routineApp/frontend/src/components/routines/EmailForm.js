import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getRoutines } from "../../actions/routines";

import "./EmailForm.css";

export class EmailForm extends Component {
  componentDidMount() {
    this.props.getRoutines();
  }

  render() {
    let lastRoutine = JSON.stringify(
      this.props.routines[this.props.routines.length - 1]
    );

    return (
      <Fragment>
        <h6></h6>
        <h1>Send a report of your skincare routine history to your e-mail</h1>
        <form method="POST" action="http://localhost:3000/send">
          <label>Name</label>
          <input type="text" name="name" />
          <br />

          <label>Email Address</label>
          <input type="email" name="email" />
          <br />

          {/* <label>Message</label> */}
          <textarea
            id="message"
            name="message"
            rows="5"
            // defaultValue={JSON.stringify(this.props.routine)}
            defaultValue={lastRoutine}
          ></textarea>
          <br />

          <button type="submit">Submit</button>
        </form>
      </Fragment>
    );
  }
}
// the middle is the reducer
const mapstateToProps = (state) => ({
  routines: state.routines.routines,
});

export default connect(mapstateToProps, { getRoutines })(EmailForm);
