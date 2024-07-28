import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .use(backend)
    .init({
        fallbackLng: 'pl',
        lng: 'pl',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    'nav.about': 'About me',
                    'nav.skills': 'Skills',
                    'nav.projects': 'Projects',
                    'nav.certificates': 'Certificates',
                    'nav.contact': 'Contact',
                },
            },
            pl: {
                translation: {
                    'nav.about': 'O mnie',
                    'nav.skills': 'Umiejętności',
                    'nav.projects': 'Projekty',
                    'nav.certificates': 'Certyfikaty',
                    'nav.contact': 'Kontakt',
                },
            },
        },
    });

export default i18n;
