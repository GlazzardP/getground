import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";

import InputField from "./InputField";

describe("InputField tests", () => {
  it("should render", () => {
    expect(
      render(
        <Provider store={store}>
          <InputField />
        </Provider>
      )
    ).toBeTruthy();
  });
});
