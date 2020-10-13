import axios from "axios";

import { GET_ROUTINES, DELETE_ROUTINE } from "./types";

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

// DELETE ROUTINES
export const deleteRoutine = (id) => (dispatch) => {
  axios
    .get(`/api/routines/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_ROUTINE,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
