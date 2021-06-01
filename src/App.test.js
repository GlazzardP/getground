import { render } from "@testing-library/react";
import App from "./App";
import { incrementCounter } from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
