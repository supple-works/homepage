import { useSanityClient } from '@sanity/astro';
const client = useSanityClient();

export async function getSanityData({ query }: { query: string }) {
	return await client.fetch(query);
}
