import React from "react";
import { render } from "@testing-library/react";
import New from "./New";

describe("New tests", () => {
  it("should render", () => {
    expect(render(<New />)).toBeTruthy();
  });
});
