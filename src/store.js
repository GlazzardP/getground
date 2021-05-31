import { createStore } from "redux";

const initialState = { 
    itemsPerPage: 20,
    pageNo: 1,
}

const reducer = (state = initialState, action) => { 
    return state;
}

export const store = createStore(reducer);