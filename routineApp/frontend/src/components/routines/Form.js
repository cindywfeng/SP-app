import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addRoutine } from "../../actions/routines";

export class Form extends Component {
  state = {
    timeofday: "",
    itemid1: "",
    itemid2: "",
    itemid3: "",
    itemid4: "",
    itemid5: "",
    itemid6: "",
    itemid7: "",
    comment: "",
  };

  static propTypes = {
    addRoutine: PropTypes.func.isRequired,
  };

  // onChange
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  // onSubmit

  onSubmit = (e) => {
    e.preventDefault();
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
  };

  render() {
    const {
      date,
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
    return (
      <div>
        <h1>Add routine form</h1>
        <form onSubmit={this.onSubmit}>
          {/* add date
          <input
            type="date"
            name="date"
            id="date"
            onChange={this.onChange}
            value={date}
          ></input>
          <br /> */}
          {/* specify am/pm */}
          <select
            name="timeofday"
            id="timeofday"
            onChange={this.onChange}
            value={timeofday}
          >
            <option value="choose">Select morning or evening</option>

            <option value="morning">Morning</option>
            <option value="evening">Evening</option>
          </select>
          <br />
          {/* add items */}
          {/* item id 1 */}
          <select
            name="itemid1"
            id="itemid1"
            onChange={this.onChange}
            value={itemid1}
          >
            <option value="choose">Select skincare</option>

            <option value="1">glycolic acid</option>
            <option value="2">BHA</option>
          </select>
          <br />
          {/* item id 2 */}
          <select
            name="itemid2"
            id="itemid2"
            onChange={this.onChange}
            value={itemid2}
          >
            <option value="choose">Select skincare</option>

            <option value="1">glycolic acid</option>
            <option value="2">BHA</option>
          </select>
          <br />
          {/* add comment */}
          <input
            type="textarea"
            name="comment"
            id="comment"
            onChange={this.onChange}
            value={comment}
          ></input>
          {/* submit button */}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addRoutine })(Form);
