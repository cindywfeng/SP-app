import React, { Fragment } from "react";
import Form from "./Form";
import ItemForm from "./ItemForm";

import Routines from "./Routines";
import Items from "./Items";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <ItemForm />
      <Routines />
      <Items />
    </Fragment>
  );
}
