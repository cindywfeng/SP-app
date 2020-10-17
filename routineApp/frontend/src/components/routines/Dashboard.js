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
      <EmailForm />
      {/* <RoutineForm />
      <ItemForm /> */}
      <Routines />
      <Items />
    </Fragment>
  );
}
