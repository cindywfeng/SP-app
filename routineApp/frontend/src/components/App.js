import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
// Router
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// components
import Header from "./layout/Header.js";
import Dashboard from "./routines/Dashboard";
import Alerts from "./layout/Alerts";
import Register from "./accounts/Register";
import Login from "./accounts/Login";
import PrivateRoute from "./common/PrivateRoute";

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
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Fragment>
            <Router>
              <Header />
              <Alerts />
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </Router>
          </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
