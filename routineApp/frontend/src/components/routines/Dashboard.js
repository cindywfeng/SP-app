import React, { Fragment, useState } from "react";
import Form from "./Form";
import Routines from "./Routines";
import Items from "./Items";

import ItemForm from "./ItemForm";
import RoutineForm from "./RoutineForm";
import EmailForm from "./EmailForm";

import Modal from "react-modal";

import "./Dashboard.css";

Modal.setAppElement("#app");

export default function Dashboard() {
  // modal

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  // modal 2

  const [modalIsOpen1, setIsOpen1] = React.useState(false);
  function openModal1() {
    setIsOpen1(true);
  }

  function afterOpenModal1() {
    // references are now sync'd and can be accessed.
  }

  function closeModal1() {
    setIsOpen1(false);
  }

  return (
    <Fragment>
      <div className="top-area">
        <div className="extension"></div>
        <div className="wave">
          {" "}
          <svg
            id="wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,192L80,170.7C160,149,320,107,480,112C640,117,800,171,960,186.7C1120,203,1280,181,1360,170.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="header-area">
          <h1>
            Welcome, name
            <img src="https://www.flaticon.com/svg/static/icons/svg/2917/2917242.svg" />
          </h1>
        </div>
        <div className="menu-area">
          {/*------------------------ add rotuine---------------------- */}

          <button onClick={openModal}>
            <img src="https://www.flaticon.com/svg/static/icons/svg/1237/1237946.svg" />
            Add Routine
          </button>

          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
            <button onClick={closeModal} id="close-btn">
              <img src="https://www.flaticon.com/svg/static/icons/svg/1828/1828774.svg" />
            </button>
            <div>
              <RoutineForm />
            </div>
          </Modal>
          {/*------------------------ add skincare---------------------- */}
          <button onClick={openModal1}>
            <img src="https://www.flaticon.com/svg/static/icons/svg/1237/1237946.svg" />
            Add Skincare
          </button>

          <Modal
            isOpen={modalIsOpen1}
            onAfterOpen={afterOpenModal1}
            onRequestClose={closeModal1}
            contentLabel="Example Modal"
          >
            <button onClick={closeModal1} id="close-btn">
              <img src="https://www.flaticon.com/svg/static/icons/svg/1828/1828774.svg" />
            </button>
            <div>
              <ItemForm />
            </div>
          </Modal>
        </div>
      </div>
      <div className="content-area">
        {/* <EmailForm /> */}
        {/* <RoutineForm /> */}
        {/* <ItemForm /> */}
        <Routines />
      </div>
    </Fragment>
  );
}
