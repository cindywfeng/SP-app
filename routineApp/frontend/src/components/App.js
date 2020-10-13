import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

// components
import Header from "./layout/Header.js";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h1>React App</h1>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
