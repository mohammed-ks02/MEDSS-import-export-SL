import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, useTranslation } from 'react-i18next';
import React, { createContext, useContext, ReactNode } from 'react';

// Import translation files
import enCommon from '../locales/en/common.json';
import esCommon from '../locales/es/common.json';
import frCommon from '../locales/fr/common.json';

// Define the resources structure
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

// Initialize i18next with detection plugin
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultLng: 'es',
    fallbackLng: 'es',
    defaultNS: 'common',
    ns: ['common'],
    
    // Language detection configuration with localStorage/cookie persistence
    detection: {
      order: ['localStorage', 'cookie', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
      lookupLocalStorage: 'language',
      lookupCookie: 'language',
      cookieMinutes: 160,
      cookieOptions: {
        path: '/',
        sameSite: 'strict'
      }
    },

    interpolation: {
      escapeValue: false // React already does escaping
    },

    react: {
      useSuspense: false
    },

    // Debug mode - can be disabled in production
    debug: false
  });

// Helper function for translation
export const t = (key: string, options?: any): string => {
  return i18n.t(key, options);
};

// Helper function to change language
export const changeLanguage = async (lng: string): Promise<void> => {
  await i18n.changeLanguage(lng);
  // Update URL parameter for shareable links
  if (typeof window !== 'undefined') {
    const url = new URL(window.location.href);
    url.searchParams.set('lng', lng);
    window.history.replaceState({}, '', url.toString());
  }
};

// Helper function to get current language
export const getCurrentLanguage = (): string => {
  return i18n.language;
};

// Context for language provider
interface LanguageContextType {
  language: string;
  changeLanguage: (lng: string) => Promise<void>;
  t: (key: string, options?: any) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Language provider component props
interface LanguageProviderProps {
  children: ReactNode;
}

// Language Provider component to wrap the app
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  
  // Initialize with URL parameter, then server-side detected language if available
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check URL parameter first (for shareable links)
      const urlParams = new URLSearchParams(window.location.search);
      const urlLanguage = urlParams.get('lng');
      
      let targetLanguage: string | null = null;
      
      // Priority: URL parameter > localStorage > current i18n language
      if (urlLanguage && ['en', 'es', 'fr'].includes(urlLanguage)) {
        targetLanguage = urlLanguage;
      } else {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && savedLanguage !== i18n.language) {
          targetLanguage = savedLanguage;
        }
      }
      
      if (targetLanguage && targetLanguage !== i18n.language) {
        i18n.changeLanguage(targetLanguage);
        // Persist the language choice
        localStorage.setItem('language', targetLanguage);
        document.cookie = `language=${targetLanguage}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Strict`;
      }
    }
  }, [i18n]);
  
  // Listen for navigation events to maintain language consistency
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleNavigation = () => {
        // Check if language in URL matches current language
        const urlParams = new URLSearchParams(window.location.search);
        const urlLanguage = urlParams.get('lng');
        
        if (urlLanguage && ['en', 'es', 'fr'].includes(urlLanguage) && urlLanguage !== i18n.language) {
          i18n.changeLanguage(urlLanguage);
          localStorage.setItem('language', urlLanguage);
          document.cookie = `language=${urlLanguage}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Strict`;
        } else if (!urlLanguage && i18n.language) {
          // Add current language to URL if not present
          const url = new URL(window.location.href);
          url.searchParams.set('lng', i18n.language);
          window.history.replaceState({}, '', url.toString());
        }
      };
      
      // Listen for popstate events (back/forward navigation)
      window.addEventListener('popstate', handleNavigation);
      
      // For Astro, we can also listen for before-swap event if using view transitions
      document.addEventListener('astro:before-swap', handleNavigation);
      
      // Cleanup
      return () => {
        window.removeEventListener('popstate', handleNavigation);
        document.removeEventListener('astro:before-swap', handleNavigation);
      };
    }
  }, [i18n]);

  const contextValue: LanguageContextType = {
    language: i18n.language,
    changeLanguage: async (lng: string) => {
      await i18n.changeLanguage(lng);
      // Persist language choice
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', lng);
        document.cookie = `language=${lng}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Strict`;
        
        // Update URL parameter for shareable links
        const url = new URL(window.location.href);
        url.searchParams.set('lng', lng);
        window.history.replaceState({}, '', url.toString());
      }
    },
    t: (key: string, options?: any) => i18n.t(key, options)
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Export the configured i18n instance
export default i18n;
