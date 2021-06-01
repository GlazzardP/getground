import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Filters from "./Filters";

describe("Filters tests", () => {
  it("should render", () => {
    expect(
      render(
        <Provider store={store}>
          <Filters />
        </Provider>
      )
    ).toBeTruthy();
  });
});
