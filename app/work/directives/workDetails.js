export default function workDetails(controller, workType) {
	var directive = {
		templateUrl: 'app/work/directives/workDetails.html',
		link: ($scope, $element, $attr) => {
			var properties = $scope[$attr.type]
			for(var property in properties) {
				$scope[property] = properties[property]
			}
		}
	}

	controller.directive('workDetails', () => {
		return directive
	})
}