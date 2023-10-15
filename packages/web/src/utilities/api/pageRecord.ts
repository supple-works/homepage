import { pageQuery, type PageProps, type ImageProps } from './queries';
import { getSanityData } from './sanity';

export interface PageRecordProps extends PageProps {
	song: {
		title: string;
		releaseDate: string;
		album: string;
		artist: string;
		albumArt: ImageProps;
	};
}

export const projectionPageRecord = `{
	song
}`;

export async function getDataPageRecord(): Promise<
	PageRecordProps | PageRecordProps[]
> {
	const query = pageQuery({
		type: 'page-record',
		projection: projectionPageRecord,
		multiple: true,
	});
	return await getSanityData({ query });
}
