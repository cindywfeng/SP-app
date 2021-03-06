import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import "./Form1.css";
import ItemsSerum from "./ItemsSerum";

export class Form3 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <div className="wrapper">
          <div className="form-area">
            <div className="left-space"></div>
            <div
              id="middle-space"
              className="animate__animated animate__backInLeft"
            >
              <h1 className="form-text">
                Step 2: Serums{" "}
                <img
                  id="form-text-image"
                  src="https://www.flaticon.com/svg/static/icons/svg/2323/2323189.svg"
                />
              </h1>
              <div className="text-field-area1">
                <div className="text-field1">
                  <TextField
                    className="text-field"
                    hintText="Select Serum"
                    floatingLabelText="1. Serum (optional)"
                    onChange={handleChange("itemid3")}
                    defaultValue={values.itemid3}
                  />
                  <div className="text-field2">
                    <TextField
                      hintText="Select Serum"
                      floatingLabelText="2. Serum (optional)"
                      onChange={handleChange("itemid4")}
                      defaultValue={values.itemid4}
                    />
                  </div>
                </div>
              </div>
              <div className="btn-area">
                <div className="back-btn">
                  <button id="navigation-btn" onClick={this.back}>
                    Back
                  </button>
                </div>
                <div className="continue-btn">
                  <button id="navigation-btn" onClick={this.continue}>
                    Continue
                  </button>
                </div>
              </div>
            </div>
            <div className="right-space">
              <ItemsSerum />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Form3;
