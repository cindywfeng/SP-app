import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getItems, deleteItem } from "../../actions/items";

export class Items extends Component {
  static PropTypes = {
    items: PropTypes.array.isRequired,
    getItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getItems();
  }
  render() {
    return (
      <Fragment>
        <h1>List of all items</h1>
        {this.props.items.map((item) => (
          <div key={item.id}>
            <h1>
              {item.date} | {item.timeofday} | {item.itemid1} |{item.itemid2}
            </h1>
            <button
              onClick={this.props.deleteItem.bind(this, item.id)}
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
  items: state.items.items,
});

export default connect(mapstateToProps, { getItems, deleteItem })(Items);
