import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRoutines, deleteRoutine } from "../../actions/routines";

export class Routines extends Component {
  static PropTypes = {
    routines: PropTypes.array.isRequired,
    getRoutines: PropTypes.func.isRequired,
    deleteRoutine: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getRoutines();
  }
  render() {
    return (
      <Fragment>
        <h1>List of all routines</h1>
        {this.props.routines.map((routine) => (
          <div key={routine.id}>
            <h1>
              {routine.date} | {routine.timeofday} | {routine.itemid1} |
              {routine.itemid2}
            </h1>
            <button
              onClick={this.props.deleteRoutine.bind(this, routine.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        ))}
      </Fragment>
    );
  }
}

// the middle is the reducer
const mapstateToProps = (state) => ({
  routines: state.routines.routines,
});

export default connect(mapstateToProps, { getRoutines, deleteRoutine })(
  Routines
);
