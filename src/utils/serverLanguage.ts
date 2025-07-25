/**
 * Server-side language detection utility for Astro
 * Detects language from various sources in order of preference
 */

const SUPPORTED_LANGUAGES = ['en', 'es', 'fr'];
const DEFAULT_LANGUAGE = 'es';

interface LanguageDetectionOptions {
  acceptLanguageHeader?: string;
  cookieLanguage?: string;
  urlLanguage?: string;
}

/**
 * Detect the preferred language on the server side
 * Order of preference: URL > Cookie > Accept-Language header > Default
 */
export function detectServerLanguage(options: LanguageDetectionOptions = {}): string {
  const { acceptLanguageHeader, cookieLanguage, urlLanguage } = options;

  // 1. Check URL parameter/path (highest priority)
  if (urlLanguage && SUPPORTED_LANGUAGES.includes(urlLanguage)) {
    return urlLanguage;
  }

  // 2. Check cookie
  if (cookieLanguage && SUPPORTED_LANGUAGES.includes(cookieLanguage)) {
    return cookieLanguage;
  }

  // 3. Parse Accept-Language header
  if (acceptLanguageHeader) {
    const preferredLanguage = parseAcceptLanguage(acceptLanguageHeader);
    if (preferredLanguage && SUPPORTED_LANGUAGES.includes(preferredLanguage)) {
      return preferredLanguage;
    }
  }

  // 4. Fall back to default
  return DEFAULT_LANGUAGE;
}

/**
 * Parse Accept-Language header to get the most preferred supported language
 */
function parseAcceptLanguage(acceptLanguage: string): string | null {
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [code, q = '1'] = lang.trim().split(';q=');
      return {
        code: code.split('-')[0].toLowerCase(), // Get base language code (e.g., 'en' from 'en-US')
        quality: parseFloat(q)
      };
    })
    .sort((a, b) => b.quality - a.quality); // Sort by quality descending

  for (const lang of languages) {
    if (SUPPORTED_LANGUAGES.includes(lang.code)) {
      return lang.code;
    }
  }

  return null;
}

/**
 * Get language from Astro request
 */
export function getLanguageFromRequest(request: Request): string {
  const url = new URL(request.url);
  const cookies = parseCookies(request.headers.get('cookie') || '');
  
  return detectServerLanguage({
    acceptLanguageHeader: request.headers.get('accept-language') || undefined,
    cookieLanguage: cookies.language,
    // Support both 'lang' and 'lng' parameters for compatibility
    urlLanguage: url.searchParams.get('lng') || url.searchParams.get('lang') || undefined
  });
}

/**
 * Simple cookie parser
 */
function parseCookies(cookieHeader: string): Record<string, string> {
  const cookies: Record<string, string> = {};
  
  cookieHeader.split(';').forEach(cookie => {
    const [name, value] = cookie.trim().split('=');
    if (name && value) {
      cookies[name] = decodeURIComponent(value);
    }
  });
  
  return cookies;
}

export { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE };
