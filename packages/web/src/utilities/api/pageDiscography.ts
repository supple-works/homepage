import { pageQuery, type PageProps } from './queries';
import { getSanityData } from './sanity';

export interface PageDiscographyProps extends PageProps {
	title: string;
}

export const projectionPageDiscography = `{
	title
}`;

export async function getDataPageDiscography(): Promise<
	PageDiscographyProps | PageDiscographyProps[]
> {
	const query = pageQuery({
		type: 'page-discography',
		projection: projectionPageDiscography,
		multiple: true,
	});
	return await getSanityData({ query });
}
