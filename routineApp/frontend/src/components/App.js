import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import Header from "./layout/Header.js";
import Dashboard from "./routines/Dashboard";
import Alerts from "./layout/Alerts";
// react redux store
import { Provider } from "react-redux";
import store from "../store";

// react-alert
import { transitions, positions, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-mui";
import AlertTemplate from "react-alert-template-mui";

// Alert options config
const alertOptions = {
  position: positions.TOP_RIGHT,
  timeout: 3000,
  offset: "30px",
  transition: transitions.SCALE,
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...alertOptions}>
              <Fragment>
                <Header />
                <Alerts />
                <Dashboard />
              </Fragment>
            </AlertProvider>
          </Provider>
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
