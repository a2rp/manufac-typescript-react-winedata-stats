import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the TypeScript wine statistics dashboard", () => {
  render(<App />);
  expect(screen.getByText("Wine data, made easier to compare.")).toBeInTheDocument();
  expect(screen.getByText("Flavanoids")).toBeInTheDocument();
  expect(screen.getByText("Gamma")).toBeInTheDocument();
});
