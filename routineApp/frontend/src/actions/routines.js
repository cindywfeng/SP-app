import axios from "axios";

import { GET_ROUTINES, DELETE_ROUTINE, ADD_ROUTINE } from "./types";

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
      dispatch({
        type: ADD_ROUTINE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
