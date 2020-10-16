import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addRoutine } from "../../actions/routines";

import "./Form.css";

export class Form extends Component {
  state = {
    // routine states
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

  // onSubmit for routines

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
      <div id="form-div">
        <h1>Add test routine form</h1>
        <form onSubmit={this.onSubmit}>
          {/* select morning/evening */}
          <select
            name="timeofday"
            id="timeofday"
            onChange={this.onChange}
            value={timeofday}
            required
          >
            <option value="choose">Select morning or evening</option>
            <option value="morning">Morning</option>
            <option value="evening">Evening</option>
          </select>
          <br />
          {/* select items */}
          {/* item id 1 */}
          <input
            list="itemid1list"
            name="itemid1"
            id="itemid1form"
            onChange={this.onChange}
            value={itemid1}
            placeholder="1. Skincare item"
            required
          />
          <datalist id="itemid1list"></datalist>
          <br />
          {/* item id 2 */}
          <input
            list="itemid2list"
            name="itemid2"
            id="itemid2"
            onChange={this.onChange}
            value={itemid2}
            placeholder="2. Skincare item"
            required
          />
          <datalist id="itemid2list"></datalist>
          <br />
          {/* item id 3 */}
          <input
            list="itemid3list"
            name="itemid3"
            id="itemid3"
            onChange={this.onChange}
            value={itemid3}
            placeholder="3. Skincare item"
          />
          <datalist id="itemid2list"></datalist>
          <br />
          {/* add comment */}
          <input
            type="textarea"
            name="comment"
            id="comment"
            onChange={this.onChange}
            value={comment}
            placeholder="comment"
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
