import {defineType, defineField} from 'sanity'

export default defineType({
	title: 'Record',
	name: 'record',
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
			name: 'song',
			title: 'Song',
		},
		{
			name: 'urlStructure',
			title: 'URL structure',
		},
		{
			name: 'seo',
			title: 'SEO',
		},
	],
	fields: [
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
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'metaData.title',
			},
			fieldset: 'urlStructure',
			group: 'urlStructure',
		}),

		defineField({
			name: 'metaData',
			type: 'metaData',
			group: 'seo',
		}),
	],
})
