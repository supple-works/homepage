export interface PageProps {
	type: string;
	updatedAt: string;
	id: string;
}

export const pageQuery = ({
	type,
	projection,
	multiple = false,
}: {
	type: string;
	projection: string;
	multiple?: boolean;
}): string => {
	return `*[_type in ["${type}"]]${multiple ? '' : '[0]'} {
		"type": _type,
		"updatedAt": _updatedAt,
		"id": _id,
		...${projection},
	}`;
};
