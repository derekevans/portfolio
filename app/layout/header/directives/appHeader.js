import NavbarAnimator from '../../../assets/javascripts/NavbarAnimator.js'
import MobileNavbarAnimator from '../../../assets/javascripts/MobileNavbarAnimator.js'

export default function appHeader(controller) {
	var directive = {
		templateUrl: 'app/layout/header/directives/appHeader.html',
		link: () => {
			angular.element(document).ready(() => {
				new NavbarAnimator(angular.element('html'))
				new MobileNavbarAnimator(angular.element('html'))
			})
		}
	}

	controller.directive('appHeader', () => {
		return directive
	})
}