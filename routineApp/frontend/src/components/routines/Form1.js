import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class Form1 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Morning or Night Routine"></AppBar>
          <TextField
            hintText="Select Morning or Evening Routine"
            floatingLabelText="Morning/Evening"
            onChange={handleChange("timeofday")}
            defaultValue={values.timeofday}
          />
          <RaisedButton
            label="Continue"
            primary={true}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Form1;
