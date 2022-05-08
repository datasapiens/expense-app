import i18nInstance from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';

i18nInstance.use(initReactI18next).init({
	resources: {
		en: {
			translation: translationEN,
		},
	},
	lng: 'en',
	interpolation: {
		escapeValue: false,
	},
});

export const i18n = i18nInstance;
