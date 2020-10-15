import { combineReducers } from "redux";
import routines from "./routines";
import items from "./items";
import errors from "./errors";

export default combineReducers({ routines, items, errors });
