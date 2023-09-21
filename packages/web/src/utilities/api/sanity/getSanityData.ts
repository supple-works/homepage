import client from './sanityClient';

export async function getSanityData({ query }: { query: string }) {
	return await client.fetch(query);
}
