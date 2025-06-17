import { parentPageQuery } from '.';

export const pageReferenceInSelectQuery = (): string => {
	return `
		pageReference->_type match "page-" =>
		pageReference->{
			"label": metaData.title,
			"slug": slug.current,
			${parentPageQuery()}
		}
	`;
};
