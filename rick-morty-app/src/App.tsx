import React, { useEffect } from "react";

import "./App.css";
import { BroadcastChannel } from "broadcast-channel";
import i18n from "./config/i18n";
import { useTranslation } from "react-i18next";
import CharacterList from "./components/CharacterList";

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
      <CharacterList />
    </div>
  );
}

export default App;
