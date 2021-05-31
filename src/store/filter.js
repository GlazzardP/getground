const initialState = { 
    authorName: "",
    ID: 1,
    bookTitle: "",

}

export const filterReducer = (state = initialState, action) => { 
    if (action.type === "authorChanged"){ 
        return {...state, authorName: action.payload}
    }
    else if (action.type === "idChnaged") { 
        return {...state, ID: action.payload}
    }
    else if (action.type === "pageDecrease") { 
        return {...state, bookTitle: action.payload}
    }
    return state;
}

//  const filter = createStore(filterReducer)