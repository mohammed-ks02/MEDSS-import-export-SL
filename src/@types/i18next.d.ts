// src/@types/i18next.d.ts

// This file uses TypeScript's "module augmentation" to make i18next fully type-safe. [15]

import 'i18next';

// Import your translation files to infer their structure.
// Ensure these paths correctly point to your JSON resource files.
import en from '../../public/locales/en/translation.json';
import fr from '../../public/locales/fr/translation.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    /**
     * The default namespace.
     * [15]
     */
    defaultNS: 'translation';

    /**
     * Tells TypeScript the shape of your translation resources,
     * enabling key autocompletion and type-checking for the t() function.
     * [15]
     */
    resources: {
      translation: typeof en;
    };

    /**
     * Ensures the t() function will not return null for missing keys.
     * [15]
     */
    returnNull: false;
  }
}
