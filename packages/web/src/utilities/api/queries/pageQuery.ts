import type { Locale } from 'src/utilities/locale';
import {
	metaDataQuery,
	type MetaDataProps,
	parentPageQuery,
	type ParentPageProps,
} from '.';

interface AlternativeTranslationProps extends ParentPageProps {
	locale: Locale;
	slug: string;
}

export interface PageProps extends MetaDataProps, ParentPageProps {
	type: string;
	createdAt: string;
	updatedAt: string;
	id: string;
	alternativeTranslations: AlternativeTranslationProps[];
	localeID?: string;
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
		"localeID": language,
		${metaDataQuery()},
		${parentPageQuery()},
		...${projection},
		"alternativeTranslations": *[_type == "translation.metadata" && references(^._id)][0].translations[].value->{
			"slug": slug.current,
			"localeID": language,
			${parentPageQuery()},
		},
	}`;
};
