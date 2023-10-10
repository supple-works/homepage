import {defineType, defineField} from 'sanity'

export default defineType({
	title: 'Settings',
	name: 'settings',
	type: 'document',
	groups: [
		{
			name: 'seo',
			title: 'SEO',
		},
	],
	fields: [
		defineField({
			title: 'Site URL',
			name: 'baseUrl',
			type: 'string',
			validation: (Rule) => Rule.required(),
			group: 'seo',
		}),

		defineField({
			title: 'Page title suffix',
			name: 'metaTitleSuffix',
			type: 'string',
			validation: (Rule) => Rule.required(),
			group: 'seo',
		}),

		defineField({
			title: 'Social share image',
			name: 'ogImage',
			description: 'Fallback social share image, 1200x632, no SVG',
			type: 'image',
			validation: (Rule) => Rule.required(),
			group: 'seo',
		}),
	],
})
