import i18n from "i18next";

import en from "../i18n/en.json";
import german from "../i18n/german.json";
import czech from '../i18n/czech.json'

i18n.init({
	debug: false,
	lng: "en",
	fallbackLng: "german",
	lngCzech:'czech',
	ns: ["common"],
	defaultNS: "common",
	resources: { en, german ,czech},
	interpolation: { escapeValue: false }, // not needed for react
	react: { wait: true }
});

export default i18n;
