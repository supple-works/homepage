import {defineType, defineField} from 'sanity'

export default defineType({
	title: 'Page meta data',
	name: 'metaData',
	type: 'object',
	validation: (Rule) => Rule.required(),
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			title: 'Description',
			name: 'description',
			type: 'string',
			validation: (Rule) => Rule.required().min(10).max(160),
		}),
		defineField({
			title: 'Social share image',
			name: 'image',
			description: '1200x632, no SVG',
			type: 'image',
		}),
		defineField({
			title: 'No index',
			name: 'noIndex',
			type: 'boolean',
			description: 'Enabling this toggle will remove the page from search-engine indexes.',
		}),
	],
	options: {
		collapsible: true,
		collapsed: false,
	},
})
