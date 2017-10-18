import AboutScroller from '../../../assets/javascripts/AboutScroller.js'

export default function appFooter(controller) {
	var directive = {
		templateUrl: 'app/layout/footer/directives/appFooter.html',
		link: () => {
			angular.element(() => {
				new AboutScroller()
			}) 
		}
	}

	controller.directive('appFooter', () => {
		return directive
	})
}