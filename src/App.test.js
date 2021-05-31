import { render, screen } from '@testing-library/react';
import App from './App';
import { incrementCounter } from "./App"

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// import setPageNo from  "./App"
// test("Page number increments by 1", () => { 
//   // const res = formatTags("MEDIUM")
//   expect(res).toBe("Medium")

// })


// const incrementCounter = require('./counter')


test("2 + 2 to be 4", () => { 
  expect(2, 2).toBe(4)

})