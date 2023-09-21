export interface MetaDataProps {
	metaData: {
		title: string;
		description: 'string';
		// image?: ImageProps;
		noIndex?: boolean;
	};
}

export const metaDataQuery = (): string => {
	return `metaData{
			title,
			description,
			noIndex
	}`;
};
