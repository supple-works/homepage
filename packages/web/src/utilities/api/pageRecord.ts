import {
	pageQuery,
	type PageProps,
	type SongProps,
	songQuery,
} from './queries';
import { getSanityData } from './sanity';

export interface PageRecordProps extends PageProps {
	song: SongProps;
}

export const projectionPageRecord = `{
	${songQuery({ name: 'song' })},
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
