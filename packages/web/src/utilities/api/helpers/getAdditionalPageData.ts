import { localeCollection, type Locale } from 'src/utilities/locale';
import type { ParentPageProps } from '../queries';
import { getPageFolder } from './getParentPages';

export interface AlternativeTranslationsProps extends ParentPageProps {
	locale: Locale;
	href: string;
}

const getDataForAlernativeTranslations = (pages: any) =>
	pages.map((page: any) => ({
		...page,
		alternativeTranslations: page.alternativeTranslations
			? page.alternativeTranslations
					// filter out null values
					.filter((alternative: any) => alternative)
					// filter out current page
					.filter((alternative: any) => alternative.localeID !== page.localeID)
					// Build up alterantiveTranslations object
					.map((alternative: any) => ({
						...alternative,
						href: `${
							alternative.subFolderReference
								? `${getPageFolder(alternative)}/`
								: ''
						}${alternative.slug || ''}`,
						locale: localeCollection.filter(
							(locale) => locale.id === alternative.localeID,
						)[0],
					}))
			: null,
	}));

export const getAdditionalPageData = (pages: any) =>
	getDataForAlernativeTranslations(pages);
