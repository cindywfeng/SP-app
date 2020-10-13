import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRoutines } from "../../actions/routines";

export class Routines extends Component {
  static PropTypes = {
    routines: PropTypes.array.isRequired,
  };
  render() {
    return (
      <div>
        <h1> List of all routines</h1>
      </div>
    );
  }
}

// the middle is the reducer
const mapstateToProps = (state) => ({
  routines: state.routines.routines,
});

export default connect(mapstateToProps)(Routines);
