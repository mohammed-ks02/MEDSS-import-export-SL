#!/usr/bin/env node

/**
 * Comprehensive Website Fix Script
 * Fixes all issues including images, translations, links, and default language
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Starting comprehensive website fix...\n');

// 1. Fix remaining JPG references to WEBP
console.log('📸 Fixing image extensions...');

function fixImageExtensions(filePath) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;
    
    // Replace .jpg with .webp
    if (content.includes('.jpg')) {
      content = content.replace(/\.jpg/g, '.webp');
      hasChanges = true;
    }
    
    // Replace .png with .webp (except favicon)
    if (content.includes('.png') && !content.includes('favicon')) {
      content = content.replace(/logo\.png/g, 'logo.webp');
      hasChanges = true;
    }
    
    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  ✅ Fixed: ${path.basename(filePath)}`);
    }
  }
}

// Fix image extensions in all components and pages
const filesToFix = [
  'src/components/Header_clean.astro',
  'src/layouts/MainLayout.astro',
];

filesToFix.forEach(file => {
  const fullPath = path.join(__dirname, file);
  fixImageExtensions(fullPath);
});

// 2. Fix CSS file references
console.log('\n🎨 Adding missing CSS classes...');

const globalCssPath = path.join(__dirname, 'src/styles/global.css');
if (fs.existsSync(globalCssPath)) {
  let cssContent = fs.readFileSync(globalCssPath, 'utf8');
  
  // Add missing utility classes if they don't exist
  const missingClasses = `
/* Container utility */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Section utility */
.section {
  padding: 4rem 0;
}

/* Button utilities */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #059669, #047857);
  color: white;
  font-weight: 600;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #047857, #065f46);
  transform: translateY(-1px);
  box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Card utility */
.card {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.card:hover {
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}
`;

  if (!cssContent.includes('.container {')) {
    cssContent += missingClasses;
    fs.writeFileSync(globalCssPath, cssContent, 'utf8');
    console.log('  ✅ Added missing CSS utilities');
  }
}

// 3. Create enhanced translation system
console.log('\n🌐 Enhancing translation system...');

const enhancedTranslationScript = `
// Enhanced Global Translation System
(function() {
  'use strict';
  
  let currentLanguage = 'es'; // Default to Spanish
  let translations = {};
  
  // Load translations from JSON files
  async function loadTranslations() {
    try {
      const [enRes, esRes, frRes] = await Promise.all([
        fetch('/src/locales/en/common.json').catch(() => null),
        fetch('/src/locales/es/common.json').catch(() => null),
        fetch('/src/locales/fr/common.json').catch(() => null)
      ]);
      
      if (enRes) translations.en = await enRes.json();
      if (esRes) translations.es = await esRes.json();
      if (frRes) translations.fr = await frRes.json();
    } catch (error) {
      console.warn('Could not load translations:', error);
      // Fallback translations
      translations = {
        en: {
          nav_home: "Home",
          nav_products: "Products", 
          nav_about: "About Us",
          nav_contact: "Contact"
        },
        es: {
          nav_home: "Inicio",
          nav_products: "Productos",
          nav_about: "Sobre Nosotros", 
          nav_contact: "Contacto"
        },
        fr: {
          nav_home: "Accueil",
          nav_products: "Produits",
          nav_about: "À propos",
          nav_contact: "Contact"
        }
      };
    }
  }
  
  // Apply translations to elements
  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[currentLanguage] && translations[currentLanguage][key]) {
        element.textContent = translations[currentLanguage][key];
      }
    });
  }
  
  // Update language display
  function updateLanguageDisplay() {
    const langSpans = document.querySelectorAll('#current-lang, #current-lang-mobile');
    langSpans.forEach(span => {
      if (span) span.textContent = currentLanguage.toUpperCase();
    });
    
    // Hide current language in dropdown
    document.querySelectorAll('.lang-option, .lang-option-mobile').forEach(option => {
      const optionLang = option.getAttribute('data-lang');
      if (optionLang === currentLanguage) {
        option.style.display = 'none';
      } else {
        option.style.display = 'block';
      }
    });
  }
  
  // Change language
  function changeLanguage(newLang) {
    if (translations[newLang]) {
      currentLanguage = newLang;
      localStorage.setItem('lang', newLang);
      localStorage.setItem('language', newLang);
      applyTranslations();
      updateLanguageDisplay();
      
      // Trigger custom event for React components
      window.dispatchEvent(new CustomEvent('languageChange', { 
        detail: { language: newLang } 
      }));
    }
  }
  
  // Initialize
  function init() {
    // Get saved language or default to Spanish
    const savedLang = localStorage.getItem('lang') || localStorage.getItem('language') || 'es';
    currentLanguage = savedLang;
    
    loadTranslations().then(() => {
      applyTranslations();
      updateLanguageDisplay();
    });
    
    // Set up language switchers
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('lang-option') || e.target.classList.contains('lang-option-mobile')) {
        const newLang = e.target.getAttribute('data-lang');
        changeLanguage(newLang);
        
        // Close dropdown
        const dropdowns = document.querySelectorAll('#lang-dropdown, #lang-dropdown-mobile');
        dropdowns.forEach(dropdown => dropdown.classList.add('hidden'));
      }
    });
  }
  
  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Expose globally
  window.changeLanguage = changeLanguage;
})();
`;

// Add the enhanced translation script to the main layout
const mainLayoutPath = path.join(__dirname, 'src/layouts/MainLayout.astro');
if (fs.existsSync(mainLayoutPath)) {
  let layoutContent = fs.readFileSync(mainLayoutPath, 'utf8');
  
  if (!layoutContent.includes('Enhanced Global Translation System')) {
    // Add the script before the closing body tag
    layoutContent = layoutContent.replace(
      '</body>',
      `    <script>${enhancedTranslationScript}</script>\n  </body>`
    );
    
    fs.writeFileSync(mainLayoutPath, layoutContent, 'utf8');
    console.log('  ✅ Enhanced translation system added');
  }
}

// 4. Fix navigation links
console.log('\n🔗 Ensuring all navigation links work...');

// Verify all page files exist
const requiredPages = [
  'src/pages/index.astro',
  'src/pages/about.astro', 
  'src/pages/contact.astro',
  'src/pages/products/index.astro'
];

let allPagesExist = true;
requiredPages.forEach(page => {
  const pagePath = path.join(__dirname, page);
  if (!fs.existsSync(pagePath)) {
    console.log(`  ❌ Missing: ${page}`);
    allPagesExist = false;
  } else {
    console.log(`  ✅ Found: ${page}`);
  }
});

if (allPagesExist) {
  console.log('  ✅ All navigation pages exist');
} else {
  console.log('  ⚠️  Some pages are missing - links may not work');
}

// 5. Verify asset files exist
console.log('\n📁 Checking asset files...');

const requiredAssets = [
  'public/logo.webp',
  'public/VID-20250701-WA0055.mp4',
  'public/IMG-20250701-WA0047.webp'
];

requiredAssets.forEach(asset => {
  const assetPath = path.join(__dirname, asset);
  if (fs.existsSync(assetPath)) {
    console.log(`  ✅ Found: ${asset}`);
  } else {
    console.log(`  ❌ Missing: ${asset}`);
  }
});

console.log('\n🎉 Website fix completed!');
console.log('\n📋 Summary of fixes:');
console.log('  ✅ Fixed image extensions (.jpg → .webp)');
console.log('  ✅ Added missing CSS utilities');
console.log('  ✅ Enhanced translation system');
console.log('  ✅ Set default language to Spanish');
console.log('  ✅ Verified navigation pages exist');
console.log('  ✅ Checked asset files');

console.log('\n🚀 Ready to test with: npm run dev');
