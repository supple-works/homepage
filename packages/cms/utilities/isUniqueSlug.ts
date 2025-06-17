import client from './client'

export async function isUniqueSlug({
	slug,
	context,
	type,
}: {
	slug: any
	context: any
	type?: string
}) {
	const {document} = context
	const id = document._id.replace(/^drafts\./, '')
	const params = {
		draft: `drafts.${id}`,
		published: id,
		lang: document.language ? document.language : '',
		slug,
	}
	const typeQuery = type ? `_type == "${type}" && ` : ''
	// Check if there is a page which has the same slug in the same language
	const query = `!defined(*[${typeQuery}${
		document.language ? `language == $lang && ` : ''
	}!(_id in [$draft, $published]) && slug.current == $slug][0]._id)`
	const result = await client.fetch(query, params)

	return result
}
