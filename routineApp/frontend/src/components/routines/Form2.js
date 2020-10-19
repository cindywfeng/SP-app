import React, { Component, Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import Items from "./Items";

import "./Form1.css";

export class Form2 extends Component {
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
                Step 1: Cleansing{" "}
                <img
                  id="form-text-image"
                  src="https://www.flaticon.com/svg/static/icons/svg/3520/3520578.svg"
                />
              </h1>
              <div className="text-field-area">
                <div className="text-field1">
                  <TextField
                    className="text-field"
                    hintText="Select Cleansing Skincare"
                    floatingLabelText="1. Cleansing skincare"
                    onChange={handleChange("itemid1")}
                    defaultValue={values.itemid1}
                  />
                </div>
                <div className="text-field2">
                  <TextField
                    hintText="Select Cleansing Skincare"
                    floatingLabelText="2. Cleansing skincare"
                    onChange={handleChange("itemid2")}
                    defaultValue={values.itemid2}
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
              {" "}
              <Items />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Form2;
