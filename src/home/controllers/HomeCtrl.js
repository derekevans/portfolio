import BaseCtrl from '../../common/controllers/BaseCtrl.js'

import thumbnails from '../directives/thumbnails.js'

export default class HomeCtrl extends BaseCtrl {
	constructor(module) {
		super(module);
		this.addDirectives()
	}

	properties() {
		return {
			thumbnails: [
				{
					id: 'indeed-thumbnail',
					link: '#!/jobsite',
					imageId: 'jobsite-img',
					text: 'Jobsite'
				},
				{
					id: 'bri-thumbnail',
					link: '#!/bri',
					imageId: 'bri-img',
					text: 'NBCI 2.0 Web Map'
				},
				{
					id: 'nativeg-thumbnail',
					link: '#!/nativeg',
					imageId: 'nativeg-img',
					text: 'Nativeg'
				}
			]
		}
	}

	addDirectives() {
		thumbnails(this.controller)
	}
}
