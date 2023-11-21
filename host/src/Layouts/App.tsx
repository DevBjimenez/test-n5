import React, { Suspense, lazy, useEffect, useState } from "react";
import Header from "../Components/Header";
import Body from "../Components/Body";
import { LANGUAGES } from "../config/types";
import i18n from "../config/i18n";
import { LanguageEvents } from "broadcast-channel-bj/dist/index";
import { BroadcastChannel } from "broadcast-channel";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
const HarryPotterWrapper = lazy(
  () => import("../Components/HarryPotterWrapper")
);
const RickyMortyWrapper = lazy(() => import("../Components/RickyMortyWrapper"));

function App() {
  const [language, setLanguage] = useState(LANGUAGES.EN);
  const languageChannel = new BroadcastChannel("language");
  const handleChangeLanguage = () => {
    i18n.changeLanguage(language);
    languageChannel.postMessage({
      type: LanguageEvents.LANGUAGE_CHANGED,
      payload: language,
    });
  };

  useEffect(() => {
    handleChangeLanguage();
  }, [language]);

  return (
    <BrowserRouter>
      <main>
        <Header language={language} handleLanguage={setLanguage}></Header>
        <Body>
          <Suspense fallback={<p>Loading..</p>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rick" element={<RickyMortyWrapper />}></Route>
              <Route path="/harry" element={<HarryPotterWrapper />}></Route>
            </Routes>
          </Suspense>
        </Body>
      </main>
    </BrowserRouter>
  );
}

export default App;
