import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { BroadcastChannel } from "broadcast-channel";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/harry/i);
  expect(linkElement).toBeInTheDocument();
});

test("should change label title", async () => {
  render(<App />);
  const channel = new BroadcastChannel("language");
  const titleValue = screen.getByRole("heading", {});
  channel.postMessage({ type: "", payload: "es" });
  await waitFor(() => {
    expect(titleValue.textContent).toEqual("Aplicacion de Harry Potter");
  });
});
