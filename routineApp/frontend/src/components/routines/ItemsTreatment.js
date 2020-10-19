import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getItems, deleteItem } from "../../actions/items";

import "./Items.css";

export class ItemsTreatment extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    getItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getItems();

    //   const categoryFilter = () => {
    //     const filtered = this.props.items.filter(
    //       (item) => item.category === "cleanser"
    //     );
    //     console.log(filtered);
    //   };
  }

  render() {
    return (
      <Fragment>
        <h1 className="title-text">
          List of your Skincare{" "}
          <img src="https://www.flaticon.com/svg/static/icons/svg/2413/2413531.svg" />
        </h1>
        <div className="instruction-box">
          <h2>Instructions</h2>
          <h3>
            Input the <span className="item-ref">Item Ref.</span> to the
            form-field <span className="warning">(not the name!)</span>.
          </h3>
        </div>

        {/* table */}
        <table className="table">
          <div className="table-content">
            <tr>
              <th className="item-ref">Item Ref.</th>
              <th>Skincare Name</th>
            </tr>
            {this.props.items
              .filter((item) => item.category === "treatment")
              .map((filteredItem) => {
                return (
                  <tr key={filteredItem.id}>
                    <td>{filteredItem.id}</td>
                    <td>{filteredItem.name}</td>
                  </tr>
                );
              })}
          </div>
        </table>
      </Fragment>
    );
  }
}

// the middle is the reducer
const mapstateToProps = (state) => ({
  items: state.items.items,
});

export default connect(mapstateToProps, { getItems, deleteItem })(
  ItemsTreatment
);
