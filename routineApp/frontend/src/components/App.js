import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

// components
import Header from "./layout/Header.js";
import Dashboard from "./routines/Dashboard";
// react redux store
import { Provider } from "react-redux";
import store from "../store";

// toastify [ does not work atm]
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// react-alert
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-mui";

// Alert options config
const options = {
  position: positions.TOP_RIGHT,
  timeout: 3000,
  offset: "30px",
  transition: transitions.SCALE,
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate}>
          <Fragment>
            <ToastContainer />
            <Header />
            <Dashboard />
          </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
