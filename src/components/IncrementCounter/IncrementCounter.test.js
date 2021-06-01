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
