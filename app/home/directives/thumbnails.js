export default function thumbnails(controller) {
	var directive = {
		templateUrl: 'app/home/directives/thumbnails.html'
	}

	controller.directive('thumbnails', () => {
		return directive
	})
}