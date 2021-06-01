import { render, screen } from "./testing-utils";
import App from "./App";
import { incrementCounter } from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
