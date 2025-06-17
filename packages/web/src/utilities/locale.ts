export enum Locales {
	English = 'en',
	Dutch = 'nl',
}

export interface Locale {
	id: Locales;
	fullName: string;
	shortName: string;
	urlPrefix: string;
	locale: string;
	hreflang: string;
	direction: 'ltr' | 'rtl';
}

export const locales: { [key: string]: Locale } = {
	english: {
		id: Locales.English,
		fullName: 'English',
		shortName: 'En',
		urlPrefix: '/en',
		locale: 'en_gb',
		hreflang: 'en',
		direction: 'ltr',
	},
	dutch: {
		id: Locales.Dutch,
		fullName: 'Nederlands',
		shortName: 'Nl',
		urlPrefix: '/nl',
		locale: 'nl_nl',
		hreflang: 'nl',
		direction: 'ltr',
	},
};

export const localeCollection = [locales.english, locales.dutch];

export const langPathRegex = /\/([a-z]{2}-?[A-Z]{0,2})\/?/;
export const getLocaleFromURL = (pathname: string): Locale => {
	const langCodeMatch = pathname.match(langPathRegex);
	const langCode = langCodeMatch ? langCodeMatch[1] : localeCollection[0].id;

	return (
		localeCollection.find((locale) => locale.id === langCode) ||
		localeCollection[0]
	);
};
