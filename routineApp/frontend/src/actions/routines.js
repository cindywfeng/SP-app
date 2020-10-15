import axios from "axios";

// messages
import { createMessage } from "./messages";

import { GET_ROUTINES, DELETE_ROUTINE, ADD_ROUTINE, GET_ERRORS } from "./types";

// GET ROUTINES
export const getRoutines = () => (dispatch) => {
  axios
    .get("/api/routines/")
    .then((res) => {
      dispatch({
        type: GET_ROUTINES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE ROUTINE
export const deleteRoutine = (id) => (dispatch) => {
  axios
    .delete(`/api/routines/${id}/`)
    .then((res) => {
      dispatch(createMessage({ deleteRoutine: "Skincare Routine Deleted" }));

      dispatch({
        type: DELETE_ROUTINE,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD ROUTINE
export const addRoutine = (routine) => (dispatch) => {
  axios
    .post("/api/routines/", routine)
    .then((res) => {
      dispatch(createMessage({ addRoutine: "Skincare Routine Added" }));

      dispatch({
        type: ADD_ROUTINE,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};
