import React from "react";
import { render, screen } from '../../testing-utils';
import DecrementCounter from "./DecrementCounter";

describe("DecrementCounter tests", () => {
  it("should render", () => {
    expect(render(<DecrementCounter />)).toBeTruthy();
  });
});
