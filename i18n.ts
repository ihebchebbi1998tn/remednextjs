import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // Import the backend plugin

i18n
  .use(Backend) // Add backend to load translation files
  .use(initReactI18next) // Integrate with React
  .init({
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation is missing
    backend: {
      // Path to your translation files
      loadPath: '/locales/{{lng}}/translation.json', // Adjust path if necessary
    },
    interpolation: {
      escapeValue: false, // No need to escape values in React
    },
  });

export default i18n;
