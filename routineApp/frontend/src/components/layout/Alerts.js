import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";

export class Alerts extends Component {
  componentDidMount() {
    this.props.alert.show("hey");
  }
  render() {
    return (
      <Fragment>
        <h1>hi</h1>
      </Fragment>
    );
  }
}

export default withAlert()(Alerts);
