import type { PageProps } from '../queries';

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
						slug: undefined,
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
						slug: undefined,
						[fragment]: data.slug,
					},
					props: {
						pageData: data,
					},
				},
		  ]
		: [];
