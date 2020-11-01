import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import appConfig from "./app/i18n/app.config";

const resources = {
  en: {
    translation: {
      screen: "Screen {{ order }}",
      tab: "Tab {{ order }}",
      change_language_english: "In english",
      change_language_vietnamese: "In vietnamese",
    },
  },
  vi: {
    translation: {
      screen: "Screen {{ order }}",
      tab: "Tab {{ order }}",
      change_language_english: "In english",
      change_language_vietnamese: "In vietnamese",
    },
  },
  // fr: {
  //   translation: {
  //     screen: 'Écran {{ order }}',
  //     tab: 'Onglet {{ order }}',
  //     change_language_english: 'En anglais',
  //     change_language_french: 'En français',
  //   },
  // },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "vi",
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    initImmediate: false,
  })
  .then(() => {
    console.log("i18n done!");
    appConfig(i18n);
  });

export default i18n;
