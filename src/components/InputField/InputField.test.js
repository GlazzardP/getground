import React from "react";
// import { render } from "@testing-library/react";
import { render, screen } from '../../testing-utils';

import InputField from "./InputField";

describe("InputField tests", () => {
  it("should render", () => {
    expect(render(<InputField />)).toBeTruthy();
  });
});
