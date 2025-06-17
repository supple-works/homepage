import {defineType, defineField} from 'sanity'

export default defineType({
	title: 'Homepage',
	name: 'page-home',
	type: 'document',
	groups: [
		{
			name: 'seo',
			title: 'SEO',
		},
	],
	fields: [
		defineField({
			name: 'language',
			type: 'string',
			readOnly: true,
			hidden: true,
		}),

		defineField({
			name: 'metaData',
			type: 'metaData',
			group: 'seo',
		}),
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
		}),
	],
})
