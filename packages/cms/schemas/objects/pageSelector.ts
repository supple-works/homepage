import {defineField} from 'sanity'

export default defineField({
	title: 'Page selector',
	name: 'pageSelector',
	type: 'reference',
	to: [{type: 'page-record'}],
})
