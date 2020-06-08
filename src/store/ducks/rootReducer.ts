import { combineReducers } from "redux";

import characters from "./characters";
import series from "./series";

export default () =>
  combineReducers({
    characters,
    series,
  });
