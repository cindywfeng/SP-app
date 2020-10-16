import React, { Fragment } from "react";
import Form from "./Form";
import Routines from "./Routines";
import Items from "./Items";
import "./Dashboard.css";
import ItemForm from "./ItemForm";
import RoutineForm from "./RoutineForm";

export default function Dashboard() {
  return (
    <Fragment>
      {/* <Form /> */}
      <RoutineForm />
      {/* <ItemForm /> */}
      <Routines />
      <Items />
    </Fragment>
  );
}
