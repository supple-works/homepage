import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import deskStructure from './deskStructure'

export default defineConfig({
	name: 'default',
	title: 'bram.is homepage',

	projectId: 'a0nc81hk',
	dataset: 'production',

	plugins: [
		deskTool({
			structure: deskStructure,
		}),
		visionTool(),
	],

	schema: {
		types: schemaTypes,
	},
})
