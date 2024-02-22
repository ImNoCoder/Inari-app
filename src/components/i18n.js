import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import language translation files (more on this in the next step)
import en from './locale/en/translation.json';
//import tr from './locale/tr/translation.json';
//import ru from './locale/ru/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      //ru: { translation: en }, 
      //tr: { translation: tr },
      en: {translation: en}
    },
    lng: "en", // Default language
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;