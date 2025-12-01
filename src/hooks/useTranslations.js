import { useTranslation } from "react-i18next";

export const useTranslations = () => {
  const { t, i18n } = useTranslation();

  return {
    t,
    language: i18n.language,
    changeLanguage: (lng) => {
      i18n.changeLanguage(lng);
      localStorage.setItem("language", lng);
    },
  };
};

export default useTranslations;
