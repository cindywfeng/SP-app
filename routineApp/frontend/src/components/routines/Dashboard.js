import React, { Fragment } from "react";
import Form from "./Form";
import Routines from "./Routines";
import Items from "./Items";

import ItemForm from "./ItemForm";
import RoutineForm from "./RoutineForm";
import EmailForm from "./EmailForm";

import "./Dashboard.css";

export default function Dashboard() {
  return (
    <Fragment>
      <div className="header">
        <h1>
          Welcome, name{" "}
          <img src="https://www.flaticon.com/svg/static/icons/svg/2917/2917242.svg" />
        </h1>
      </div>
      {/* <EmailForm /> */}
      {/* <RoutineForm /> */}
      {/* <ItemForm /> */}
      <Routines />
    </Fragment>
  );
}
