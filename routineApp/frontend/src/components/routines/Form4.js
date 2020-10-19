import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import Items from "./Items";
import ItemsTreatment from "./ItemsTreatment";

export class Form4 extends Component {
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
                Step 3: Treatments{" "}
                <img
                  id="form-text-image"
                  src="https://www.flaticon.com/svg/static/icons/svg/3440/3440983.svg"
                />
              </h1>
              <div className="text-field-area">
                <div className="text-field1">
                  <TextField
                    className="text-field"
                    hintText="Select Treatment"
                    floatingLabelText="1. Treatment"
                    onChange={handleChange("itemid5")}
                    defaultValue={values.itemid5}
                  />
                </div>
                <div className="text-field2">
                  <TextField
                    hintText="Select Treatment"
                    floatingLabelText="2. Treatment"
                    onChange={handleChange("itemid6")}
                    defaultValue={values.itemid6}
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
              <ItemsTreatment />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Form4;
