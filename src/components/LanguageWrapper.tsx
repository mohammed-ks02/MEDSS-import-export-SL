import React from 'react';
import { LanguageProvider } from '../utils/i18n.jsx';
import i18n from '../utils/i18n.jsx';

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
      // Check saved language first
      const savedLanguage = localStorage.getItem('language');
      
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
        
        // Save the detected/default language
        localStorage.setItem('language', targetLanguage);
      }
      
      // Set the language if it's different from current
      if (i18n.language !== targetLanguage) {
        i18n.changeLanguage(targetLanguage);
      }
    }
  }, [initialLanguage]);

  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
};

export default LanguageWrapper;
