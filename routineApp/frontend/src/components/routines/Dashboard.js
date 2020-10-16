import React, { Fragment } from "react";
import Form from "./Form";
import Routines from "./Routines";
import Items from "./Items";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Routines />
      <Items />
    </Fragment>
  );
}
