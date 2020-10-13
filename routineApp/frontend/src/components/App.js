import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

// components
import Header from "./layout/Header.js";
import Dashboard from "./routines/Dashboard";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <Dashboard />
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
