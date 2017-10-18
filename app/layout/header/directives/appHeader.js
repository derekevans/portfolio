import MobileNavbarAnimator from '../../../assets/javascripts/MobileNavbarAnimator.js'

export default function appHeader(controller) {
	var directive = {
		templateUrl: 'app/layout/header/directives/appHeader.html',
		link: () => {
			angular.element(document).ready(() => {
				new MobileNavbarAnimator(angular.element("#mobile-navbar"))
			})
		}
	}

	controller.directive('appHeader', () => {
		return directive
	})
}