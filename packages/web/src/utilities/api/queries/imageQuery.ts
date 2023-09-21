import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
export type { SanityImageSource as ImageProps };

export function imageQuery({ name = 'image' }: { name?: string }): string {
	return `${name}`;
}
