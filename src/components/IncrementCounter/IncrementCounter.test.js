import React from "react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { render } from "@testing-library/react";
import IncrementCounter from "./IncrementCounter";

describe("IncrementCounter tests", () => {
  it("should render", () => {
    expect(render(<Provider store={store}><IncrementCounter /></Provider>)).toBeTruthy();
  });
});




// describe('actions', () => {
//   it('should create an action to add a todo', () => {
//     const text = 'Finish docs'
//     const expectedAction = {
//       type: types.ADD_TODO,
//       text
//     }
//     expect(actions.addTodo(text)).toEqual(expectedAction)
//   })
// })


//   const dispatch = useDispatch();

//   const onClick = () => {
//     dispatch({
//       type: "INCREMENT",
//     });
//   };

// describe('actions', () => {
//   it('should add one to page number', () => {
//     const pageNo = 1;
//     const expectedResult = {
//       type: types.ADD_TODO,
//       text
//     }
//     expect(actions.addTodo(text)).toEqual(expectedAction)
//   })
// })