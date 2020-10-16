import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import { List, ListItem } from "material-ui/List";

export class Form6 extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM
    const {
      timeofday,
      itemid1,
      itemid2,
      itemid3,
      itemid4,
      itemid5,
      itemid6,
      itemid7,
      comment,
    } = this.state;
    const routine = {
      timeofday,
      itemid1,
      itemid2,
      itemid3,
      itemid4,
      itemid5,
      itemid6,
      itemid7,
      comment,
    };
    console.log({
      timeofday,
      itemid1,
      itemid2,
      itemid3,
      itemid4,
      itemid5,
      itemid6,
      itemid7,
      comment,
    });
    this.props.addRoutine(routine);
    // clear form
    this.setState({
      timeofday: "",
      itemid1: "",
      itemid2: "",
      itemid3: "",
      itemid4: "",
      itemid5: "",
      itemid6: "",
      itemid7: "",
      comment: "",
    });
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
          <AppBar title="Any Comments about this routine?"></AppBar>
          <TextField
            hintText="Comment"
            floatingLabelText="Comment"
            onChange={handleChange("comment")}
            defaultValue={values.comment}
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

export default Form6;
