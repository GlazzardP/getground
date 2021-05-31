import { createStore } from "redux";

const initState= { 
    count: 0,
}
export const counterReducer = (state = initState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state, count: state.count + 1
        }
      case 'DECREMENT':
        return {
          ...state, count: state.count - 1
        }
          case 'RESET':
        return 0;
      default:
        return state;
    }
  }