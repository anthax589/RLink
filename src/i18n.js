import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./locales/translations.json";

// Convert translations to i18next format
const resources = {
  ja: { translation: translations.ja },
  en: { translation: translations.en },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "ja",
  fallbackLng: "ja",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
