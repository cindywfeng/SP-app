import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

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
        <React.Fragment>
          <AppBar title="Final Step 4: Moisturizing"></AppBar>
          <TextField
            hintText="Select Skincare item 7"
            floatingLabelText="Skincare item 7"
            onChange={handleChange("itemid7")}
            defaultValue={values.itemid7}
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

export default Form5;
