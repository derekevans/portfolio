export default function workDetails(controller, workType) {
	var directive = {
		templateUrl: 'app/citations/directives/citations.html',
	}

	controller.directive('citations', () => {
		return directive
	})
}