import {defineCliConfig} from 'sanity/cli'
import {studioProjectID, studioDataSet} from './environment'

export default defineCliConfig({
	api: {
		projectId: studioProjectID,
		dataset: studioDataSet,
	},
})
