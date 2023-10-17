import {BsFileRichtext, BsGear, BsHouse, BsVinyl, BsVinylFill} from 'react-icons/bs'

import {getFolder} from './utilities/getFolder'
import {getSingleton} from './utilities/getSingleton'
import {getDocumentList} from './utilities/getDocumentList'

export default (S: any) =>
	S.list()
		.title('Content')
		.items([
			getFolder(S, {
				title: 'Pagina’s',
				icon: BsFileRichtext,
				items: [
					getSingleton(S, {
						title: 'Homepage',
						type: 'page-home',
						icon: BsHouse,
					}),
					getSingleton(S, {
						title: 'Discography',
						type: 'page-discography',
						icon: BsVinyl,
					}),
					getDocumentList(S, {
						title: 'Record',
						type: 'page-record',
						icon: BsVinylFill,
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

			getSingleton(S, {
				title: 'Site Settings',
				type: 'settings',
				icon: BsGear,
			}),
		])
