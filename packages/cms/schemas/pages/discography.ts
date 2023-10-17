import {defineType, defineField} from 'sanity'

export default defineType({
	title: 'Discography',
	name: 'page-discography',
	type: 'document',
	// preview: {
	// 	select: {
	// 		title: 'song.title',
	// 		subtitle: 'song.artist',
	// 		media: 'song.albumArt',
	// 	},
	// },
	fieldsets: [
		{
			name: 'urlStructure',
			title: 'URL structure',
		},
	],
	groups: [
		{
			name: 'seo',
			title: 'SEO',
		},
		{
			name: 'urlStructure',
			title: 'URL structure',
		},
	],
	fields: [
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

		defineField({
			title: 'Parent page',
			description: 'Where in the hierachy does this page belong?',
			name: 'parentPage',
			type: 'pageSelector',
			fieldset: 'urlStructure',
			group: 'urlStructure',
		}),

		defineField({
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'metaData.title',
			},
			fieldset: 'urlStructure',
			group: 'urlStructure',
		}),
	],
})
