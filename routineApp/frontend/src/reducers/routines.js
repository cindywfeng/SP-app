import { GET_ROUTINES, DELETE_ROUTINE } from "../actions/types.js";

const initialState = {
  routines: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ROUTINES:
      return { ...state, routines: action.payload };
    case DELETE_ROUTINE:
      return {
        ...state,
        routines: state.routines.filter(
          (routine) => routine.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
