// src/utils/i18n.tsx

import i18n from 'i18next';
// 'I18nextProvider' has been removed as it was unused.
import { initReactI18next, useTranslation, I18nextProvider } from 'react-i18next';
// 'React' has been removed as it is not needed in scope for modern JSX.
import { createContext, useContext, type ReactNode } from 'react';

// Import from src/locales for consistency
import enTranslations from '../locales/en/common.json';
import esTranslations from '../locales/es/common.json';
import frTranslations from '../locales/fr/common.json';

interface LanguageContextType {
  language: string;
  changeLanguage: (lang: string) => void;
  t: (key: string, options?: any) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

i18n
 .use(initReactI18next)
 .init({
    resources: {
      en: { common: enTranslations },
      es: { common: esTranslations },
      fr: { common: frTranslations },
    },
    lng: 'es',
    fallbackLng: 'es',
    defaultNS: 'common',
    ns: ['common'],
    returnNull: false,
    interpolation: {
      escapeValue: false,
    },
    debug: process.env.NODE_ENV === 'development',
  });

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { t, i18n: i18nInstance } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18nInstance.changeLanguage(lang);
  };

  const contextValue: LanguageContextType = {
    language: i18nInstance.language,
    changeLanguage,
    t: (key: string, options?: any) => t(key, options),
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  const { t: i18nT, i18n: i18nInstance } = useTranslation();
  
  if (context === undefined) {
    // Fallback for cases where provider is not available yet
    console.warn('useLanguage called outside LanguageProvider, using fallback');
    return {
      language: i18nInstance?.language || 'es',
      changeLanguage: (lang: string) => {
        if (i18nInstance) {
          i18nInstance.changeLanguage(lang);
          // Also save to localStorage
          if (typeof window !== 'undefined') {
            localStorage.setItem('language', lang);
            localStorage.setItem('lang', lang);
          }
        }
      },
      t: (key: string, options?: any) => i18nT(key, options) || key,
    };
  }
  return context;
};

export default i18n;
