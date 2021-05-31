import React from "react";
import { render, screen } from '../../testing-utils';
import Counter from "./Counter";

describe("Counter tests", () => {
  it("should render", () => {
    expect(render(<Counter />)).toBeTruthy();
  });
});
