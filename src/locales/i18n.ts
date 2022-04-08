import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { ConvertedToFunctionsType } from './types';
import en from './en/translation.json';
import es from './es/translation.json';

const translationsJson = {
  'en-US': {
    translation: en,
  },
  'es-ES': {
    translation: es,
  },
};

export type TranslationResource = typeof en;
export type LanguageKey = keyof TranslationResource;

export const translations: ConvertedToFunctionsType<TranslationResource> =
  {} as any;

/*
 * Converts the static JSON file into object where keys are identical
 * but values are functions that produces the same key as string.
 * This is helpful when using the JSON file keys and still have the intellisense support
 * along with type-safety
 */
const convertToFunctions = (obj: any, dict: {}, current?: string) => {
  Object.keys(obj).forEach(key => {
    const currentLookupKey = current ? `${current}.${key}` : key;
    if (typeof obj[key] === 'object') {
      dict[key] = {};
      convertToFunctions(obj[key], dict[key], currentLookupKey);
    } else {
      dict[key] = () => currentLookupKey;
    }
  });
};
const allowedLanguages = ['en-US', 'es-ES'];
const defaultLng = 'en-US';
let lng = defaultLng;

const storageLanguage = localStorage.getItem('i18nextLng');
if (storageLanguage && allowedLanguages.indexOf(storageLanguage) > -1) {
  lng = storageLanguage;
}

i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init(
    {
      resources: translationsJson,
      lng,
      fallbackLng: 'en-US',
      debug: false,
      saveMissing: true, // must be enabled
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    },
    () => convertToFunctions(en, translations),
  );

i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init(
    {
      resources: translationsJson,
      lng,
      fallbackLng: 'en-US',
      debug:
        process.env.NODE_ENV !== 'production' &&
        process.env.NODE_ENV !== 'test',

      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    },
    () => convertToFunctions(en, translations),
  );

export const i18n = i18next;
export default i18next;
