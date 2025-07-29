import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, useTranslation } from 'react-i18next';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Import translation files
import enCommon from '../locales/en/common.json';
import esCommon from '../locales/es/common.json';
import frCommon from '../locales/fr/common.json';

const resources = {
  en: {
    common: enCommon
  },
  es: {
    common: esCommon
  },
  fr: {
    common: frCommon
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    defaultNS: 'common',
    ns: ['common'],
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'lang'
    },

    interpolation: {
      escapeValue: false
    },

    react: {
      useSuspense: false
    }
  });

// Create Language Context
const LanguageContext = createContext();

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const { t, i18n: i18nInstance } = useTranslation('common');
  const [language, setLanguage] = useState(i18nInstance.language || 'en');

  const changeLanguage = (newLanguage) => {
    i18nInstance.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', newLanguage);
    }
  };

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setLanguage(lng);
    };

    i18nInstance.on('languageChanged', handleLanguageChange);

    return () => {
      i18nInstance.off('languageChanged', handleLanguageChange);
    };
  }, [i18nInstance]);

  const value = {
    language,
    changeLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    // During SSR or when used outside provider, return fallback
    const { t, i18n: i18nInstance } = useTranslation('common');
    const [language, setLanguage] = useState('es'); // Default language
    
    const changeLanguage = (newLanguage) => {
      i18nInstance.changeLanguage(newLanguage);
      setLanguage(newLanguage);
      if (typeof window !== 'undefined') {
        localStorage.setItem('lang', newLanguage);
      }
    };
    
    return {
      language,
      changeLanguage,
      t
    };
  }
  return context;
};

export default i18n;
