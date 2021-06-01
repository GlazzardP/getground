import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Navbar from "./Navbar";

describe("Navbar tests", () => {
  it("should render", () => {
    expect(
      render(
        <Provider store={store}>
          <Navbar />
        </Provider>
      )
    ).toBeTruthy();
  });
});
