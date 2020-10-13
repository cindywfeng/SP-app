import axios from "axios";

import { GET_ROUTINES } from "./types";

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
