import React, { Component, Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

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
        <Fragment id="wrapper">
          <div className="form-area">
            <div className="left-space"></div>
            <div
              id="middle-space"
              className="animate__animated animate__backInLeft"
            >
              <h1 className="form-text">Step 1: Cleansing</h1>

              <TextField
                hintText="Select Skincare item 1"
                floatingLabelText="Skincare item 1"
                onChange={handleChange("itemid1")}
                defaultValue={values.itemid1}
              />
              <TextField
                hintText="Select Skincare item 2"
                floatingLabelText="Skincare item 2"
                onChange={handleChange("itemid2")}
                defaultValue={values.itemid2}
              />

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
            <div className="right-space"></div>
          </div>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Form2;
