import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addRoutine } from "../../actions/routines";
// next step forms
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";
import Form6 from "./Form6";
import Confirm from "./Confirm";

import Dashboard from "./Dashboard";
import { Redirect } from "react-router-dom";

export class RoutineForm extends Component {
  state = {
    step: 1,
    // routine states
    timeofday: "",
    itemid1: "",
    itemid2: "",
    itemid3: "",
    itemid4: "",
    itemid5: "",
    itemid6: "",
    itemid7: "",
    comment: "",
  };

  static propTypes = {
    // addRoutine: PropTypes.func.isRequired,
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // onChange
  //   onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  onSubmit = (e) => {
    console.log("submitted");
    e.preventDefault();
    const {
      timeofday,
      itemid1,
      itemid2,
      itemid3,
      itemid4,
      itemid5,
      itemid6,
      itemid7,
      comment,
    } = this.state;
    const routine = {
      timeofday,
      itemid1,
      itemid2,
      itemid3,
      itemid4,
      itemid5,
      itemid6,
      itemid7,
      comment,
    };
    console.log({
      timeofday,
      itemid1,
      itemid2,
      itemid3,
      itemid4,
      itemid5,
      itemid6,
      itemid7,
      comment,
    });
    this.props.addRoutine(routine);
    // clear form
    this.setState({
      timeofday: "",
      itemid1: "",
      itemid2: "",
      itemid3: "",
      itemid4: "",
      itemid5: "",
      itemid6: "",
      itemid7: "",
      comment: "",
    });
  };

  render() {
    const { step } = this.state;
    const {
      date,
      timeofday,
      itemid1,
      itemid2,
      itemid3,
      itemid4,
      itemid5,
      itemid6,
      itemid7,
      comment,
    } = this.state;
    const values = {
      date,
      timeofday,
      itemid1,
      itemid2,
      itemid3,
      itemid4,
      itemid5,
      itemid6,
      itemid7,
      comment,
    };

    switch (step) {
      case 1:
        return (
          <Form1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Form2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Form3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Form4
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <Form5
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <Form6
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            onSubmit={this.onSubmit}
          />
        );
      case 7:
        return <Redirect to="/login" />;
      default:
        console.log("This is a multi-step form built with React.");
    }
    // end of switch statement
  }
}

export default connect(null, { addRoutine })(RoutineForm);
