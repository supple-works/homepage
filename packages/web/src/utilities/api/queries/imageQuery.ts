import type { SanityImageSource } from "@sanity/image-url";

export type { SanityImageSource as ImageProps };

export function imageQuery({ name = "image" }: { name?: string }): string {
	return `${name}`;
}
