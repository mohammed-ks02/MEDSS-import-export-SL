import { c as createComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead, d as createAstro, s as spreadAttributes, u as unescapeHTML, r as renderComponent, e as renderHead, f as defineScriptVars, g as renderSlot } from './astro/server_mX0MLaV_.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';
import { jsx } from 'react/jsx-runtime';
import React, { createContext, useState, useEffect, useContext } from 'react';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, useTranslation } from 'react-i18next';

function withBase(path) {
  return "/MEDSS-import-export-SL/" + path.replace(/^\//, "");
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header class="bg-white shadow-lg sticky top-0 z-50 py-2"> <nav class="container py-1"> <div class="flex justify-between items-center"> <!-- Logo --> <div class="flex items-center"> <a', ' class="text-2xl font-bold text-green-800 hover:text-green-600 transition-colors flex items-center"> <img', ` alt="MED SS IMPORT & EXPORT Logo" class="h-6 w-auto md:h-8 lg:h-10 object-contain transition-all duration-200" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';"> <span class="hidden">MED SS IMPORT & EXPORT</span> </a> </div> <!-- Desktop Navigation --> <div class="hidden lg:flex items-center space-x-8"> <a`, ' class="text-gray-700 hover:text-green-600 font-medium transition-colors" data-i18n="nav_home">\nHome\n</a> <a', ' class="text-gray-700 hover:text-green-600 font-medium transition-colors" data-i18n="nav_products">\nProducts\n</a> <a', ' class="text-gray-700 hover:text-green-600 font-medium transition-colors" data-i18n="nav_about">\nAbout Us\n</a> <a', ' class="text-gray-700 hover:text-green-600 font-medium transition-colors" data-i18n="nav_contact">\nContact\n</a> <div class="relative ml-4"> <button id="lang-toggle" class="px-4 py-2 rounded-lg bg-gray-100 hover:bg-green-100 text-green-800 font-semibold transition flex items-center space-x-2"> <span id="current-lang">ES</span> <svg class="w-4 h-4 transition-transform" id="dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <div id="lang-dropdown" class="absolute right-0 mt-2 w-16 bg-white border border-gray-200 rounded-lg shadow-lg z-50 hidden"> <button class="lang-option w-full px-4 py-2 text-left hover:bg-green-50 text-green-800 font-semibold" data-lang="en">EN</button> <button class="lang-option w-full px-4 py-2 text-left hover:bg-green-50 text-green-800 font-semibold" data-lang="es">ES</button> <button class="lang-option w-full px-4 py-2 text-left hover:bg-green-50 text-green-800 font-semibold" data-lang="fr">FR</button> </div> </div> </div> <!-- Mobile menu button --> <div class="lg:hidden"> <button type="button" class="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600" aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="mobile-menu" id="mobile-menu-toggle"> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> <!-- Mobile Navigation Menu --> <div id="mobile-menu" class="lg:hidden hidden mt-4 pb-4"> <div class="flex flex-col space-y-4"> <a', ' class="text-gray-700 hover:text-green-600 font-medium py-2" data-i18n="nav_home">\nHome\n</a> <a', ' class="text-gray-700 hover:text-green-600 font-medium py-2" data-i18n="nav_products">\nProducts\n</a> <a', ' class="text-gray-700 hover:text-green-600 font-medium py-2" data-i18n="nav_about">\nAbout Us\n</a> <a', ` class="text-gray-700 hover:text-green-600 font-medium py-2" data-i18n="nav_contact">
Contact
</a> <div class="relative mt-2"> <button id="lang-toggle-mobile" class="w-full px-4 py-2 rounded-lg bg-gray-100 hover:bg-green-100 text-green-800 font-semibold transition flex items-center justify-center space-x-2"> <span id="current-lang-mobile">ES</span> <svg class="w-4 h-4 transition-transform" id="dropdown-arrow-mobile" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <div id="lang-dropdown-mobile" class="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 hidden"> <button class="lang-option-mobile w-full px-4 py-2 text-center hover:bg-green-50 text-green-800 font-semibold" data-lang="en">EN</button> <button class="lang-option-mobile w-full px-4 py-2 text-center hover:bg-green-50 text-green-800 font-semibold" data-lang="es">ES</button> <button class="lang-option-mobile w-full px-4 py-2 text-center hover:bg-green-50 text-green-800 font-semibold" data-lang="fr">FR</button> </div> </div> </div> </div> </nav> </header> <script>
  const translations = {
    en: {
      nav_home: "Home",
      nav_products: "Products",
      nav_about: "About Us",
      nav_contact: "Contact",
      // Additional translations can be added here
    },
    es: {
      nav_home: "Inicio",
      nav_products: "Productos",
      nav_about: "Sobre Nosotros",
      nav_contact: "Contacto",
    },
    fr: {
      nav_home: "Accueil",
      nav_products: "Produits",
      nav_about: "\xC0 propos",
      nav_contact: "Contact",
    }
  };

  function getCurrentLanguage() {
    // Check both localStorage keys for compatibility
    const lang = localStorage.getItem('language') || localStorage.getItem('lang') || 'en';
    return lang.toUpperCase();
  }

  function changeLanguage(lng) {
    const normalizedLang = lng.toLowerCase();
    setLanguage(normalizedLang);
    updateLanguageDisplay();
    
    // Trigger React i18n system change
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: normalizedLang } }));
  }

  function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    // Set both localStorage keys for compatibility
    localStorage.setItem('lang', lang);
    localStorage.setItem('language', lang);
  }

  function updateLanguageDisplay() {
    const currentLang = getCurrentLanguage();
    
    const currentLangSpan = document.getElementById('current-lang');
    if (currentLangSpan) {
      currentLangSpan.textContent = currentLang;
    }
    
    const currentLangMobileSpan = document.getElementById('current-lang-mobile');
    if (currentLangMobileSpan) {
      currentLangMobileSpan.textContent = currentLang;
    }
    
    document.querySelectorAll('.lang-option, .lang-option-mobile').forEach(option => {
      const optionLang = option.getAttribute('data-lang').toUpperCase();
      if (optionLang === currentLang) {
        option.style.display = 'none';
      } else {
        option.style.display = 'block';
      }
    });
  }

  function toggleDropdown(dropdownId, arrowId) {
    const dropdown = document.getElementById(dropdownId);
    const arrow = document.getElementById(arrowId);
    
    if (dropdown && arrow) {
      const isHidden = dropdown.classList.contains('hidden');
      
      document.querySelectorAll('#lang-dropdown, #lang-dropdown-mobile').forEach(d => {
        d.classList.add('hidden');
      });
      document.querySelectorAll('#dropdown-arrow, #dropdown-arrow-mobile').forEach(a => {
        a.style.transform = 'rotate(0deg)';
      });
      
      if (isHidden) {
        dropdown.classList.remove('hidden');
        arrow.style.transform = 'rotate(180deg)';
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('lang') || 'en';
    setLanguage(lang);
    updateLanguageDisplay();
    
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown('lang-dropdown', 'dropdown-arrow');
      });
    }
    
    const langToggleMobile = document.getElementById('lang-toggle-mobile');
    if (langToggleMobile) {
      langToggleMobile.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown('lang-dropdown-mobile', 'dropdown-arrow-mobile');
      });
    }
    
    document.querySelectorAll('.lang-option').forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = option.getAttribute('data-lang');
        changeLanguage(selectedLang);
        document.getElementById('lang-dropdown').classList.add('hidden');
        document.getElementById('dropdown-arrow').style.transform = 'rotate(0deg)';
      });
    });
    
    document.querySelectorAll('.lang-option-mobile').forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = option.getAttribute('data-lang');
        changeLanguage(selectedLang);
        document.getElementById('lang-dropdown-mobile').classList.add('hidden');
        document.getElementById('dropdown-arrow-mobile').style.transform = 'rotate(0deg)';
      });
    });
    
    document.addEventListener('click', () => {
      document.querySelectorAll('#lang-dropdown, #lang-dropdown-mobile').forEach(dropdown => {
        dropdown.classList.add('hidden');
      });
      document.querySelectorAll('#dropdown-arrow, #dropdown-arrow-mobile').forEach(arrow => {
        arrow.style.transform = 'rotate(0deg)';
      });
    });

    // Mobile menu toggle
    const btn = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        menu.classList.toggle('hidden');
      });
    }
  });
<\/script>`])), maybeRenderHead(), addAttribute(withBase("/"), "href"), addAttribute(withBase("/logo.webp"), "src"), addAttribute(withBase("/"), "href"), addAttribute(withBase("/products"), "href"), addAttribute(withBase("/about"), "href"), addAttribute(withBase("/contact"), "href"), addAttribute(withBase("/"), "href"), addAttribute(withBase("/products"), "href"), addAttribute(withBase("/about"), "href"), addAttribute(withBase("/contact"), "href"));
}, "C:/Users/mohammed/Desktop/MEDSS-import-export-SL/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-green-900 text-white py-3"> <div class="container"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> <!-- Company Info --> <div class="lg:col-span-2"> <div class="flex items-center mb-3"> <span class="text-2xl font-bold"><span data-i18n="brand">MED SS IMPORT & EXPORT</span></span> </div> <p class="text-green-100 mb-3 max-w-md" data-i18n="footer_desc">
Your trusted partner in global import & export. Specializing in fresh produce from Spain to worldwide markets.
</p> <div class="flex space-x-4"> <!-- Social Media Icons --> <a href="#" class="text-green-200 hover:text-white transition-colors" aria-label="LinkedIn"> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a> <a href="#" class="text-green-200 hover:text-white transition-colors" aria-label="Twitter"> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path> </svg> </a> </div> </div> <!-- Quick Links --> <div> <h3 class="font-semibold text-lg mb-3" data-i18n="footer_links">Quick Links</h3> <ul class="space-y-2"> <li> <a${addAttribute(withBase("/"), "href")} class="text-green-200 hover:text-white transition-colors" data-i18n="nav_home">
Home
</a> </li> <li> <a${addAttribute(withBase("/products"), "href")} class="text-green-200 hover:text-white transition-colors" data-i18n="nav_products">
Products
</a> </li> <li> <a${addAttribute(withBase("/about"), "href")} class="text-green-200 hover:text-white transition-colors" data-i18n="nav_about">
About Us
</a> </li> <li> <a${addAttribute(withBase("/contact"), "href")} class="text-green-200 hover:text-white transition-colors" data-i18n="nav_contact">
Contact
</a> </li> </ul> </div> <!-- Contact Information --> <div> <h3 class="font-semibold text-lg mb-3" data-i18n="footer_contact">Contact Us</h3> <div class="space-y-3 text-green-200"> <div class="flex items-start"> <svg class="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <div> <p class="text-sm font-semibold" data-i18n="footer_warehouse_label">WAREHOUSE ADDRESS:</p> <p data-i18n="footer_address">LONGITUDINAL 5, No. 83 MERCABARNA 08040 BARCELONA</p> </div> </div> <div class="flex items-center"> <svg class="h-5 w-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <div> <a href="tel:+34667918018" class="text-sm font-semibold"><span data-i18n="footer_company_label">Company:</span> <span data-i18n="footer_phone_company">+34 667 91 80 18</span></a> <br> <a href="tel:+34624183201" class="text-sm font-semibold"><span data-i18n="footer_commercial_label">Commercial:</span> <span data-i18n="footer_phone_commercial">+34 624 18 32 01</span></a> </div> </div> <div class="flex items-center"> <svg class="h-5 w-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <p data-i18n="footer_email">info.medssimport@gmail.com</p> </div> </div> </div> </div> <div class="divider my-3"></div> <div class="flex flex-col md:flex-row justify-between items-center"> <div class="text-green-200 text-sm mb-2 md:mb-0" data-i18n="footer_copyright">
&copy; ${currentYear} MED SS IMPORT & EXPORT. All rights reserved.
</div> </div> </div> </footer>`;
}, "C:/Users/mohammed/Desktop/MEDSS-import-export-SL/src/components/Footer.astro", void 0);

const brand$2 = "MED SS IMPORT & EXPORT";
const nav_home$2 = "Home";
const nav_products$2 = "Products";
const nav_about$2 = "About Us";
const nav_contact$2 = "Contact";
const lang_btn$2 = "ES";
const footer_desc$2 = "Your trusted partner in global import & export. Specializing in fresh produce from Spain to worldwide markets.";
const footer_links$2 = "Quick Links";
const footer_contact$2 = "Contact Us";
const footer_address$2 = "LONGITUDINAL 5, No. 83 MERCABARNA 08040 BARCELONA";
const footer_phone$2 = "+34 667 91 80 18";
const footer_phone_company$2 = "+34 667 91 80 18";
const footer_phone_commercial$2 = "+34 624 18 32 01";
const footer_email$2 = "info.medssimport@gmail.com";
const footer_copyright$2 = "© 2025 MED SS IMPORT & EXPORT. All rights reserved.";
const footer_warehouse_label$2 = "WAREHOUSE ADDRESS:";
const footer_company_label$2 = "Company:";
const footer_commercial_label$2 = "Commercial:";
const hero_title$2 = "Premium Spanish Produce for Global Markets";
const hero_desc$2 = "Your premier partner for Spanish fresh produce export. From our facilities in Sevilla and Barcelona, MED SS ensures quality, reliability, and seamless delivery worldwide.";
const hero_btn$2 = "View Our Products";
const hero_countries$2 = "Countries Served";
const hero_experience$2 = "Years Experience";
const hero_ontime$2 = "On-Time Delivery";
const about_title$2 = "Our Story: Spanish Excellence in Global Trade";
const about_desc$2 = "MED SS IMPORT & EXPORT specializes in connecting Spanish agricultural excellence with global markets. Based in Sevilla with operations in Barcelona's Mercabarna, we are committed to quality and reliability.";
const about_mission_title$2 = "Our Mission";
const about_mission_1$2 = "To export Spain's finest fresh produce to businesses worldwide that demand exceptional quality, creating sustainable value for Spanish growers and international partners.";
const about_mission_2$2 = "We believe Spanish fresh produce represents quality and tradition that should be accessible to businesses worldwide.";
const about_values_title$2 = "Our Core Values";
const about_value_quality$2 = "Quality First:";
const about_value_quality_desc$2 = " Never compromising on the standards that define exceptional produce";
const about_value_sustain$2 = "Sustainability:";
const about_value_sustain_desc$2 = " Supporting eco-friendly farming and responsible trade practices";
const about_value_partner$2 = "Partnership:";
const about_value_partner_desc$2 = " Building long-term relationships based on trust and mutual success";
const about_value_innov$2 = "Innovation:";
const about_value_innov_desc$2 = " Continuously improving our processes and embracing new technologies";
const products_title$2 = "Premium Products for Global Trade";
const products_desc$2 = "Our extensive product portfolio spans fresh fruits, vegetables, and seafood sourced from the world's finest regions, ensuring year-round availability and consistent quality for your import/export needs.";
const products_fruits$2 = "Premium Fruits";
const products_fruits_desc$2 = "Fresh apples, oranges, grapes, and tropical fruits";
const products_veggies$2 = "Fresh Vegetables";
const products_veggies_desc$2 = "Carrots, broccoli, tomatoes, and leafy greens";
const products_ops$2 = "Global Operations";
const products_ops_desc$2 = "Complete supply chain from farm to market";
const products_grapes$2 = "Table Grapes";
const products_greens$2 = "Leafy Greens";
const products_tropical$2 = "Tropical Fruits";
const contact_title$2 = "Get In Touch With Us";
const contact_intro$2 = "Ready to discuss your Spanish produce sourcing needs? Our team of experts is here to provide solutions that meet your quality, volume, and delivery requirements.";
const contact_info_title$2 = "Contact Information";
const contact_info_desc$2 = "Our team is available to discuss your fresh produce needs, answer questions about our logistics, and provide expert guidance on Spanish agricultural products.";
const contact_phone_title$2 = "Phone";
const contact_phone$2 = "+34 667 91 80 18";
const contact_commercial_title$2 = "Commercial";
const contact_commercial_phone$2 = "+34 624 18 32 01";
const contact_phone_hours$2 = "Monday - Friday: 8:00 AM - 6:00 PM";
const contact_email_title$2 = "Email";
const contact_email$2 = "info.medssimport@gmail.com";
const contact_email_response$2 = "We respond within 24 hours";
const contact_hq_title$2 = "Headquarters";
const contact_hq_address$2 = "LONGITUDINAL 5, No. 83 MERCABARNA 08040 BARCELONA";
const contact_warehouse_title$2 = "Warehouse";
const contact_fiscal_title$2 = "Fiscal Address";
const contact_fiscal_address$2 = "CALLE PUERTO 17 B SEVILLA 41020";
const company_info_title$2 = "Company Information";
const company_name_label$2 = "Company";
const company_name$2 = "MED SS IMPORT & EXPORT";
const fiscal_address_label$2 = "Fiscal Address";
const warehouse_address_label$2 = "Warehouse Address";
const tax_id_label$2 = "Tax ID";
const tax_id$2 = "NIF / B06934541";
const bank_account_label$2 = "Bank Account";
const bank_account$2 = "ES7600810215250001949495";
const swift_label$2 = "SWIFT/BIC";
const swift_code$2 = "BSABESBBXXX";
const email_label$2 = "Email";
const company_phone_label$2 = "Company Phone";
const commercial_phone_label$2 = "Commercial Phone";
const featured_title$2 = "Premium Spanish Products for Global Trade";
const featured_desc$2 = "Sourced and delivered by 🚢 MED SS IMPORT & EXPORT — your trusted partner for Spanish fresh produce worldwide.";
const featured_card1_title$2 = "Container Transport";
const featured_card2_title$2 = "Fresh Produce Logistics";
const featured_card3_title$2 = "Cold Chain Solutions";
const featured_card4_title$2 = "Fresh Produce Variety";
const featured_card5_title$2 = "Retail-Ready Produce";
const featured_card6_title$2 = "Quality Control";
const featured_card7_title$2 = "Inventory & Delivery";
const featured_btn$2 = "View All Products";
const card_dried_fruits_title$2 = "Dried Fruits";
const card_citrus_fruits_title$2 = "Citrus Fruits";
const card_melons_title$2 = "Melons";
const card_apples_pears_title$2 = "Apples & Pears";
const card_apple_warehouse_title$2 = "Apple Warehouse";
const card_bulk_berries_title$2 = "Bulk Berries";
const language$2 = {
	current: "Current Language",
	description: "This is a demo of our language switching system. The interface updates dynamically when you change the language."
};
const navigation$2 = {
	home: "Home",
	about: "About Us",
	contact: "Contact",
	products: "Products"
};
const products$2 = {
	apples: "Apples",
	avocados: "Avocados",
	cherimoyas: "Cherimoyas",
	dragon_fruits: "Dragon Fruits",
	green_bananas: "Green Bananas",
	kiwi_fruit: "Kiwi Fruit",
	limes: "Limes",
	mangoes: "Mangoes",
	piel_de_sapo_melon: "Piel de Sapo Melon",
	watermelon: "Watermelon",
	oranges: "Oranges",
	pears: "Pears",
	plums: "Plums",
	red_grapes: "Red Grapes",
	ginger: "Ginger",
	potatoes: "Potatoes",
	tomatoes: "Tomatoes",
	quality_control: "Quality Control",
	professional_delivery: "Professional Delivery",
	quality_control_desc: "Rigorous quality standards ensure freshness",
	professional_delivery_desc: "Reliable logistics and inventory management"
};
const enCommon = {
	brand: brand$2,
	nav_home: nav_home$2,
	nav_products: nav_products$2,
	nav_about: nav_about$2,
	nav_contact: nav_contact$2,
	lang_btn: lang_btn$2,
	footer_desc: footer_desc$2,
	footer_links: footer_links$2,
	footer_contact: footer_contact$2,
	footer_address: footer_address$2,
	footer_phone: footer_phone$2,
	footer_phone_company: footer_phone_company$2,
	footer_phone_commercial: footer_phone_commercial$2,
	footer_email: footer_email$2,
	footer_copyright: footer_copyright$2,
	footer_warehouse_label: footer_warehouse_label$2,
	footer_company_label: footer_company_label$2,
	footer_commercial_label: footer_commercial_label$2,
	hero_title: hero_title$2,
	hero_desc: hero_desc$2,
	hero_btn: hero_btn$2,
	hero_countries: hero_countries$2,
	hero_experience: hero_experience$2,
	hero_ontime: hero_ontime$2,
	about_title: about_title$2,
	about_desc: about_desc$2,
	about_mission_title: about_mission_title$2,
	about_mission_1: about_mission_1$2,
	about_mission_2: about_mission_2$2,
	about_values_title: about_values_title$2,
	about_value_quality: about_value_quality$2,
	about_value_quality_desc: about_value_quality_desc$2,
	about_value_sustain: about_value_sustain$2,
	about_value_sustain_desc: about_value_sustain_desc$2,
	about_value_partner: about_value_partner$2,
	about_value_partner_desc: about_value_partner_desc$2,
	about_value_innov: about_value_innov$2,
	about_value_innov_desc: about_value_innov_desc$2,
	products_title: products_title$2,
	products_desc: products_desc$2,
	products_fruits: products_fruits$2,
	products_fruits_desc: products_fruits_desc$2,
	products_veggies: products_veggies$2,
	products_veggies_desc: products_veggies_desc$2,
	products_ops: products_ops$2,
	products_ops_desc: products_ops_desc$2,
	products_grapes: products_grapes$2,
	products_greens: products_greens$2,
	products_tropical: products_tropical$2,
	contact_title: contact_title$2,
	contact_intro: contact_intro$2,
	contact_info_title: contact_info_title$2,
	contact_info_desc: contact_info_desc$2,
	contact_phone_title: contact_phone_title$2,
	contact_phone: contact_phone$2,
	contact_commercial_title: contact_commercial_title$2,
	contact_commercial_phone: contact_commercial_phone$2,
	contact_phone_hours: contact_phone_hours$2,
	contact_email_title: contact_email_title$2,
	contact_email: contact_email$2,
	contact_email_response: contact_email_response$2,
	contact_hq_title: contact_hq_title$2,
	contact_hq_address: contact_hq_address$2,
	contact_warehouse_title: contact_warehouse_title$2,
	contact_fiscal_title: contact_fiscal_title$2,
	contact_fiscal_address: contact_fiscal_address$2,
	company_info_title: company_info_title$2,
	company_name_label: company_name_label$2,
	company_name: company_name$2,
	fiscal_address_label: fiscal_address_label$2,
	warehouse_address_label: warehouse_address_label$2,
	tax_id_label: tax_id_label$2,
	tax_id: tax_id$2,
	bank_account_label: bank_account_label$2,
	bank_account: bank_account$2,
	swift_label: swift_label$2,
	swift_code: swift_code$2,
	email_label: email_label$2,
	company_phone_label: company_phone_label$2,
	commercial_phone_label: commercial_phone_label$2,
	featured_title: featured_title$2,
	featured_desc: featured_desc$2,
	featured_card1_title: featured_card1_title$2,
	featured_card2_title: featured_card2_title$2,
	featured_card3_title: featured_card3_title$2,
	featured_card4_title: featured_card4_title$2,
	featured_card5_title: featured_card5_title$2,
	featured_card6_title: featured_card6_title$2,
	featured_card7_title: featured_card7_title$2,
	featured_btn: featured_btn$2,
	card_dried_fruits_title: card_dried_fruits_title$2,
	card_citrus_fruits_title: card_citrus_fruits_title$2,
	card_melons_title: card_melons_title$2,
	card_apples_pears_title: card_apples_pears_title$2,
	card_apple_warehouse_title: card_apple_warehouse_title$2,
	card_bulk_berries_title: card_bulk_berries_title$2,
	language: language$2,
	navigation: navigation$2,
	products: products$2
};

const brand$1 = "MED SS IMPORT & EXPORT";
const nav_home$1 = "Inicio";
const nav_products$1 = "Productos";
const nav_about$1 = "Sobre Nosotros";
const nav_contact$1 = "Contacto";
const lang_btn$1 = "FR";
const footer_desc$1 = "Su socio de confianza en la importación y exportación global. Especializados en productos frescos de España para los mercados mundiales.";
const footer_links$1 = "Enlaces rápidos";
const footer_contact$1 = "Contáctenos";
const footer_address$1 = "LONGITUDINAL 5, No. 83 MERCABARNA 08040 BARCELONA";
const footer_phone$1 = "+34 667 91 80 18";
const footer_phone_company$1 = "+34 667 91 80 18";
const footer_phone_commercial$1 = "+34 624 18 32 01";
const footer_email$1 = "info.medssimport@gmail.com";
const footer_copyright$1 = "© 2025 MED SS IMPORT & EXPORT. Todos los derechos reservados.";
const footer_warehouse_label$1 = "DIRECCIÓN ALMACÉN:";
const footer_company_label$1 = "Empresa:";
const footer_commercial_label$1 = "Comercial:";
const hero_title$1 = "Productos Españoles Premium para el Mercado Global";
const hero_desc$1 = "Su socio principal para la exportación de productos frescos españoles. Desde nuestras instalaciones en Sevilla y Barcelona, MED SS garantiza calidad, fiabilidad y entrega sin problemas en todo el mundo.";
const hero_btn$1 = "Ver Nuestros Productos";
const hero_countries$1 = "Países Servidos";
const hero_experience$1 = "Años de Experiencia";
const hero_ontime$1 = "Entrega Puntual";
const about_title$1 = "Nuestra Historia: Excelencia Española en Comercio Global";
const about_desc$1 = "MED SS IMPORT & EXPORT se especializa en conectar la excelencia agrícola española con los mercados globales. Con sede en Sevilla y operaciones en Mercabarna de Barcelona, estamos comprometidos con la calidad y la fiabilidad.";
const about_mission_title$1 = "Nuestra Misión";
const about_mission_1$1 = "Exportar los mejores productos frescos de España a empresas de todo el mundo que exigen calidad excepcional, creando valor sostenible para los productores españoles y socios internacionales.";
const about_mission_2$1 = "Creemos que los productos frescos españoles representan calidad y tradición que deberían estar al alcance de empresas de todo el mundo.";
const about_values_title$1 = "Nuestros Valores Fundamentales";
const about_value_quality$1 = "Calidad Primero:";
const about_value_quality_desc$1 = " Sin comprometer los estándares que definen productos excepcionales";
const about_value_sustain$1 = "Sostenibilidad:";
const about_value_sustain_desc$1 = " Apoyando la agricultura ecológica y prácticas comerciales responsables";
const about_value_partner$1 = "Asociación:";
const about_value_partner_desc$1 = " Construir relaciones a largo plazo basadas en la confianza y el éxito mutuo";
const about_value_innov$1 = "Innovación:";
const about_value_innov_desc$1 = " Mejorar continuamente nuestros procesos y adoptar nuevas tecnologías";
const products_title$1 = "Productos Premium para el Comercio Global";
const products_desc$1 = "Nuestro extenso portafolio de productos abarca frutas frescas, verduras y mariscos provenientes de las mejores regiones del mundo, asegurando disponibilidad durante todo el año y calidad constante para sus necesidades de importación/exportación.";
const products_fruits$1 = "Frutas Premium";
const products_fruits_desc$1 = "Manzanas frescas, naranjas, uvas y frutas tropicales";
const products_veggies$1 = "Verduras Frescas";
const products_veggies_desc$1 = "Zanahorias, brócoli, tomates y hojas verdes";
const products_ops$1 = "Operaciones Globales";
const products_ops_desc$1 = "Cadena de suministro completa del campo al mercado";
const products_grapes$1 = "Uvas de Mesa";
const products_greens$1 = "Hojas Verdes";
const products_tropical$1 = "Frutas Tropicales";
const contact_title$1 = "Póngase en Contacto Con Nosotros";
const contact_intro$1 = "¿Listo para discutir sus necesidades de productos frescos españoles? Nuestro equipo de expertos está aquí para proporcionar soluciones que cumplan con sus requisitos de calidad, volumen y entrega.";
const contact_info_title$1 = "Información de Contacto";
const contact_info_desc$1 = "Nuestro equipo está disponible para discutir sus necesidades de productos frescos, responder preguntas sobre nuestra logística y brindar orientación experta sobre productos agrícolas españoles.";
const contact_phone_title$1 = "Teléfono";
const contact_phone$1 = "+34 667 91 80 18";
const contact_commercial_title$1 = "Comercial";
const contact_commercial_phone$1 = "+34 624 18 32 01";
const contact_phone_hours$1 = "Lunes a Viernes: 8:00 AM - 6:00 PM";
const contact_email_title$1 = "Correo Electrónico";
const contact_email$1 = "info.medssimport@gmail.com";
const contact_email_response$1 = "Respondemos dentro de las 24 horas";
const contact_hq_title$1 = "Oficina Central";
const contact_hq_address$1 = "LONGITUDINAL 5, No. 83 MERCABARNA 08040 BARCELONA";
const contact_warehouse_title$1 = "Almacén";
const contact_fiscal_title$1 = "Dirección Fiscal";
const contact_fiscal_address$1 = "CALLE PUERTO 17 B SEVILLA 41020";
const company_info_title$1 = "Información de la Empresa";
const company_name_label$1 = "Empresa";
const company_name$1 = "MED SS IMPORT & EXPORT";
const fiscal_address_label$1 = "Dirección Fiscal";
const warehouse_address_label$1 = "Dirección Almacén";
const tax_id_label$1 = "Identificación Fiscal";
const tax_id$1 = "NIF / B06934541";
const bank_account_label$1 = "Cuenta Bancaria";
const bank_account$1 = "ES7600810215250001949495";
const swift_label$1 = "SWIFT/BIC";
const swift_code$1 = "BSABESBBXXX";
const email_label$1 = "Correo Electrónico";
const company_phone_label$1 = "Teléfono Empresa";
const commercial_phone_label$1 = "Teléfono Comercial";
const featured_title$1 = "Productos Españoles Premium para el Comercio Global";
const featured_desc$1 = "Surtido y entregado por 🚢 MED SS IMPORT & EXPORT — su socio de confianza para el comercio de productos frescos españoles en todo el mundo.";
const featured_card1_title$1 = "Transporte de Contenedores";
const featured_card2_title$1 = "Logística de Productos Frescos";
const featured_card3_title$1 = "Soluciones de Cadena de Frío";
const featured_card4_title$1 = "Variedad de Productos Frescos";
const featured_card5_title$1 = "Productos Listos para la Venta";
const featured_card6_title$1 = "Control de Calidad";
const featured_card7_title$1 = "Inventario & Entrega";
const featured_btn$1 = "Ver Todos los Productos";
const card_dried_fruits_title$1 = "Frutas Secas";
const card_citrus_fruits_title$1 = "Cítricos";
const card_melons_title$1 = "Melones";
const card_apples_pears_title$1 = "Manzanas & Peras";
const card_apple_warehouse_title$1 = "Almacén de Manzanas";
const card_bulk_berries_title$1 = "Bayas a Granel";
const language$1 = {
	current: "Idioma Actual",
	description: "Esta es una demostración de nuestro sistema de cambio de idioma. La interfaz se actualiza dinámicamente cuando cambias el idioma."
};
const navigation$1 = {
	home: "Inicio",
	about: "Sobre Nosotros",
	contact: "Contacto",
	products: "Productos"
};
const products$1 = {
	apples: "Manzanas",
	avocados: "Aguacates",
	cherimoyas: "Chirimoyas",
	dragon_fruits: "Frutas del Dragón",
	green_bananas: "Plátanos Verdes",
	kiwi_fruit: "Kiwi",
	limes: "Limas",
	mangoes: "Mangos",
	piel_de_sapo_melon: "Melón Piel de Sapo",
	watermelon: "Sandía",
	oranges: "Naranjas",
	pears: "Peras",
	plums: "Ciruelas",
	red_grapes: "Uvas Rojas",
	ginger: "Jengibre",
	potatoes: "Patatas",
	tomatoes: "Tomates",
	quality_control: "Control de Calidad",
	professional_delivery: "Entrega Profesional",
	quality_control_desc: "Estándares rigurosos de calidad garantizan la frescura",
	professional_delivery_desc: "Logística confiable y gestión de inventario"
};
const esCommon = {
	brand: brand$1,
	nav_home: nav_home$1,
	nav_products: nav_products$1,
	nav_about: nav_about$1,
	nav_contact: nav_contact$1,
	lang_btn: lang_btn$1,
	footer_desc: footer_desc$1,
	footer_links: footer_links$1,
	footer_contact: footer_contact$1,
	footer_address: footer_address$1,
	footer_phone: footer_phone$1,
	footer_phone_company: footer_phone_company$1,
	footer_phone_commercial: footer_phone_commercial$1,
	footer_email: footer_email$1,
	footer_copyright: footer_copyright$1,
	footer_warehouse_label: footer_warehouse_label$1,
	footer_company_label: footer_company_label$1,
	footer_commercial_label: footer_commercial_label$1,
	hero_title: hero_title$1,
	hero_desc: hero_desc$1,
	hero_btn: hero_btn$1,
	hero_countries: hero_countries$1,
	hero_experience: hero_experience$1,
	hero_ontime: hero_ontime$1,
	about_title: about_title$1,
	about_desc: about_desc$1,
	about_mission_title: about_mission_title$1,
	about_mission_1: about_mission_1$1,
	about_mission_2: about_mission_2$1,
	about_values_title: about_values_title$1,
	about_value_quality: about_value_quality$1,
	about_value_quality_desc: about_value_quality_desc$1,
	about_value_sustain: about_value_sustain$1,
	about_value_sustain_desc: about_value_sustain_desc$1,
	about_value_partner: about_value_partner$1,
	about_value_partner_desc: about_value_partner_desc$1,
	about_value_innov: about_value_innov$1,
	about_value_innov_desc: about_value_innov_desc$1,
	products_title: products_title$1,
	products_desc: products_desc$1,
	products_fruits: products_fruits$1,
	products_fruits_desc: products_fruits_desc$1,
	products_veggies: products_veggies$1,
	products_veggies_desc: products_veggies_desc$1,
	products_ops: products_ops$1,
	products_ops_desc: products_ops_desc$1,
	products_grapes: products_grapes$1,
	products_greens: products_greens$1,
	products_tropical: products_tropical$1,
	contact_title: contact_title$1,
	contact_intro: contact_intro$1,
	contact_info_title: contact_info_title$1,
	contact_info_desc: contact_info_desc$1,
	contact_phone_title: contact_phone_title$1,
	contact_phone: contact_phone$1,
	contact_commercial_title: contact_commercial_title$1,
	contact_commercial_phone: contact_commercial_phone$1,
	contact_phone_hours: contact_phone_hours$1,
	contact_email_title: contact_email_title$1,
	contact_email: contact_email$1,
	contact_email_response: contact_email_response$1,
	contact_hq_title: contact_hq_title$1,
	contact_hq_address: contact_hq_address$1,
	contact_warehouse_title: contact_warehouse_title$1,
	contact_fiscal_title: contact_fiscal_title$1,
	contact_fiscal_address: contact_fiscal_address$1,
	company_info_title: company_info_title$1,
	company_name_label: company_name_label$1,
	company_name: company_name$1,
	fiscal_address_label: fiscal_address_label$1,
	warehouse_address_label: warehouse_address_label$1,
	tax_id_label: tax_id_label$1,
	tax_id: tax_id$1,
	bank_account_label: bank_account_label$1,
	bank_account: bank_account$1,
	swift_label: swift_label$1,
	swift_code: swift_code$1,
	email_label: email_label$1,
	company_phone_label: company_phone_label$1,
	commercial_phone_label: commercial_phone_label$1,
	featured_title: featured_title$1,
	featured_desc: featured_desc$1,
	featured_card1_title: featured_card1_title$1,
	featured_card2_title: featured_card2_title$1,
	featured_card3_title: featured_card3_title$1,
	featured_card4_title: featured_card4_title$1,
	featured_card5_title: featured_card5_title$1,
	featured_card6_title: featured_card6_title$1,
	featured_card7_title: featured_card7_title$1,
	featured_btn: featured_btn$1,
	card_dried_fruits_title: card_dried_fruits_title$1,
	card_citrus_fruits_title: card_citrus_fruits_title$1,
	card_melons_title: card_melons_title$1,
	card_apples_pears_title: card_apples_pears_title$1,
	card_apple_warehouse_title: card_apple_warehouse_title$1,
	card_bulk_berries_title: card_bulk_berries_title$1,
	language: language$1,
	navigation: navigation$1,
	products: products$1
};

const brand = "MED SS IMPORT & EXPORT";
const nav_home = "Accueil";
const nav_products = "Produits";
const nav_about = "À propos";
const nav_contact = "Contact";
const lang_btn = "EN";
const footer_desc = "Votre partenaire de confiance en import & export mondial. Connecter le monde avec une logistique fiable et des produits frais.";
const footer_links = "Liens rapides";
const footer_contact = "Contactez-nous";
const footer_address = "LONGITUDINAL 5, No. 83 MERCABARNA 08040 BARCELONE";
const footer_phone = "+34 667 91 80 18";
const footer_phone_company = "+34 667 91 80 18";
const footer_phone_commercial = "+34 624 18 32 01";
const footer_email = "info.medssimport@gmail.com";
const footer_copyright = "© 2025 MED SS IMPORT & EXPORT. Tous droits réservés.";
const footer_warehouse_label = "ADRESSE ENTREPÔT:";
const footer_company_label = "Entreprise:";
const footer_commercial_label = "Commercial:";
const hero_title = "Produits premium pour le commerce mondial";
const hero_desc = "Votre partenaire privilégié pour l'import/export et la logistique mondiale. Du port au port, Global road garantit qualité, fiabilité et livraison sans faille à chaque expédition.";
const hero_btn = "Voir nos produits";
const hero_countries = "Pays desservis";
const hero_experience = "Années d'expérience";
const hero_ontime = "Livraison à temps";
const about_title = "Notre histoire : Des années d'excellence en matière de commerce mondial";
const about_desc = "D'une petite entreprise à un leader mondial de la logistique import/export, notre parcours a été guidé par un engagement indéfectible envers la qualité, la fiabilité et la construction de partenariats durables.";
const about_mission_title = "Notre mission";
const about_mission_1 = "Relier les meilleures fermes du monde aux entreprises exigeant une qualité exceptionnelle, créant une valeur durable pour les producteurs, partenaires et consommateurs tout en promouvant des pratiques agricoles responsables à l'échelle mondiale.";
const about_mission_2 = "Nous croyons que des produits frais et de haute qualité doivent être accessibles aux entreprises du monde entier, quelles que soient les frontières géographiques ou les limitations saisonnières.";
const about_values_title = "Nos valeurs fondamentales";
const about_value_quality = "Qualité avant tout :";
const about_value_quality_desc = " Ne jamais transiger sur les standards qui définissent des produits d'exception";
const about_value_sustain = "Durabilité :";
const about_value_sustain_desc = " Soutenir l'agriculture écologique et des pratiques commerciales responsables";
const about_value_partner = "Partenariat :";
const about_value_partner_desc = " Construire des relations à long terme basées sur la confiance et le succès mutuel";
const about_value_innov = "Innovation :";
const about_value_innov_desc = " Améliorer continuellement nos processus et adopter de nouvelles technologies";
const products_title = "Produits premium pour le commerce mondial";
const products_desc = "Notre large gamme de produits comprend des fruits frais, des légumes et des produits de la mer provenant des meilleures régions du monde, garantissant une disponibilité toute l'année et une qualité constante pour vos besoins d'import/export.";
const products_fruits = "Fruits premium";
const products_fruits_desc = "Pommes, oranges, raisins et fruits tropicaux frais";
const products_veggies = "Légumes frais";
const products_veggies_desc = "Carottes, brocolis, tomates et légumes-feuilles";
const products_ops = "Opérations globales";
const products_ops_desc = "Chaîne d'approvisionnement complète du champ au marché";
const products_grapes = "Raisins de table";
const products_greens = "Légumes-feuilles";
const products_tropical = "Fruits tropicaux";
const contact_title = "Contactez-nous";
const contact_intro = "Prêt à discuter de vos besoins en approvisionnement ou en logistique ? Notre équipe d'experts est là pour vous proposer des solutions adaptées à vos exigences de qualité, de volume et de livraison.";
const contact_info_title = "Informations de contact";
const contact_info_desc = "Notre équipe est disponible pour discuter de vos besoins en produits frais, répondre à vos questions sur notre logistique et vous fournir des conseils d'experts sur l'approvisionnement international.";
const contact_phone_title = "Téléphone";
const contact_phone = "+34 667 91 80 18";
const contact_commercial_title = "Commercial";
const contact_commercial_phone = "+34 624 18 32 01";
const contact_phone_hours = "Lundi - Vendredi : 8h00 - 18h00";
const contact_email_title = "E-mail";
const contact_email = "info.medssimport@gmail.com";
const contact_email_response = "Nous répondons sous 24 heures";
const contact_hq_title = "Siège social";
const contact_hq_address = "LONGITUDINAL 5, No. 83 MERCABARNA 08040 BARCELONE";
const contact_warehouse_title = "Entrepôt";
const contact_fiscal_title = "Adresse Fiscale";
const contact_fiscal_address = "CALLE PUERTO 17 B SEVILLA 41020";
const company_info_title = "Informations de l'Entreprise";
const company_name_label = "Entreprise";
const company_name = "MED SS IMPORT & EXPORT";
const fiscal_address_label = "Adresse Fiscale";
const warehouse_address_label = "Adresse Entrepôt";
const tax_id_label = "Identification Fiscale";
const tax_id = "NIF / B06934541";
const bank_account_label = "Compte Bancaire";
const bank_account = "ES7600810215250001949495";
const swift_label = "SWIFT/BIC";
const swift_code = "BSABESBBXXX";
const email_label = "Email";
const company_phone_label = "Téléphone Entreprise";
const commercial_phone_label = "Téléphone Commercial";
const featured_title = "Produits premium pour le commerce mondial";
const featured_desc = "Sourcés et livrés par 🚢 MED SS IMPORT & EXPORT — votre partenaire de confiance pour la logistique d'import/export et les produits frais dans le monde entier.";
const featured_card1_title = "Transport de conteneurs";
const featured_card2_title = "Logistique des produits frais";
const featured_card3_title = "Solutions chaîne du froid";
const featured_card4_title = "Variété de produits frais";
const featured_card5_title = "Produits prêts à la vente";
const featured_card6_title = "Contrôle qualité";
const featured_card7_title = "Inventaire & Livraison";
const featured_btn = "Voir tous les produits";
const card_dried_fruits_title = "Fruits secs";
const card_citrus_fruits_title = "Agrumes";
const card_melons_title = "Melons";
const card_apples_pears_title = "Pommes & Poires";
const card_apple_warehouse_title = "Entrepôt de pommes";
const card_bulk_berries_title = "Baies en vrac";
const language = {
	current: "Langue Actuelle",
	description: "Ceci est une démonstration de notre système de changement de langue. L'interface se met à jour dynamiquement lorsque vous changez la langue."
};
const navigation = {
	home: "Accueil",
	about: "À propos",
	contact: "Contact",
	products: "Produits"
};
const products = {
	apples: "Pommes",
	avocados: "Avocats",
	cherimoyas: "Chérimoyas",
	dragon_fruits: "Fruits du Dragon",
	green_bananas: "Bananes Vertes",
	kiwi_fruit: "Kiwi",
	limes: "Citrons Verts",
	mangoes: "Mangues",
	piel_de_sapo_melon: "Melon Piel de Sapo",
	watermelon: "Pastèque",
	oranges: "Oranges",
	pears: "Poires",
	plums: "Prunes",
	red_grapes: "Raisins Rouges",
	ginger: "Gingembre",
	potatoes: "Pommes de Terre",
	tomatoes: "Tomates",
	quality_control: "Contrôle Qualité",
	professional_delivery: "Livraison Professionnelle",
	quality_control_desc: "Des standards de qualité rigoureux garantissent la fraîcheur",
	professional_delivery_desc: "Logistique fiable et gestion d'inventaire"
};
const frCommon = {
	brand: brand,
	nav_home: nav_home,
	nav_products: nav_products,
	nav_about: nav_about,
	nav_contact: nav_contact,
	lang_btn: lang_btn,
	footer_desc: footer_desc,
	footer_links: footer_links,
	footer_contact: footer_contact,
	footer_address: footer_address,
	footer_phone: footer_phone,
	footer_phone_company: footer_phone_company,
	footer_phone_commercial: footer_phone_commercial,
	footer_email: footer_email,
	footer_copyright: footer_copyright,
	footer_warehouse_label: footer_warehouse_label,
	footer_company_label: footer_company_label,
	footer_commercial_label: footer_commercial_label,
	hero_title: hero_title,
	hero_desc: hero_desc,
	hero_btn: hero_btn,
	hero_countries: hero_countries,
	hero_experience: hero_experience,
	hero_ontime: hero_ontime,
	about_title: about_title,
	about_desc: about_desc,
	about_mission_title: about_mission_title,
	about_mission_1: about_mission_1,
	about_mission_2: about_mission_2,
	about_values_title: about_values_title,
	about_value_quality: about_value_quality,
	about_value_quality_desc: about_value_quality_desc,
	about_value_sustain: about_value_sustain,
	about_value_sustain_desc: about_value_sustain_desc,
	about_value_partner: about_value_partner,
	about_value_partner_desc: about_value_partner_desc,
	about_value_innov: about_value_innov,
	about_value_innov_desc: about_value_innov_desc,
	products_title: products_title,
	products_desc: products_desc,
	products_fruits: products_fruits,
	products_fruits_desc: products_fruits_desc,
	products_veggies: products_veggies,
	products_veggies_desc: products_veggies_desc,
	products_ops: products_ops,
	products_ops_desc: products_ops_desc,
	products_grapes: products_grapes,
	products_greens: products_greens,
	products_tropical: products_tropical,
	contact_title: contact_title,
	contact_intro: contact_intro,
	contact_info_title: contact_info_title,
	contact_info_desc: contact_info_desc,
	contact_phone_title: contact_phone_title,
	contact_phone: contact_phone,
	contact_commercial_title: contact_commercial_title,
	contact_commercial_phone: contact_commercial_phone,
	contact_phone_hours: contact_phone_hours,
	contact_email_title: contact_email_title,
	contact_email: contact_email,
	contact_email_response: contact_email_response,
	contact_hq_title: contact_hq_title,
	contact_hq_address: contact_hq_address,
	contact_warehouse_title: contact_warehouse_title,
	contact_fiscal_title: contact_fiscal_title,
	contact_fiscal_address: contact_fiscal_address,
	company_info_title: company_info_title,
	company_name_label: company_name_label,
	company_name: company_name,
	fiscal_address_label: fiscal_address_label,
	warehouse_address_label: warehouse_address_label,
	tax_id_label: tax_id_label,
	tax_id: tax_id,
	bank_account_label: bank_account_label,
	bank_account: bank_account,
	swift_label: swift_label,
	swift_code: swift_code,
	email_label: email_label,
	company_phone_label: company_phone_label,
	commercial_phone_label: commercial_phone_label,
	featured_title: featured_title,
	featured_desc: featured_desc,
	featured_card1_title: featured_card1_title,
	featured_card2_title: featured_card2_title,
	featured_card3_title: featured_card3_title,
	featured_card4_title: featured_card4_title,
	featured_card5_title: featured_card5_title,
	featured_card6_title: featured_card6_title,
	featured_card7_title: featured_card7_title,
	featured_btn: featured_btn,
	card_dried_fruits_title: card_dried_fruits_title,
	card_citrus_fruits_title: card_citrus_fruits_title,
	card_melons_title: card_melons_title,
	card_apples_pears_title: card_apples_pears_title,
	card_apple_warehouse_title: card_apple_warehouse_title,
	card_bulk_berries_title: card_bulk_berries_title,
	language: language,
	navigation: navigation,
	products: products
};

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
i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  defaultNS: "common",
  ns: ["common"],
  detection: {
    order: ["localStorage", "navigator", "htmlTag"],
    caches: ["localStorage"],
    lookupLocalStorage: "lang"
  },
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: false
  }
});
const LanguageContext = createContext();
const LanguageProvider = ({ children }) => {
  const { t, i18n: i18nInstance } = useTranslation("common");
  const [language, setLanguage] = useState(i18nInstance.language || "en");
  const changeLanguage = (newLanguage) => {
    i18nInstance.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", newLanguage);
    }
  };
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setLanguage(lng);
    };
    i18nInstance.on("languageChanged", handleLanguageChange);
    return () => {
      i18nInstance.off("languageChanged", handleLanguageChange);
    };
  }, [i18nInstance]);
  const value = {
    language,
    changeLanguage,
    t
  };
  return /* @__PURE__ */ jsx(LanguageContext.Provider, { value, children });
};
const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

const LanguageWrapper = ({
  children,
  initialLanguage
}) => {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") || localStorage.getItem("lang");
      let targetLanguage;
      if (savedLanguage) {
        targetLanguage = savedLanguage;
      } else {
        const supportedLanguages = ["en", "es", "fr"];
        const browserLanguage = navigator.language.split("-")[0];
        if (supportedLanguages.includes(browserLanguage)) {
          targetLanguage = browserLanguage;
        } else {
          targetLanguage = initialLanguage || "es";
        }
        localStorage.setItem("language", targetLanguage);
        localStorage.setItem("lang", targetLanguage);
      }
      if (i18n.language !== targetLanguage) {
        i18n.changeLanguage(targetLanguage);
      }
      const handleLanguageChange = (event) => {
        const newLanguage = event.detail.language;
        if (i18n.language !== newLanguage) {
          i18n.changeLanguage(newLanguage);
        }
      };
      window.addEventListener("languageChange", handleLanguageChange);
      return () => {
        window.removeEventListener("languageChange", handleLanguageChange);
      };
    }
  }, [initialLanguage]);
  return /* @__PURE__ */ jsx(LanguageProvider, { children });
};

const $$Astro$8 = createAstro("https://mohammed-ks02.github.io/MEDSS-import-export-SL/");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "C:/Users/mohammed/Desktop/MEDSS-import-export-SL/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$7 = createAstro("https://mohammed-ks02.github.io/MEDSS-import-export-SL/");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "C:/Users/mohammed/Desktop/MEDSS-import-export-SL/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$6 = createAstro("https://mohammed-ks02.github.io/MEDSS-import-export-SL/");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "C:/Users/mohammed/Desktop/MEDSS-import-export-SL/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$5 = createAstro("https://mohammed-ks02.github.io/MEDSS-import-export-SL/");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "C:/Users/mohammed/Desktop/MEDSS-import-export-SL/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$4 = createAstro("https://mohammed-ks02.github.io/MEDSS-import-export-SL/");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "C:/Users/mohammed/Desktop/MEDSS-import-export-SL/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$3 = createAstro("https://mohammed-ks02.github.io/MEDSS-import-export-SL/");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "C:/Users/mohammed/Desktop/MEDSS-import-export-SL/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$2 = createAstro("https://mohammed-ks02.github.io/MEDSS-import-export-SL/");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "C:/Users/mohammed/Desktop/MEDSS-import-export-SL/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$1 = createAstro("https://mohammed-ks02.github.io/MEDSS-import-export-SL/");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "C:/Users/mohammed/Desktop/MEDSS-import-export-SL/node_modules/astro-seo/src/SEO.astro", void 0);

const DEFAULT_LANGUAGE = "es";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://mohammed-ks02.github.io/MEDSS-import-export-SL/");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, description, seo } = Astro2.props;
  const detectedLanguage = DEFAULT_LANGUAGE;
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- SEO Component -->', '<!-- Preload critical fonts --><link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" as="style"><!-- Schema.org structured data for Organization --><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "Organization",\n        "name": "MED SS IMPORT & EXPORT",\n        "url": "https://www.medssimport.com",\n        "logo": "https://www.medssimport.com/logo.webp",\n        "description": "Professional import-export and logistics for Spanish fresh produce worldwide",\n        "contactPoint": {\n          "@type": "ContactPoint",\n          "telephone": "+34 954 000 000",\n          "contactType": "sales",\n          "email": "info.medssimport@gmail.com"\n        },\n        "address": {\n          "@type": "PostalAddress",\n          "streetAddress": "Calle Puerto 17 B",\n          "postalCode": "41020",\n          "addressLocality": "Sevilla",\n          "addressCountry": "Spain"\n        },\n        "additionalProperty": {\n          "@type": "PropertyValue",\n          "name": "Warehouse",\n          "value": "Longitudinal 5 N\xBA 83, Mercabarna, 08040 Barcelona, Spain"\n        }\n      }\n    <\/script><!-- Preload language to prevent content flicker --><script>(function(){', "\n      // Set language in localStorage before React components hydrate\n      if (typeof Storage !== 'undefined') {\n        const currentLang = localStorage.getItem('language');\n        if (!currentLang) {\n          localStorage.setItem('language', detectedLanguage);\n        }\n      }\n      \n      // Set language cookie for persistence\n      document.cookie = `language=${detectedLanguage}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Strict`;\n    })();<\/script>", '</head> <body class="text-neutral-800 antialiased"> ', " <main> ", " </main> ", " </body></html>"], ["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- SEO Component -->', '<!-- Preload critical fonts --><link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" as="style"><!-- Schema.org structured data for Organization --><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "Organization",\n        "name": "MED SS IMPORT & EXPORT",\n        "url": "https://www.medssimport.com",\n        "logo": "https://www.medssimport.com/logo.webp",\n        "description": "Professional import-export and logistics for Spanish fresh produce worldwide",\n        "contactPoint": {\n          "@type": "ContactPoint",\n          "telephone": "+34 954 000 000",\n          "contactType": "sales",\n          "email": "info.medssimport@gmail.com"\n        },\n        "address": {\n          "@type": "PostalAddress",\n          "streetAddress": "Calle Puerto 17 B",\n          "postalCode": "41020",\n          "addressLocality": "Sevilla",\n          "addressCountry": "Spain"\n        },\n        "additionalProperty": {\n          "@type": "PropertyValue",\n          "name": "Warehouse",\n          "value": "Longitudinal 5 N\xBA 83, Mercabarna, 08040 Barcelona, Spain"\n        }\n      }\n    <\/script><!-- Preload language to prevent content flicker --><script>(function(){', "\n      // Set language in localStorage before React components hydrate\n      if (typeof Storage !== 'undefined') {\n        const currentLang = localStorage.getItem('language');\n        if (!currentLang) {\n          localStorage.setItem('language', detectedLanguage);\n        }\n      }\n      \n      // Set language cookie for persistence\n      document.cookie = \\`language=\\${detectedLanguage}; path=/; max-age=\\${60 * 60 * 24 * 30}; SameSite=Strict\\`;\n    })();<\/script>", '</head> <body class="text-neutral-800 antialiased"> ', " <main> ", " </main> ", " </body></html>"])), addAttribute(detectedLanguage, "lang"), renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "canonical": Astro2.url.href, "openGraph": {
    basic: {
      title,
      type: "website",
      image: new URL("/logo.webp", Astro2.url).href
    }
  }, "twitter": {
    creator: "@medssimport",
    site: "@medssimport",
    card: "summary_large_image"
  }, ...seo }), defineScriptVars({ detectedLanguage }), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "LanguageWrapper", LanguageWrapper, { "client:load": true, "initialLanguage": detectedLanguage, "client:component-hydration": "load", "client:component-path": "C:/Users/mohammed/Desktop/MEDSS-import-export-SL/src/components/LanguageWrapper", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` }), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/mohammed/Desktop/MEDSS-import-export-SL/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $, useLanguage as u, withBase as w };
