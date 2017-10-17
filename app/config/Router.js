export default class Router {
	constructor(module) {
		this.module = module

		this.configureRoutes();
	}

	configureRoutes() {
		this.module.config(($routeProvider) => {
			$routeProvider
				.when("/", {
					templateUrl: "app/home/views/home.html",
				})
				.when("/jobsite", {
					templateUrl: "app/work/views/jobsite.html",
				})
				.when("/bri", {
					templateUrl: "app/work/views/bri.html",
				})
				.when("/nativeg", {
					templateUrl: "app/work/views/nativeg.html",
				})
				.when("/citations", {
					templateUrl: "app/citations/views/citations.html",
				})
		})
	}
}