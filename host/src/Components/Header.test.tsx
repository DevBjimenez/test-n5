import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Header from "./Header";
import { LANGUAGES } from "../config/types";
import { MemoryRouter } from "react-router";

test("renders App component", () => {
  const mockHandleLanguage = jest.fn();
  render(
    <MemoryRouter>
      <Header handleLanguage={mockHandleLanguage} />
    </MemoryRouter>
  );

  const homeLink = screen.getByRole("link", { name: "Inicio" });
  const harryPotterLink = screen.getByRole("link", { name: "Harry Potter" });
  const rickMortyLink = screen.getByRole("link", { name: "Ricky morty" });

  expect(homeLink).toBeInTheDocument();
  expect(harryPotterLink).toBeInTheDocument();
  expect(rickMortyLink).toBeInTheDocument();
});

test("should change the select language label", () => {
  const mockHandleLanguage = jest.fn();
  render(
    <MemoryRouter>
      <Header handleLanguage={mockHandleLanguage} />
    </MemoryRouter>
  );
  const languageSelect = screen.getByRole("combobox");

  fireEvent.change(languageSelect, { target: { value: LANGUAGES.ES } });
  const label = screen.getByTestId("dropdownLabel");
  expect(label.textContent).toEqual("idioma");
});
