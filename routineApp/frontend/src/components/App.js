import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

// components
import Header from "./layout/Header.js";
import Dashboard from "./routines/Dashboard";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Dashboard />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
