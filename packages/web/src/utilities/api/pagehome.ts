import { getAdditionalPageData } from './helpers/getAdditionalPageData';
import { pageQuery, type PageProps } from './queries';
import { getSanityData } from './sanity';

export interface PageHomeProps extends PageProps {
	title: string;
}

export const projectionHome = `{
	title,
}`;

export async function getDataHome(): Promise<PageHomeProps[]> {
	const query = pageQuery({
		type: 'page-home',
		projection: projectionHome,
		multiple: true,
	});

	const data = await getSanityData({ query });

	return getAdditionalPageData(data);
}
