import { render, screen } from '@testing-library/react';
import App from './App';

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