import axios from "axios";

// messages
import { createMessage } from "./messages";

import { GET_ITEMS, DELETE_ITEM, ADD_ITEM, RETURN_ERRORS } from "./types";

// GET ITEMS
export const getItems = () => (dispatch) => {
  axios
    .get("/api/items/")
    .then((res) => {
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE ITEM
export const deleteItem = (id) => (dispatch) => {
  axios
    .delete(`/api/items/${id}/`)
    .then((res) => {
      dispatch(createMessage({ deleteItem: "Item Deleted" }));
      dispatch({
        type: DELETE_ITEM,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD ITEM
export const addItem = (item) => (dispatch) => {
  axios
    .post("/api/items/", item)
    .then((res) => {
      dispatch(createMessage({ addItem: "Item Added" }));

      dispatch({
        type: ADD_ITEM,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
