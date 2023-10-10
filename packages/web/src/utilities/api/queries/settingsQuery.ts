import type { ImageProps } from '.';
import { imageQuery } from '.';
import { getSanityData } from '../sanity';

export interface SettingsProps {
	baseUrl: string;
	metaTitleSuffix: string;
	ogImage: ImageProps;
}

export const settingsQuery = (): string => `
	*[_type == "settings"][0]{
		baseUrl,
		metaTitleSuffix,
		${imageQuery({ name: 'ogImage' })},
	}`;

/**
 * Function to use global siteSettings inside components
 *
 * Usage:
 * const settings: SettingsProps = await useSettings();
 */
let settings: SettingsProps;
export async function useSettings() {
	if (settings) {
		return settings;
	}
	settings = await getSanityData({ query: settingsQuery() });
	return settings;
}
