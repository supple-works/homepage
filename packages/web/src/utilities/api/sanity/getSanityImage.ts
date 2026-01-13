import type { SanityImageSource } from "@sanity/image-url";
import { createImageUrlBuilder } from "@sanity/image-url";
import client from "./sanityClient";

const builder = createImageUrlBuilder(client);

export default function getSanityImage(source: SanityImageSource) {
	return builder.image(source);
}
