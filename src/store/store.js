import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counter";
import { filterReducer } from "./filter";
import { libraryReducer } from "./library";

export const store = createStore(
  combineReducers({
    library: libraryReducer,
    counter: counterReducer,
    filter: filterReducer,
  })
);
