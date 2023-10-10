import {BsFileEarmark, BsFileRichtext, BsGear, BsHouse, BsRecordCircleFill} from 'react-icons/bs'

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
						type: 'homepage',
						icon: BsHouse,
					}),
				],
			}),

			getFolder(S, {
				title: 'Documents',
				icon: BsFileEarmark,
				items: [
					getDocumentList(S, {
						title: 'Record',
						type: 'record',
						icon: BsRecordCircleFill,
					}),
				],
			}),

			S.divider(),

			getSingleton(S, {
				title: 'Site Settings',
				type: 'settings',
				icon: BsGear,
			}),
		])
