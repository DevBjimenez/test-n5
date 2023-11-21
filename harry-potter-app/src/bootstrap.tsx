import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export const GeneralContext = createContext<{
  language: string;
  changeLanguage?: () => void;
}>({
  language: "",
});

// Mount function to start up the app

interface IMount {
  language: string;
}
const mount = (el: HTMLElement, { language }: IMount) => {
  const root = ReactDOM.createRoot(el);
  root.render(
    <GeneralContext.Provider value={{ language }}>
      <App />
    </GeneralContext.Provider>
  );
};

// if we are in dev mode and isolation
//call mount inmediatly

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#harry-dev") as HTMLElement;
  if (devRoot) {
    mount(devRoot, { language: "en" });
  }
}

export { mount };
