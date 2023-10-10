import {IconType} from 'react-icons'

import {getViews} from './getViews'

interface DocumentListProps {
	title: string
	type: string
	icon: IconType
}

/**
 * Generic function to render a list of documents
 */
const getGenericList = (S: any, {type, title, icon}: DocumentListProps) =>
	S.listItem()
		.title(title)
		.icon(icon)
		.schemaType(type)
		.id(type)
		.child(
			S.documentTypeList(type).child((documentId: string) =>
				S.document().documentId(documentId).schemaType(type).views(getViews(S)),
			),
		)

/**
 * This will render a list of documents inside the CMS.
 */
export const getDocumentList = (S: any, config: DocumentListProps) => getGenericList(S, {...config})
