import {
	locales,
	type localeCollection,
	type Locale,
} from 'src/utilities/locale';
import type { ImageProps } from '.';
import { imageQuery } from '.';
import { getSanityData } from '../sanity';

export interface SettingsProps {
	baseUrl: string;
	metaTitleSuffix: string;
	ogImage: ImageProps;
}

export type SettingsByLocale = {
	[K in (typeof localeCollection)[number]['id']]: SettingsProps;
};

export const settingsQuery = ({ locale }: { locale: Locale }): string => `
	*[_type == "settings" && language == "${locale.id}"][0]{
		baseUrl,
		metaTitleSuffix,
		${imageQuery({ name: 'ogImage' })},
	}`;

let settingsTranslated: SettingsByLocale;
async function storeSettings() {
	if (settingsTranslated) return;

	settingsTranslated = await Object.entries(locales).reduce(
		async (acc, [, value]) => ({
			...(await acc),
			[value.id]: (await getSanityData({
				query: settingsQuery({ locale: value }),
			})) as SettingsProps,
		}),
		{} as any,
	);
}

/**
 * Function to use global siteSettings inside components
 *
 * Usage:
 * const settings = await useSettings({locale});
 */
export async function useSettings({
	locale = locales[0],
}: {
	locale?: Locale;
}): Promise<SettingsProps> {
	await storeSettings();
	return settingsTranslated[locale.id] || settingsTranslated[locales[0].id];
}
