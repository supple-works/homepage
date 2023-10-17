import {defineType, defineField} from 'sanity'

export default defineType({
	title: 'Record',
	name: 'page-record',
	type: 'document',
	preview: {
		select: {
			title: 'song.title',
			subtitle: 'song.artist',
			media: 'song.albumArt',
		},
	},
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
			name: 'song',
			title: 'Song',
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
			title: 'Song',
			name: 'song',
			type: 'object',
			group: 'song',
			fields: [
				defineField({
					title: 'Title',
					name: 'title',
					type: 'string',
					validation: (Rule) => Rule.required(),
				}),
				defineField({
					title: 'Artist',
					name: 'artist',
					type: 'string',
					validation: (Rule) => Rule.required(),
				}),
				defineField({
					title: 'Album',
					name: 'album',
					type: 'string',
					validation: (Rule) => Rule.required(),
				}),

				defineField({
					title: 'Album art',
					name: 'albumArt',
					type: 'image',
					description: '3000x3000 square format',
					validation: (Rule) => Rule.required(),
				}),

				defineField({
					title: 'Release date',
					name: 'releaseDate',
					type: 'date',
					validation: (Rule) => Rule.required(),
				}),
			],
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
