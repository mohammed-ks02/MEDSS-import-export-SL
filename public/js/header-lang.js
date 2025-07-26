// Check if translations is available from the global scope
if (typeof translations === 'undefined') {
  console.error('Translations not loaded. Make sure the translations object is available.');
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'en';
  setLanguage(lang);
  
  // Set up mobile menu toggle after DOM is loaded
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      mobileMenu.classList.toggle('hidden');
    });
  }
});

window.toggleLang = function() {
  const current = localStorage.getItem('lang') || 'en';
  let next;
  if (current === 'en') {
    next = 'es';
  } else if (current === 'es') {
    next = 'fr';
  } else {
    next = 'en';
  }
  setLanguage(next);
};

// Language setting logic
function setLanguage(lang) {
  if (typeof translations === 'undefined') {
    console.error('Translations object not found');
    return;
  }
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Update both language buttons
  const btn = document.getElementById('lang-toggle');
  if (btn && translations[lang]) {
    const langBtnSpan = btn.querySelector('[data-i18n="lang_btn"]');
    if (langBtnSpan) {
      langBtnSpan.textContent = translations[lang].lang_btn;
    }
  }
  
  const btnMobile = document.getElementById('lang-toggle-mobile');
  if (btnMobile && translations[lang]) {
    const langBtnSpanMobile = btnMobile.querySelector('[data-i18n="lang_btn"]');
    if (langBtnSpanMobile) {
      langBtnSpanMobile.textContent = translations[lang].lang_btn;
    }
  }
  
  localStorage.setItem('lang', lang);
}
