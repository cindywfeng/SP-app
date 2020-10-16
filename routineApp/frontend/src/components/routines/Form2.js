import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
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
        <React.Fragment>
          <AppBar title="Step 1: Cleansing"></AppBar>
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
          <RaisedButton
            label="Continue"
            primary={true}
            onClick={this.continue}
          />
          <RaisedButton label="Back" primary={false} onClick={this.back} />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Form2;