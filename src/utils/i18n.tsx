// src/utils/i18n.tsx

import i18n from 'i18next';
// 'I18nextProvider' has been removed as it was unused.
import { initReactI18next, useTranslation } from 'react-i18next';
// 'React' has been removed as it is not needed in scope for modern JSX.
import { createContext, useContext, type ReactNode } from 'react';

// These imports will now work correctly with `resolveJsonModule: true` in tsconfig.json
import enTranslations from '../../public/locales/en/translation.json';
import esTranslations from '../../public/locales/es/translation.json';
import frTranslations from '../../public/locales/fr/translation.json';

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
      en: { translation: enTranslations },
      es: { translation: esTranslations },
      fr: { translation: frTranslations },
    },
  lng: 'es',
  fallbackLng: 'es',
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
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default i18n;
