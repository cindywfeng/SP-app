import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
  };
  componentDidUpdate(prevProps) {
    const { error, alert } = this.props;
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
    // ROUTINES FORM ERRORS
  }
  render() {
    return <Fragment></Fragment>;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
});
export default connect(mapStateToProps)(withAlert()(Alerts));
