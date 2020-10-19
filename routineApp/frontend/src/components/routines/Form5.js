import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import Items from "./Items";

export class Form5 extends Component {
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
        <div id="wrapper">
          <div className="form-area">
            <div className="left-space"></div>
            <div
              id="middle-space"
              className="animate__animated animate__backInLeft"
            >
              <h1 className="form-text">
                Step 4: Moisturizing{" "}
                <img
                  id="form-text-image"
                  src="https://www.flaticon.com/svg/static/icons/svg/3368/3368350.svg"
                />
              </h1>
              <div className="text-field-area">
                <div className="text-field1">
                  <TextField
                    className="text-field"
                    hintText="Select Moisturizer"
                    floatingLabelText="1. Moisturizer"
                    onChange={handleChange("itemid7")}
                    defaultValue={values.itemid7}
                  />
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
              <Items />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Form5;
