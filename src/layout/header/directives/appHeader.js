export default function appHeader(controller) {
	var directive = {
		templateUrl: 'app/layout/header/directives/appHeader.html'
	}

	controller.directive('appHeader', () => {
		return directive
	})
}