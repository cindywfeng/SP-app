import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addItem } from "../../actions/items";

export class ItemForm extends Component {
  state = {
    name: "",
    brand: "",
    category: "",
    created_at: "",
  };

  static propTypes = {
    addItem: PropTypes.func.isRequired,
  };

  // onChange
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  // onSubmit

  onSubmit = (e) => {
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
  };

  render() {
    const { name, brand, category, created_at } = this.state;
    return (
      <div>
        <h1>Add item form</h1>
        <form id="itemform" onSubmit={this.onSubmit}>
          {/* Input name */}
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.onChange}
            placeholder="name of item"
          ></input>
          <br />
          {/* Input brand */}
          <input
            type="text"
            name="brand"
            id="brand"
            value={brand}
            onChange={this.onChange}
            placeholder="name of brand"
          ></input>
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

export default connect(null, { addItem })(ItemForm);
