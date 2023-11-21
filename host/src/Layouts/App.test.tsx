import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import App from "./App";
import { LANGUAGES } from "../config/types";

test("renders App component", () => {
  render(<App />);
  const languageElement = screen.getByText(/Language/i);
  expect(languageElement).toBeInTheDocument();
});

test("should change the select language label", () => {
  render(<App />);
  const languageSelect = screen.getByRole("combobox");

  fireEvent.change(languageSelect, { target: { value: LANGUAGES.ES } });
  const label = screen.getByTestId("dropdownLabel");
  expect(label.textContent).toMatch(/idioma/i);
});
