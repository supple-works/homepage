import {BsFileRichtext, BsGear, BsHouse} from 'react-icons/bs'

import {getFolder} from './utilities/getFolder'
import {getTranslatedSingleton} from './utilities/getTranslatedSingleton'
import {getSingleton} from './utilities/getSingleton'

export default (S: any) =>
	S.list()
		.title('Content')
		.items([
			getFolder(S, {
				title: 'Pagina’s',
				icon: BsFileRichtext,
				items: [
					getTranslatedSingleton(S, {
						title: 'Homepage',
						type: 'page-home',
						icon: BsHouse,
					}),
				],
			}),

			// getFolder(S, {
			// 	title: 'Documents',
			// 	icon: BsFileEarmark,
			// 	items: [

			// 	],
			// }),

			S.divider(),

			getTranslatedSingleton(S, {
				title: 'Settings',
				type: 'settings',
				icon: BsGear,
			}),
		])
