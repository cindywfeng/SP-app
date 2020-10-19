import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRoutines, deleteRoutine } from "../../actions/routines";

import "./Routines.css";

// comments
// {
//   this.props.routines.map((routine) => (
//     <div key={routine.id}>
//       <h1>
//         {routine.date} | {routine.timeofday} | {routine.itemid1} |
//         {routine.itemid2}
//       </h1>
//       <button
//         onClick={this.props.deleteRoutine.bind(this, routine.id)}
//         className="delete-btn"
//       >
//         Delete
//       </button>
//     </div>
//   ));
// }

export class Routines extends Component {
  static propTypes = {
    routines: PropTypes.array.isRequired,
    getRoutines: PropTypes.func.isRequired,
    deleteRoutine: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getRoutines();
  }
  render() {
    return (
      <div className="routines-area">
        <h1 className="title-text1">Recent Skincare Routines</h1>
        {/* Routines in cards */}
        {/* skincare items images */}
        {this.props.routines.map((routine) => {
          return (
            <div className="individual-routine" key={routine.id}>
              <h2 className="title-text2">Date: {routine.date}</h2>
              <h3 className="title-text3">{routine.timeofday} routine</h3>
              <h3 className="title-text4">{routine.comment}</h3>
              <div className="container1">
                <ul className="progressbar1">
                  <li>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/3520/3520578.svg" />
                  </li>
                  <li>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/2323/2323189.svg" />
                  </li>
                  <li>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/3440/3440983.svg" />
                  </li>
                  <li>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/3368/3368350.svg" />
                  </li>
                </ul>
              </div>
              <div className="container">
                <ul className="progressbar">
                  <li>Step 1. Cleanser</li>
                  <li>Step 2. Serum</li>
                  <li>Step 3. Treatment</li>
                  <li>Step 4. Moisturizer</li>
                </ul>
              </div>
              <div className="container2">
                <ul className="progressbar2">
                  <li>{routine.itemid1}</li>
                  <li>{routine.itemid3}</li>
                  <li>{routine.itemid5}</li>
                  <li>{routine.itemid7}</li>
                </ul>
              </div>
              <div className="container2">
                <ul className="progressbar2">
                  <li>{routine.itemid2}</li>
                  <li>{routine.itemid4}</li>
                  <li>{routine.itemid6}</li>
                  <li>{""}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
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
