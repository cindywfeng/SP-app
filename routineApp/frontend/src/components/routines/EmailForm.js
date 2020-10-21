import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getRoutines } from "../../actions/routines";

import "./EmailForm.css";
import Routines from "./Routines";

export class EmailForm extends Component {
  componentDidMount() {
    this.props.getRoutines();
  }

  render() {
    let lastRoutine = JSON.stringify(
      this.props.routines[this.props.routines.length - 1],
      [
        "date",
        "timeofday",
        "itemid1",
        "itemid2",
        "itemid3",
        "itemid4",
        "itemid5",
        "itemid6",
        "itemid7",
        "comment",
      ],
      "\t"
    );

    let lastRoutine1 = JSON.stringify(
      this.props.routines[this.props.routines.length - 2],
      [
        "date",
        "timeofday",
        "itemid1",
        "itemid2",
        "itemid3",
        "itemid4",
        "itemid5",
        "itemid6",
        "itemid7",
        "comment",
      ],
      "\t"
    );

    // console.log(lastRoutine);
    // remove the curcly brackets frfom string + quotations marks
    let updatelastRoutine = "";
    const replacelastRoutine = () => {
      if (lastRoutine) {
        return (updatelastRoutine = lastRoutine
          .replace(/[{}]/g, "")
          .replace(/\"/g, "")
          .replace(/\,/g, ""));
      } else {
        // console.log("im undefined atm");
        return;
      }
    };

    replacelastRoutine();

    // console.log(replacelastRoutine());
    // add routine text to lastRoutine
    let msglastRoutine =
      "A report of your latest recorded skincare routine:" + updatelastRoutine;

    // console.log(msglastRoutine);

    const setAttribute = () => {
      document
        .getElementById("message")
        .setAttribute("defaultValue", "{msglastRoutine}");
    };

    return (
      <div>
        <div className="form-area3">
          <div className="left-space"></div>
          <div
            id="middle-space1"
            className="animate__animated animate__backInLeft"
          >
            <h1 className="title">
              Send a report of your latest skincare routine to your e-mail
            </h1>
            <form method="POST" action="http://localhost:3000/send">
              <div className="form-wrapper">
                <div className="form-field1">
                  <label>Name</label> <br />
                  <input
                    placeholder="Jane"
                    className="input"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="form-field1">
                  <label>Email Address</label> <br />
                  <input
                    placeholder="jane.doe@gmail.com"
                    className="input"
                    type="email"
                    name="email"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    defaultValue={`
                    comment: "9"
                    itemid1: "10"
                    itemid2: "11"
                    itemid3: "12"
                    itemid4: "13"
                    itemid5: "14"
                    itemid6: "15"
                    itemid7: "16"
                    timeofday: "morning" `}
                  ></textarea>
                </div>
              </div>
              <button className="submit-btn1" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="right-space"></div>
        </div>
      </div>
    );
  }
}
// the middle is the reducer
const mapstateToProps = (state) => ({
  routines: state.routines.routines,
});

export default connect(mapstateToProps, { getRoutines })(EmailForm);
