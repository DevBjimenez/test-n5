import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Body from "./Body";

test("should render children element", () => {
  render(
    <BrowserRouter>
      <Body>
        <h1>Hola mundo</h1>
      </Body>
    </BrowserRouter>
  );
  expect(screen.getByRole("heading", { name: "Hola mundo" })).toBeTruthy();
});
