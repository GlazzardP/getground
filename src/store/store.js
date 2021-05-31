import { createStore, combineReducers} from "redux";
import { counterReducer } from "./counter"
import { filterReducer } from "./filter"



export const store = createStore(combineReducers({
    counter: counterReducer,
    filter: filterReducer,
}))

