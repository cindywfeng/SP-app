import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addItem } from "../../actions/items";

import "./ItemForm.css";
import AllItems from "./AllItems";
import TextField from "material-ui/TextField";

export class ItemForm extends Component {
  state = {
    // item states
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
    // clear form
    this.setState({
      name: "",
      brand: "",
      category: "",
      created_at: "",
    });
    console.log(item);
  };

  // componentDidMount() {
  //   fetch("https://skincare-api.herokuapp.com").then((response) =>
  //     response.json().then((data) => console.log(data))
  //   );
  // }

  render() {
    const skincareBrands = [
      "cosrx",
      "innisfree",
      "banila co.",
      "dear, klairs",
      "laneige",
      "benton",
      "guerisson",
      "the ordinary",
      "biore",
    ];

    const { name, brand, category, created_at } = this.state;
    return (
      <div id="wrapper">
        <div className="form-area">
          <div className="left-space"></div>
          <div
            id="middle-space"
            className="animate__animated animate__backInLeft"
          >
            <h1>
              Add Skincare Item
              <img id="plus" />
            </h1>
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
              <datalist id="brand-list">
                {skincareBrands.map((item) => {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                })}
              </datalist>
              <br />
              {/* Input category */}
              <select
                name="category"
                id="category"
                onChange={this.onChange}
                value={category}
              >
                <option value="choose">Select category</option>
                <option value="cleanser">cleanser</option>
                <option value="serum">serum</option>
                <option value="treatment">treatment</option>
                <option value="moisturizer">moisturizer</option>
              </select>
              <br />
              {/* submit button */}
              <button type="submit" className="submit-btn">
                Add
              </button>
            </form>
          </div>
          <div className="right-space">
            {" "}
            <AllItems />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addItem })(ItemForm);
