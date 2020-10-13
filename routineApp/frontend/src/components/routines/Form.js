import React, { Component } from "react";

export class Form extends Component {
  state = {
    date: "",
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

  // onChange
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  // onSubmit

  onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
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
          {/* add date */}
          <input
            type="date"
            name="date"
            id="date"
            onChange={this.onChange}
            value={date}
          ></input>
          <br />
          {/* specify am/pm */}
          <select
            name="timeofday"
            id="timeofday"
            onChange={this.onChange}
            value={timeofday}
          >
            <option value="morning">Morning</option>
            <option value="evening">Evening</option>
          </select>
          <br />
          {/* add items */}
          {/* item id 1 */}
          <input
            type="number"
            name="itemid1"
            id="itemid1"
            onChange={this.onChange}
            value={itemid1}
          ></input>
          <br />
          {/* item id 2 */}
          <input
            type="number"
            name="itemid2"
            id="itemid2"
            onChange={this.onChange}
            value={itemid2}
          ></input>
          <br />
          {/* item id 3 */}
          <input
            type="number"
            name="itemid3"
            id="itemid3"
            onChange={this.onChange}
            value={itemid3}
          ></input>
          <br />
          {/* item id 4 */}
          <input
            type="number"
            name="itemid4"
            id="itemid4"
            onChange={this.onChange}
            value={itemid4}
          ></input>
          <br />
          {/* item id 5 */}
          <input
            type="number"
            name="itemid5"
            id="itemid5"
            onChange={this.onChange}
            value={itemid5}
          ></input>
          <br />
          {/* item id 6 */}
          <input
            type="number"
            name="itemid6"
            id="itemid6"
            onChange={this.onChange}
            value={itemid6}
          ></input>
          <br />
          {/* item id 7 */}
          <input
            type="number"
            name="itemid7"
            id="itemid7"
            onChange={this.onChange}
            value={itemid7}
          ></input>
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

export default Form;
