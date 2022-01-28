import { combineReducers } from "redux";
import number from "./number";
import persons from "./persons";

const reducers = combineReducers({ number, persons });
export default reducers;
