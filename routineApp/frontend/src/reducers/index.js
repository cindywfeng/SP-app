import { combineReducers } from "redux";
import routines from "./routines";
import items from "./items";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({ routines, items, errors, messages, auth });
