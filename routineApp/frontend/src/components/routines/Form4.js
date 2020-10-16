import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

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
        <React.Fragment>
          <AppBar title="Step 3: Treatments"></AppBar>
          <TextField
            hintText="Select Skincare item 5"
            floatingLabelText="Skincare item 5"
            onChange={handleChange("itemid5")}
            defaultValue={values.itemid5}
          />
          <TextField
            hintText="Select Skincare item 6"
            floatingLabelText="Skincare item 6"
            onChange={handleChange("itemid6")}
            defaultValue={values.itemid6}
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

export default Form4;
