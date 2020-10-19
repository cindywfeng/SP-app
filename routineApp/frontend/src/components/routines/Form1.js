import React, { Component, Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";

// form
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import "./Form1.css";

export class Form1 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
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
                <img src="https://www.flaticon.com/svg/static/icons/svg/146/146205.svg" />
                Morning or{" "}
                <img src="https://www.flaticon.com/svg/static/icons/svg/3594/3594380.svg" />
                Night Routine
              </h1>

              <FormControl variant="outlined" className="form">
                <InputLabel id="demo-simple-select-outlined-label">
                  Routine
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="select-box"
                  value={values.timeofday}
                  onChange={handleChange("timeofday")}
                  label="Morning/Evening"
                >
                  <MenuItem className="select-text" value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem className="select-text" value="morning">
                    morning
                  </MenuItem>
                  <MenuItem className="select-text" value="evening">
                    evening
                  </MenuItem>
                </Select>
              </FormControl>
              <div className="btn-area">
                <div className="back-btn"></div>
                <div className="continue-btn">
                  <button id="navigation-btn" onClick={this.continue}>
                    Continue
                  </button>
                </div>
              </div>
            </div>
            <div className="right-space"></div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Form1;
