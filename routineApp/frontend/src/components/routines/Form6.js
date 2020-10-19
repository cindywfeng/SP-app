import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "@material-ui/core/TextField";
import RaisedButton from "material-ui/RaisedButton";
// redx
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addRoutine } from "../../actions/routines";

export class Form6 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.onSubmit(e);
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
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
                Do you have any comments about this routine?{" "}
                <img
                  id="form-text-image"
                  src="https://www.flaticon.com/svg/static/icons/svg/2190/2190552.svg"
                />
              </h1>
              <div className="text-field-area">
                <div className="text-field1">
                  <TextField
                    hintText="Comment"
                    floatingLabelText="Comment"
                    onChange={handleChange("comment")}
                    defaultValue={values.comment}
                    id="outlined-basic"
                    label="Comment"
                    variant="outlined"
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
                    Add Routine
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

export default connect(null, { addRoutine })(Form6);
