import { projectionPageRecord, type PageRecordProps } from './pageRecord';
import { pageQuery, type PageProps, parentPageQuery } from './queries';
import { getSanityData } from './sanity';

export interface PageDiscographyProps extends PageProps {
	title: string;
	records?: PageRecordProps[];
}

export const projectionPageDiscography = `{
	title,
	"records": *[_type == 'page-record']{
		...${projectionPageRecord},
		${parentPageQuery()},
		"slug": slug.current,
	},
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
