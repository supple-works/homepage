import {
	metaDataQuery,
	type MetaDataProps,
	parentPageQuery,
	type ParentPageProps,
} from '.';

export interface PageProps extends MetaDataProps, ParentPageProps {
	type: string;
	createdAt: string;
	updatedAt: string;
	id: string;
	slug?: string;
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
		"createdAt": _createdAt,
		"updatedAt": _updatedAt,
		"id": _id,
		"slug": slug.current,
		${metaDataQuery()},
		${parentPageQuery()},
		...${projection},
	}`;
};
