import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// components
import Header from "./layout/Header.js";
import Dashboard from "./routines/Dashboard";
import Alerts from "./layout/Alerts";
import EmailForm from "./routines/EmailForm";
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

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              {/* <Header /> */}
              <Alerts />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
