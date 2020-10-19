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

export class Items extends Component {
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
            Input the <span className="item-ref">Item Ref.</span> into the
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
              .filter((item) => item.category === "cleanser")
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

export default connect(mapstateToProps, { getItems, deleteItem })(Items);
