import React from "react";
import { render, screen } from '../../testing-utils';
import Card from "./Card";

describe("Card tests", () => {
  it("should render", () => {
    expect(render(<Card />)).toBeTruthy();
  });
});
