import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
	name: 'default',
	title: 'bram.is homepage',

	projectId: 'a0nc81hk',
	dataset: 'production',

	plugins: [deskTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
})
