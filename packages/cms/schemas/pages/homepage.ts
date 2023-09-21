import {defineType, defineField} from 'sanity'

export default defineType({
	title: 'Homepage',
	name: 'homepage',
	type: 'document',
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
		}),
	],
})
