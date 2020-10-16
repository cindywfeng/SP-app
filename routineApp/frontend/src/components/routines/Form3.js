import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

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
        <React.Fragment>
          <AppBar title="Step 2: Serums"></AppBar>
          <TextField
            hintText="Select Skincare item 3"
            floatingLabelText="Skincare item 3"
            onChange={handleChange("itemid3")}
            defaultValue={values.itemid3}
          />
          <TextField
            hintText="Select Skincare item 4"
            floatingLabelText="Skincare item 4"
            onChange={handleChange("itemid4")}
            defaultValue={values.itemid4}
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

export default Form3;
