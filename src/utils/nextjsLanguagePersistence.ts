/**
 * Next.js Router Events Language Persistence
 * 
 * This utility provides language persistence across Next.js router navigation.
 * It hooks into Next.js router events to maintain i18n.language consistency
 * and supports ?lng=xx URL parameters for shareable links.
 * 
 * Usage:
 * - Import and initialize in your _app.tsx or layout component
 * - Call setupNextjsLanguagePersistence(router, i18n) after both are initialized
 */

// Note: This requires Next.js dependencies
// import { Router } from 'next/router';
// import { i18n as I18nInstance } from 'i18next';

// For demonstration purposes, we'll use generic types
type NextRouter = {
  events: {
    on: (event: string, handler: (...args: any[]) => void) => void;
    off: (event: string, handler: (...args: any[]) => void) => void;
  };
  query: { [key: string]: string | string[] | undefined };
  pathname: string;
  asPath: string;
  push: (url: string, as?: string, options?: any) => Promise<boolean>;
  replace: (url: string, as?: string, options?: any) => Promise<boolean>;
};

type I18nInstance = {
  language: string;
  changeLanguage: (lng: string) => Promise<void>;
};

const SUPPORTED_LANGUAGES = ['en', 'es', 'fr'];

/**
 * Setup language persistence for Next.js router events
 */
export function setupNextjsLanguagePersistence(
  router: NextRouter,
  i18n: I18nInstance
): () => void {
  // Handler for route change start
  const handleRouteChangeStart = (url: string) => {
    console.log('Route changing to:', url);
    
    // Extract language from URL if present
    const urlObj = new URL(url, window.location.origin);
    const urlLanguage = urlObj.searchParams.get('lng');
    
    // If URL has a language parameter, ensure i18n is set to that language
    if (urlLanguage && SUPPORTED_LANGUAGES.includes(urlLanguage)) {
      if (i18n.language !== urlLanguage) {
        i18n.changeLanguage(urlLanguage);
        // Persist to localStorage and cookie
        localStorage.setItem('language', urlLanguage);
        document.cookie = `language=${urlLanguage}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Strict`;
      }
    }
  };

  // Handler for route change complete
  const handleRouteChangeComplete = (url: string) => {
    console.log('Route changed to:', url);
    
    // Check if current URL has language parameter
    const urlObj = new URL(url, window.location.origin);
    const urlLanguage = urlObj.searchParams.get('lng');
    
    // If no language in URL but we have a current language, add it for shareable links
    if (!urlLanguage && i18n.language) {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('lng', i18n.language);
      
      // Update URL without triggering navigation
      window.history.replaceState({}, '', newUrl.toString());
    }
    
    // Ensure language consistency
    if (urlLanguage && SUPPORTED_LANGUAGES.includes(urlLanguage) && i18n.language !== urlLanguage) {
      i18n.changeLanguage(urlLanguage);
      localStorage.setItem('language', urlLanguage);
      document.cookie = `language=${urlLanguage}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Strict`;
    }
  };

  // Handler for route change error
  const handleRouteChangeError = (err: Error, url: string) => {
    console.error('Route change error:', err, 'URL:', url);
    // Could implement error handling for language-related navigation issues
  };

  // Register event listeners
  router.events.on('routeChangeStart', handleRouteChangeStart);
  router.events.on('routeChangeComplete', handleRouteChangeComplete);
  router.events.on('routeChangeError', handleRouteChangeError);

  // Return cleanup function
  return () => {
    router.events.off('routeChangeStart', handleRouteChangeStart);
    router.events.off('routeChangeComplete', handleRouteChangeComplete);
    router.events.off('routeChangeError', handleRouteChangeError);
  };
}

/**
 * Hook for language persistence in Next.js components
 * Usage in React components:
 * 
 * import { useRouter } from 'next/router';
 * import { useLanguagePersistence } from './utils/nextjsLanguagePersistence';
 * 
 * function MyComponent() {
 *   const router = useRouter();
 *   useLanguagePersistence(router, i18n);
 *   // ... rest of component
 * }
 */
export function useLanguagePersistence(router: NextRouter) {
  // This would use React.useEffect in a real Next.js environment
  // React.useEffect(() => {
  //   const cleanup = setupNextjsLanguagePersistence(router, i18n);
  //   return cleanup;
  // }, [router, i18n]);
  
  console.log('Language persistence hook initialized for:', router.pathname);
}

/**
 * Helper function to navigate with language parameter
 */
export function navigateWithLanguage(
  router: NextRouter,
  path: string,
  language: string,
  options: { replace?: boolean } = {}
) {
  const url = new URL(path, window.location.origin);
  url.searchParams.set('lng', language);
  
  const method = options.replace ? router.replace : router.push;
  return method(url.pathname + url.search);
}

/**
 * Helper to get language from Next.js router query
 */
export function getLanguageFromRouter(router: NextRouter): string | null {
  const lng = router.query.lng;
  if (typeof lng === 'string' && SUPPORTED_LANGUAGES.includes(lng)) {
    return lng;
  }
  return null;
}

/**
 * Initialize language from URL on first load (for Next.js pages)
 * Call this in your _app.tsx or getInitialProps
 */
export function initializeLanguageFromUrl(
  router: NextRouter,
  i18n: I18nInstance
): string {
  // Check URL parameter first
  const urlLanguage = getLanguageFromRouter(router);
  
  if (urlLanguage) {
    // Language found in URL - use it and persist
    i18n.changeLanguage(urlLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', urlLanguage);
      document.cookie = `language=${urlLanguage}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Strict`;
    }
    return urlLanguage;
  }
  
  // No URL language - check localStorage/cookie
  if (typeof window !== 'undefined') {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
      // Add language to URL for shareable links
      const url = new URL(window.location.href);
      url.searchParams.set('lng', savedLanguage);
      router.replace(url.pathname + url.search, undefined, { shallow: true });
      return savedLanguage;
    }
  }
  
  // Use default language and add to URL
  const defaultLang = 'es';
  const url = new URL(window.location.href);
  url.searchParams.set('lng', defaultLang);
  router.replace(url.pathname + url.search, undefined, { shallow: true });
  
  return defaultLang;
}

export { SUPPORTED_LANGUAGES };
