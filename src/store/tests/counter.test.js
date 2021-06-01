// import CounterReducer from "../../reducers/CounterReducer";
import CounterReducer from "../counter";

// const defaultState = { counterValue:5, values:[] }
// describe(“Reducer”,()=>{
//    test(“should return default state when state is not undefined”,()=>{
//       expect(CounterReducer(undefined       {type:”ACTION_TYPE”})).toEqual(defaultState);
// })

const initState = {
   count: 0,
}

describe("Reducer",() => {
   test("should return default state when state is not undefined",() => {
      expect(CounterReducer(undefined,        
        {type: "ACTION_TYPE",})).toEqual(defaultState);
})