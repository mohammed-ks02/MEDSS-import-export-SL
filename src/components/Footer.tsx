import React from 'react';
import { useLanguage } from '../utils/i18n';
import { withBase } from '../utils/basePath';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white py-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                {t('brand')}
              </h3>
              <p className="text-white max-w-md leading-tight text-xs">
                {t('footer_desc')}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-2 text-white">
              {t('footer_links')}
            </h3>
            <ul className="space-y-1">
              <li>
                <a 
                  href={withBase('/')} 
                  className="text-white hover:text-green-200 transition-colors text-xs"
                >
                  {t('nav_home')}
                </a>
              </li>
              <li>
                <a 
                  href={withBase('/products')} 
                  className="text-white hover:text-green-200 transition-colors text-xs"
                >
                  {t('nav_products')}
                </a>
              </li>
              <li>
                <a 
                  href={withBase('/about')} 
                  className="text-white hover:text-green-200 transition-colors text-xs"
                >
                  {t('nav_about')}
                </a>
              </li>
              <li>
                <a 
                  href={withBase('/contact')} 
                  className="text-white hover:text-green-200 transition-colors text-xs"
                >
                  {t('nav_contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-sm mb-2 text-white">
              {t('footer_contact')}
            </h3>
            <div className="space-y-2 text-white">
              <div className="flex items-start">
                <svg className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <p className="text-xs font-semibold">
                    {t('footer_warehouse_label')}
                  </p>
                  <p className="text-xs">
                    {t('footer_address')}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div>
                  <a href="tel:+34667918018" className="text-xs font-semibold">
                    <span>{t('footer_company_label')}</span> <span>{t('footer_phone_company')}</span>
                  </a>
                  <br />
                  <a href="tel:+34624183201" className="text-xs font-semibold">
                    <span>{t('footer_commercial_label')}</span> <span>{t('footer_phone_commercial')}</span>
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <p className="text-xs">
                  {t('footer_email')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="divider my-1"></div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white text-xs mb-0 md:mb-0">
            © {currentYear} MED SS IMPORT & EXPORT SL. {t('footer_copyright').split('. ')[1] || 'All rights reserved.'}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
