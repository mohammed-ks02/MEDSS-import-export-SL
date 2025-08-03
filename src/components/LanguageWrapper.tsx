import React from 'react';
import { LanguageProvider } from '../utils/i18n.tsx';
import { I18nextProvider } from 'react-i18next';
import i18n from '../utils/i18n.tsx';

interface LanguageWrapperProps {
  children: React.ReactNode;
  initialLanguage?: string;
}

const LanguageWrapper: React.FC<LanguageWrapperProps> = ({ 
  children, 
  initialLanguage 
}) => {
  // Initialize i18n with client-side language detection
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check saved language first (check both keys for compatibility)
      const savedLanguage = localStorage.getItem('language') || localStorage.getItem('lang');
      
      let targetLanguage: string;
      
      if (savedLanguage) {
        // Use saved language if available
        targetLanguage = savedLanguage;
      } else {
        // Detect browser language
        const supportedLanguages = ['en', 'es', 'fr'];
        const browserLanguage = navigator.language.split('-')[0]; // Get base language code
        
        if (supportedLanguages.includes(browserLanguage)) {
          targetLanguage = browserLanguage;
        } else {
          // Fall back to initial language (default)
          targetLanguage = initialLanguage || 'es';
        }
        
        // Save the detected/default language to both keys
        localStorage.setItem('language', targetLanguage);
        localStorage.setItem('lang', targetLanguage);
      }
      
      // Set the language if it's different from current
      if (i18n.language !== targetLanguage) {
        i18n.changeLanguage(targetLanguage);
      }
      
      // Listen for language changes from header
      const handleLanguageChange = (event: CustomEvent) => {
        const newLanguage = event.detail.language;
        if (i18n.language !== newLanguage) {
          i18n.changeLanguage(newLanguage);
        }
      };
      
      window.addEventListener('languageChange', handleLanguageChange as EventListener);
      
      return () => {
        window.removeEventListener('languageChange', handleLanguageChange as EventListener);
      };
    }
  }, [initialLanguage]);

  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </I18nextProvider>
  );
};

export default LanguageWrapper;
