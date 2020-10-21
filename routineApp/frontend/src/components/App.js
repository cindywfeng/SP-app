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
import Login1 from "./accounts/Login1";
import Register1 from "./accounts/Register1";
import PrivateRoute from "./common/PrivateRoute";
// react redux store
import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

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
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Alerts />

              <div className="container">
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />

                  <Route path="/register" component={Register1} />
                  <Route path="/login" component={Login1} />
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
