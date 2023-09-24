// src/i18n/i18n.ts

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation resources or language files
import enTranslation from './locales/en.json'; // Example English translations
// Import translations for other languages as needed

// Define the translation resources
const resources = {
  en: {
    translation: enTranslation,
  },
  // Add more languages and translations as needed
};

i18n
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes content
    },
  });

export default i18n;
