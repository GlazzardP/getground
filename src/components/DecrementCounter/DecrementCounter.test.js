import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import DecrementCounter from "./DecrementCounter";

describe("DecrementCounter tests", () => {
  it("should render", () => {
    expect(render(<Provider store={store}><DecrementCounter /></Provider>)).toBeTruthy();
  });
});
