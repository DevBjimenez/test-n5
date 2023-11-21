import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Mount function to start up the app
const mount = (el: HTMLElement, options: { language: string }) => {
  const root = ReactDOM.createRoot(el);
  root.render(<App />);
};

// if we are in dev mode and isolation
//call mount inmediatly

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#rick-dev") as HTMLElement;
  if (devRoot) {
    mount(devRoot, { language: "en" });
  }
}

export { mount };
