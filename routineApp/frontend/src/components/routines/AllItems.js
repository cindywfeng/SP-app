import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getItems, deleteItem } from "../../actions/items";

import "./Items.css";

// comments
// {item.created_at}
// |{item.category}
{
  /* <td>{item.brand}</td>
<td>{item.category}</td> */
}

// {this.props.items.map((item) => (
//   <div key={item.id}>
//     <h1>
//       Item: {item.id}| {item.name} | {item.brand}
//     </h1>
//     <button
//       onClick={this.props.deleteItem.bind(this, item.id)}
//       className="delete-btn"
//     >
//       Delete
//     </button>
//   </div>
// ))}

export class AllItems extends Component {
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
        <div className="list">
          <h1 className="title-text">
            List of your Skincare{" "}
            <img src="https://www.flaticon.com/svg/static/icons/svg/2413/2413531.svg" />
          </h1>

          {/* table */}
          <table className="table">
            <div className="table-content">
              <tr>
                <th>Item Ref.</th>
                <th>Skincare Name</th>
                <th>Skincare Brand</th>
                <th>Skincare Category</th>
                <th></th>
              </tr>
              {this.props.items.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.brand}</td>
                    <td>{item.category}</td>
                    <td id="delete-btn">
                      <button
                        onClick={this.props.deleteItem.bind(this, item.id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </div>
          </table>
        </div>
      </Fragment>
    );
  }
}

// the middle is the reducer
const mapstateToProps = (state) => ({
  items: state.items.items,
});

export default connect(mapstateToProps, { getItems, deleteItem })(AllItems);
