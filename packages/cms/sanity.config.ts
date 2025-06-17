import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import deskStructure from './deskStructure'
import {studioDataSet, studioProjectID} from './environment'
import {documentInternationalization} from '@sanity/document-internationalization'
import {languages} from './languages'

export default defineConfig({
	name: 'default',
	title: 'Supple homepage',

	projectId: studioProjectID,
	dataset: studioDataSet,

	plugins: [
		structureTool({
			structure: deskStructure,
		}),
		visionTool(),
		documentInternationalization({
			// Required configuration
			supportedLanguages: languages,
			schemaTypes: ['settings', 'page-home'],
			weakReferences: true,
		}),
	],

	schema: {
		types: schemaTypes,
	},
})
