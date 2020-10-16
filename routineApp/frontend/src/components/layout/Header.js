import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div>
        <a>Home</a>
        <a>History</a>
        <a>Add skincare log</a>
        <a>Add skincare item</a>
      </div>
    );
  }
}

export default Header;
