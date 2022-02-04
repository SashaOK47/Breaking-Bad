import { combineReducers } from "redux";
import characters from "./characters";
import quotes from "./quotes";

const reducers = combineReducers({ characters, quotes });
export default reducers;
