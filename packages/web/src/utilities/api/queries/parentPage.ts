export interface ParentPageProps {
	parentPage?: {
		slug: string;
		title: string;
		parentPage?: {
			slug: string;
			title: string;
			parentPage?: {
				slug: string;
				title: string;
				parentPage?: {
					slug: string;
					title: string;
				};
			};
		};
	};
}

export const parentPageQuery = (): string => {
	return `parentPage->{
		"slug": slug.current,
		"title": select(
			defined(metaData.title) => metaData.title,
		),
		parentPage->{
			"slug": slug.current,
			"title": select(
				defined(metaData.title) => metaData.title,
			),
			parentPage->{
				"slug": slug.current,
				"title": select(
					defined(metaData.title) => metaData.title,
				),
				parentPage->{
					"slug": slug.current,
					"title": select(
						defined(metaData.title) => metaData.title,
					),
				},
			},
		},
	}`;
};
