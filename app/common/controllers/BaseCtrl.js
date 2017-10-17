export default class BaseCtrl {
	constructor(module) {
		this.controller = this.createController(module)
	}

	createController(module, properties) {
		return module.controller(this.name(), this.createScope())
	}

	name() {
		return this.constructor.name
	}

	createScope() {
		return ($scope) => {
			var properties = this.properties()
			for(var property in properties) {
				$scope[property] = properties[property]
			}
		}
	}

	properties() {
		return {}
	}
}