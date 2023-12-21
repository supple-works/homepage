import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import deskStructure from './deskStructure'

export default defineConfig({
	name: 'default',
	title: 'Supple homepage',

	projectId: 'iec4zp45',
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
