import { localeCollection } from 'src/utilities/locale';
import type { PageProps } from '../queries';
import { getPageFolder } from './getParentPages';

export const getStaticPathsFromData = ({
	data,
	fragment,
	includePagesData,
}: {
	data: PageProps | PageProps[];
	fragment?: string;
	includePagesData?: boolean;
}) =>
	Array.isArray(data)
		? data
				.filter(
					(page) =>
						localeCollection.filter(
							(locale) => locale.id === page.localeID || page.localeID === null,
						).length,
				)
				.map((page) => ({
					params: {
						locale:
							page.localeID && page.localeID !== localeCollection[0].id
								? page.localeID
								: undefined,
						slug: getPageFolder(page),
						...(fragment ? { [fragment]: page.slug } : {}),
					},
					props: {
						pageData: page,
						locale:
							localeCollection.filter(
								(locale) => locale.id === page.localeID,
							)[0] || localeCollection[0],
						...(includePagesData ? { pagesData: data } : {}),
					},
				}))
				.flat(Infinity)
		: data?.slug
		? [
				{
					params: {
						locale:
							data.localeID && data.localeID !== localeCollection[0].id
								? data.localeID
								: undefined,
						slug: getPageFolder(data),
						...(fragment ? { [fragment]: data.slug } : {}),
					},
					props: {
						pageData: data,
						locale:
							localeCollection.filter(
								(locale) => locale.id === data.localeID,
							)[0] || localeCollection[0],
					},
				},
		  ]
		: [];
