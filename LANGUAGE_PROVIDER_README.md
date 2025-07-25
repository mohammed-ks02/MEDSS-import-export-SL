# LanguageProvider Integration Documentation

This document explains how the LanguageProvider has been integrated into the Astro project to provide internationalization (i18n) support with server-side rendering.

## Overview

The LanguageProvider wrapper has been successfully integrated into the MainLayout.astro file to:
- Detect language on the server-side to prevent content flicker
- Wrap React components with the language context
- Preload the correct language for server-side rendered pages

## Implementation Details

### 1. Server-Side Language Detection

**File**: `src/utils/serverLanguage.ts`
- Detects language from URL parameters, cookies, and Accept-Language headers
- Provides fallback to default language (Spanish)
- Used during server-side rendering to determine initial language

### 2. LanguageProvider Wrapper

**File**: `src/components/LanguageWrapper.tsx`
- React component that wraps content with LanguageProvider context
- Handles client-side hydration with correct initial language
- Synchronizes server-detected language with client-side i18n

### 3. Updated MainLayout

**File**: `src/layouts/MainLayout.astro`
- Imports and uses server-side language detection
- Sets HTML lang attribute to detected language
- Wraps main content with LanguageWrapper component
- Includes preloading script to prevent content flicker

### 4. Enhanced i18n Configuration

**File**: `src/utils/i18n.ts`
- Updated LanguageProvider to handle server-side initial language
- Improved language persistence (localStorage + cookies)
- Better synchronization between server and client

## Usage in React Components

Any React component within the Astro project can now use the language context:

```tsx
import React from 'react';
import { useLanguage } from '../utils/i18n';

const MyComponent: React.FC = () => {
  const { language, changeLanguage, t } = useLanguage();
  
  return (
    <div>
      <p>Current language: {language}</p>
      <p>{t('common.welcome')}</p>
      <button onClick={() => changeLanguage('en')}>
        Switch to English
      </button>
    </div>
  );
};

export default MyComponent;
```

## Key Features

### Server-Side Rendering Support
- Language is detected on the server before rendering
- HTML lang attribute is set correctly for SEO
- No content flicker during hydration

### Language Persistence
- Language choice is saved in localStorage
- Backup persistence using cookies
- Survives browser sessions and page reloads

### Language Detection Priority
1. URL parameter (`?lang=en`)
2. Cookie value
3. Accept-Language header
4. Default language (Spanish)

### Preventing Content Flicker
- Server-side language detection sets initial language
- Client-side preloading script runs before React hydration
- LanguageWrapper synchronizes server and client state

## Files Modified/Created

### Modified Files:
- `src/layouts/MainLayout.astro` - Added LanguageProvider wrapper and language detection
- `src/utils/i18n.ts` - Enhanced LanguageProvider with better SSR support

### New Files:
- `src/components/LanguageWrapper.tsx` - React wrapper component
- `src/utils/serverLanguage.ts` - Server-side language detection utility
- `src/components/examples/LanguageExample.tsx` - Usage example component

## Testing the Integration

1. **Server-Side Detection**: Visit the site with different Accept-Language headers
2. **URL Parameters**: Add `?lang=en` or `?lang=fr` to the URL
3. **Persistence**: Change language and refresh the page
4. **React Components**: Use the example component to test context usage

## Supported Languages

- English (en)
- Spanish (es) - Default
- French (fr)

Additional languages can be added by:
1. Adding translation files to `src/locales/[lang]/`
2. Updating `SUPPORTED_LANGUAGES` in `serverLanguage.ts`
3. Adding language resources in `i18n.ts`

## Browser Compatibility

The implementation works with all modern browsers that support:
- localStorage
- ES6 modules
- React 18+
- Astro 4+

## Performance Considerations

- Server-side language detection adds minimal overhead
- Client-side language preloading prevents render blocking
- Language resources are loaded on-demand
- No unnecessary re-renders during language changes
