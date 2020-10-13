import { GET_ROUTINES } from "../actions/types.js";

const initialState = {
  routines: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ROUTINES:
      return { ...state, routines: action.payload };
    default:
      return state;
  }
}
