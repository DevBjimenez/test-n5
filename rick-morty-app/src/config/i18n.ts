import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // inicializar react-i18next
  .init({
    resources: {
      en: {
        translation: {
          title: "Rick and morty App",
          Male: "Male",
          Female: "Female",
          genderless: "Genderless",
          Unknown: "Unknown",
          Alive: "Alive",
          Dead: "Dead",
          status: "Status",
          gender: "Gender",
        },
      },
      es: {
        translation: {
          title: "Aplicacion de Rick y morty",
          status: "Estado",
          Male: "Masculino",
          Female: "Femenino",
          genderless: "Sin genero",
          Unknown: "Desconocido",
          Alive: "Vivo",
          Dead: "Muerto",
          gender: "Genero",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
