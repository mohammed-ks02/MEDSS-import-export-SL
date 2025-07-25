import React from 'react';
import { useLanguage } from '../../utils/i18n.jsx';

/**
 * Example React component demonstrating how to use the LanguageProvider context
 * This component can be used in Astro pages like: <LanguageExample client:load />
 */
const LanguageExample: React.FC = () => {
  const { language, changeLanguage, t } = useLanguage();

  const handleLanguageChange = (newLanguage: string) => {
    changeLanguage(newLanguage);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">
        {t('language.current')}: {language}
      </h3>
      
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => handleLanguageChange('en')}
          className={`px-3 py-1 rounded ${
            language === 'en' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          English
        </button>
        <button
          onClick={() => handleLanguageChange('es')}
          className={`px-3 py-1 rounded ${
            language === 'es' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Español
        </button>
        <button
          onClick={() => handleLanguageChange('fr')}
          className={`px-3 py-1 rounded ${
            language === 'fr' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Français
        </button>
      </div>
      
      <div className="text-sm text-gray-600">
        <p>{t('language.description')}</p>
        <p>{t('navigation.home')}</p>
        <p>{t('navigation.about')}</p>
        <p>{t('navigation.contact')}</p>
      </div>
    </div>
  );
};

export default LanguageExample;
