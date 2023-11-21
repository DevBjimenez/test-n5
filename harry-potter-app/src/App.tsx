import React, { useContext, useEffect } from "react";
import "./App.css";
import { CharacterHarryList } from "./Components/CharacterHarryList";
import i18n from "./config/18n";
import { useTranslation } from "react-i18next";
import { BroadcastChannel } from "broadcast-channel";

function App() {
  const { t } = useTranslation();
  const channel = new BroadcastChannel("language");
  useEffect(() => {
    channel.onmessage = (event) => {
      i18n.changeLanguage(event.payload);
    };
  }, []);
  return (
    <div className="App">
      <h1>{t("title")}</h1>
      <CharacterHarryList />
    </div>
  );
}

export default App;
