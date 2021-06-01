import counterReducer from "../counter.js";

const defaultState = {
  count: 0,
};

describe("Reducer", () => {
  test("should return default state when state is not undefined", () => {
    expect(counterReducer(undefined, {
        type: "INCREMENT",
      })
    ).toEqual(defaultState);
  });
});
