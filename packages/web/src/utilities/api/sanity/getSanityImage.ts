import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from '@sanity/image-url';
import client from './sanityClient';
const builder = imageUrlBuilder(client);

export default function getSanityImage(source: SanityImageSource) {
	return builder.image(source);
}
