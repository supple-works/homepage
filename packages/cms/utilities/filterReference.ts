export const filterReference = ({document}: {document: any}) => ({
	filter: `!defined(parent) && _id != $id && (!defined(language) || language == $lang)`,
	params: {
		id: document._id,
		lang: document.language ? document.language : 'en',
	},
})
