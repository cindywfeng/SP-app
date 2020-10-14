import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addRoutine } from "../../actions/routines";
import { addItem } from "../../actions/items";

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
    // item states
    name: "",
    brand: "",
    category: "",
    created_at: "",
  };

  static propTypes = {
    addRoutine: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
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
  };

  // onSubmit for items
  onSubmit1 = (e) => {
    e.preventDefault();
    const { name, brand, category, created_at } = this.state;
    const item = {
      name,
      brand,
      category,
      created_at,
    };
    console.log({
      name,
      brand,
      category,
      created_at,
    });
    this.props.addItem(item);
    console.log(item);
    // create a new option for the drop-down data-list in Routine Form.
    const option = React.createElement("option", { id: "option" }, "h1");
    ReactDOM.render(option, document.getElementById("itemid1form"));
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
      name,
      brand,
      category,
      created_at,
    } = this.state;
    return (
      <div id="form-div">
        <h1>Add routine form</h1>
        <form onSubmit={this.onSubmit}>
          {/* select morning/evening */}
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
          {/* select items */}
          {/* item id 1 */}
          <input
            list="itemid1list"
            name="itemid1"
            id="itemid1form"
            onChange={this.onChange}
            value={itemid1}
            placeholder="1."
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
            placeholder="2."
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

        {/* ITEMS FORM */}

        <h1>Add item form</h1>
        <form id="itemform" onSubmit={this.onSubmit1}>
          {/* Input name */}
          <input
            list="name-list"
            name="name"
            id="name"
            value={name}
            onChange={this.onChange}
            placeholder="name of item"
          />
          <datalist id="name-list"></datalist>
          <br />
          {/* Input brand */}
          <input
            list="brand-list"
            name="brand"
            id="brand"
            value={brand}
            onChange={this.onChange}
            placeholder="name of brand"
          />
          <datalist id="brand-list"></datalist>
          <br />
          {/* Input category */}
          <select
            name="category"
            id="category"
            onChange={this.onChange}
            value={category}
          >
            <option value="choose">Select category</option>
            <option value="1">cleanser</option>
            <option value="2">serum</option>
            <option value="2">treatment</option>
            <option value="2">moisturizer</option>
            <option value="2">miscellaneous</option>
          </select>
          <br />
          {/* submit button */}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addRoutine, addItem })(Form);
