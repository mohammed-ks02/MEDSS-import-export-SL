import React, { useState, useEffect } from 'react';
import { useLanguage } from '../utils/i18n';
import { withBase } from '../utils/basePath';

const Header: React.FC = () => {
  const { t, language, changeLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileLangDropdownOpen, setIsMobileLangDropdownOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'fr', label: 'FR' }
  ];

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
    setIsLangDropdownOpen(false);
    setIsMobileLangDropdownOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsLangDropdownOpen(false);
      setIsMobileLangDropdownOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const currentLangLabel = languages.find(lang => lang.code === language)?.label || 'ES';
  const otherLanguages = languages.filter(lang => lang.code !== language);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 py-2">
      <nav className="container py-1">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href={withBase('/')} 
              className="text-2xl font-bold text-green-800 hover:text-green-600 transition-colors flex items-center"
            >
              <img 
                src={withBase('/logo.webp')} 
                alt="MED SS IMPORT & EXPORT Logo" 
                className="h-6 w-auto md:h-8 lg:h-10 object-contain transition-all duration-200" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.nextElementSibling) {
                    (target.nextElementSibling as HTMLElement).style.display = 'inline';
                  }
                }}
              />
              <span className="hidden">MED SS IMPORT & EXPORT</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a 
              href={withBase('/')} 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              {t('nav_home')}
            </a>
            <a 
              href={withBase('/products')} 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              {t('nav_products')}
            </a>
            <a 
              href={withBase('/about')} 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              {t('nav_about')}
            </a>
            <a 
              href={withBase('/contact')} 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              {t('nav_contact')}
            </a>
            
            {/* Language Dropdown */}
            <div className="relative ml-4">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLangDropdownOpen(!isLangDropdownOpen);
                }}
                className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-green-100 text-green-800 font-semibold transition flex items-center space-x-2"
              >
                <span>{currentLangLabel}</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`absolute right-0 mt-2 w-16 bg-white border border-gray-200 rounded-lg shadow-lg z-50 ${isLangDropdownOpen ? '' : 'hidden'}`}>
                {otherLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className="w-full px-4 py-2 text-left hover:bg-green-50 text-green-800 font-semibold"
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              type="button" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden mt-4 pb-4 ${isMenuOpen ? '' : 'hidden'}`}>
          <div className="flex flex-col space-y-4">
            <a 
              href={withBase('/')} 
              className="text-gray-700 hover:text-green-600 font-medium py-2"
            >
              {t('nav_home')}
            </a>
            <a 
              href={withBase('/products')} 
              className="text-gray-700 hover:text-green-600 font-medium py-2"
            >
              {t('nav_products')}
            </a>
            <a 
              href={withBase('/about')} 
              className="text-gray-700 hover:text-green-600 font-medium py-2"
            >
              {t('nav_about')}
            </a>
            <a 
              href={withBase('/contact')} 
              className="text-gray-700 hover:text-green-600 font-medium py-2"
            >
              {t('nav_contact')}
            </a>
            
            {/* Mobile Language Dropdown */}
            <div className="relative mt-2">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileLangDropdownOpen(!isMobileLangDropdownOpen);
                }}
                className="w-full px-4 py-2 rounded-lg bg-gray-100 hover:bg-green-100 text-green-800 font-semibold transition flex items-center justify-center space-x-2"
              >
                <span>{currentLangLabel}</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${isMobileLangDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 ${isMobileLangDropdownOpen ? '' : 'hidden'}`}>
                {otherLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className="w-full px-4 py-2 text-center hover:bg-green-50 text-green-800 font-semibold"
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
