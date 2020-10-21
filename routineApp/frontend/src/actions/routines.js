import axios from "axios";

// messages
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_ROUTINES, DELETE_ROUTINE, ADD_ROUTINE } from "./types";

// GET ROUTINES
export const getRoutines = () => (dispatch, getState) => {
  axios
    .get("/api/routines/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_ROUTINES,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE ROUTINE
export const deleteRoutine = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/routines/${id}/`, tokenConfig(getState))
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
export const addRoutine = (routine) => (dispatch, getState) => {
  axios
    .post("/api/routines/", routine, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addRoutine: "Skincare Routine Added" }));

      dispatch({
        type: ADD_ROUTINE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
