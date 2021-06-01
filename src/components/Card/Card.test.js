import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Card from "./Card";

describe("Card tests", () => {
  it("should render", () => {
    expect(render(<Provider store={store}><Card /></Provider>)).toBeTruthy();
  });
});
