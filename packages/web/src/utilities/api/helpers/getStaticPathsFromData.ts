import type { PageProps } from '../queries';
import { getPageFolder } from './getParentPages';

export const getStaticPathsFromData = ({
	data,
	fragment,
}: {
	data: PageProps | PageProps[];
	fragment: string;
}) =>
	Array.isArray(data)
		? data
				.filter((page) => page.slug)
				.map((page) => ({
					params: {
						slug: getPageFolder(page),
						[fragment]: page.slug,
					},
					props: {
						pageData: page,
					},
				}))
				.flat(Infinity)
		: data?.slug
		? [
				{
					params: {
						slug: getPageFolder(data),
						[fragment]: data.slug,
					},
					props: {
						pageData: data,
					},
				},
		  ]
		: [];
