import React from "react";
import { render, screen } from '../../testing-utils';

describe("IncrementCounter tests", () => {
  it("should render", () => {
    expect(render(<IncrementCounter />)).toBeTruthy();
  });
});

