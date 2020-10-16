import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      // ITEMS FORM ERRORS
      if (error.msg.name && error.msg.brand && error.msg.category) {
        // cant make multiline?
        alert.error(
          `Name: ${error.msg.name.join()} Brand: ${error.msg.brand.join()} Category: ${error.msg.category.join()}`
        );
      } else if (error.msg.name && error.msg.brand)
        alert.error(
          `Name: ${error.msg.name.join()} Brand: ${error.msg.brand.join()}`
        );
      else if (error.msg.name && error.msg.category)
        alert.error(
          `Name: ${error.msg.name.join()} Category: ${error.msg.category.join()}`
        );
      else if (error.msg.brand && error.msg.category)
        alert.error(
          `Brand: ${error.msg.brand.join()} Category: ${error.msg.category.join()}`
        );
      else if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      else if (error.msg.brand) alert.error(`Brand: ${error.msg.brand.join()}`);
      else if (error.msg.category)
        alert.error(`Category: ${error.msg.category.join()}`);
    }
    // ITEM MESSAGES
    if (message !== prevProps.message) {
      if (message.deleteItem) alert.success(message.deleteItem);
      if (message.addItem) alert.success(message.addItem);
    }
    // ROUTINES FORM ERRORS
    if (error.msg.timeofday && error.msg.itemid1 && error.msg.itemid2) {
      // cant make multiline?
      alert.error(
        `Morning/Evening: ${error.msg.timeofday.join()} Skincare item 1: ${error.msg.itemid1.join()} Skincare item 2: ${error.msg.itemid2.join()}`
      );
    } else if (error.msg.timeofday && error.msg.itemid1)
      alert.error(
        `Morning/Evening: ${error.msg.timeofday.join()} Skincare item 1: ${error.msg.itemid1.join()}`
      );
    else if (error.msg.timeofday && error.msg.itemid2)
      alert.error(
        `Morning/Evening: ${error.msg.timeofday.join()} Skincare item 2: ${error.msg.itemid2.join()}`
      );
    else if (error.msg.itemid1 && error.msg.itemid2)
      alert.error(
        `Skincare item 1: ${error.msg.itemid1.join()} Skincare item 2: ${error.msg.itemid2.join()}`
      );
    else if (error.msg.timeofday)
      alert.error(`Morning/Evening: ${error.msg.timeofday.join()}`);
    else if (error.msg.itemid1)
      alert.error(`Skincare item 1: ${error.msg.itemid1.join()}`);
    else if (error.msg.itemid2)
      alert.error(`Skincare item 2: ${error.msg.itemid2.join()}`);

    // ROUTINE MESSAGES
    if (message !== prevProps.message) {
      if (message.deleteRoutine) alert.success(message.deleteRoutine);
      if (message.addRoutine) alert.success(message.addRoutine);
    }
  }
  render() {
    return <Fragment></Fragment>;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});
export default connect(mapStateToProps)(withAlert()(Alerts));
