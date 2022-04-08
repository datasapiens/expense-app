import i18next from 'i18next';

import english from '../locales/en/translation.json';
import spanish from '../locales/es/translation.json';

interface TranslationKeys {
  [key: string]: string;
}

const translations = {
  'en-US': english,
  'es-ES': spanish,
};

export const getCurrentLanguage = (): string =>
  localStorage.getItem('i18nextLng') || 'en-US';

export const setCurrentLanguage = (lang: string) => {
  i18next.changeLanguage(lang, err => {
    if (err) return console.error('Error on change language to: lang', err);
  });
};

export const isLangES = () => {
  return getCurrentLanguage() === 'es-ES';
};

export const getLanguageKeys = (lang: string) => {
  const keys = localStorage.getItem(
    `${lang?.toLocaleLowerCase() || 'en'}-language-keys`,
  );
  if (keys) return JSON.parse(keys);
  return translations[lang];
};

export const setLanguageKeys = (lang: string, keys?: TranslationKeys) => {
  localStorage.setItem(
    `${lang?.toLocaleLowerCase() || 'en'}-language-keys`,
    JSON.stringify(keys || english),
  );
};
