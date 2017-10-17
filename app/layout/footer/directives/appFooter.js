export default function appFooter(controller) {
	var directive = {
		templateUrl: 'app/layout/footer/directives/appFooter.html'
	}

	controller.directive('appFooter', () => {
		return directive
	})
}