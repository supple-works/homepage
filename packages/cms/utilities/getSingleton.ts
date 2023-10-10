import {IconType} from 'react-icons'

import {getViews} from './getViews'

interface DocumentProps {
	title: string
	type: string
	icon: IconType
}

/**
 * This will export a Sanity ListItem configured as a singleton so there can only be one
 */
export const getSingleton = (S: any, {title, type, icon}: DocumentProps) =>
	S.listItem()
		.title(title)
		.icon(icon)
		.child(S.document().title(title).schemaType(type).documentId(type).views(getViews(S)))

export const getSingletonDocument = (S: any, config: DocumentProps) => getSingleton(S, {...config})
