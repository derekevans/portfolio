import BaseCtrl from '../../common/controllers/BaseCtrl.js'

import appFooter from '../footer/directives/appFooter.js'
import appHeader from '../header/directives/appHeader.js'

export default class LayoutCtrl extends BaseCtrl {
	constructor(module) {
		super(module)
		this.addDirectives()
	}

	properties() {
		return {
			menuItems: [
				{
					name: 'Work',
					link: '/',
				},
				{
					name: 'Pubs & Presentations',
					link: '#!/citations',
				},
				{
					name: 'About',
					link: '',
					class: 'about'
				},
			],
			footerIcons: [
				{
					link: 'https://www.linkedin.com/in/derek-evans',
					class: 'fa fa-linkedin'
				},
				{
					link: 'https://www.github.com/derekevans',
					class: 'fa fa-github'
				},
				{
					link: 'mailto:derekae88@gmail.com',
					class: 'fa fa-envelope'
				}
			]
		}
	}

	addDirectives() {
		this.footerDirective = appFooter(this.controller)
		this.headerDirective = appHeader(this.controller)
	}
}