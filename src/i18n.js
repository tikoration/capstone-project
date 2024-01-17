import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HTTPApi from "i18next-http-backend";

const selectedLanguage = "ge" || localStorage.getItem("selectedLanguage");

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HTTPApi)
  .init({
    fallbackLng: "en",
    lng: selectedLanguage,
    interpolation: {
      escapeValue: false,
    },
  });

i18next.on("languageChanged", (lng) => {
  localStorage.setItem("selectedLanguage", lng);
});

export default i18next;
