import {defineField} from 'sanity'

export default defineField({
	title: 'Page selector',
	name: 'pageSelector',
	type: 'reference',
	to: [{type: 'page-home'}],
	options: {
		// Filter out self
		filter: ({document}) => {
			return {
				filter: '!defined(parent) && _id != $id',
				params: {
					id: document._id,
				},
			}
		},
	},
})
