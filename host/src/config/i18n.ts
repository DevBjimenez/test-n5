import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
	.use(initReactI18next) // inicializar react-i18next
	.init({
		resources: {
			en: {
				translation: {
					language: 'Language',
					es: 'Es',
					en: 'En',
				},
			},
			es: {
				translation: {
					language: 'Idioma',
					es: 'Es',
					en: 'En',
				},
			},
		},
		lng: 'en',
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
