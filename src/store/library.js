const initState = {
  books: {},
};

export const libraryReducer = (state = initState, action) => {
  switch (action.type) {
    case "listLibrary":
      return {
        ...state,
        books: action.payload,
      };
  }
  return state;
};
