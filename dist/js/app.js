(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _angularRoute = require("angular-route");

var _angularRoute2 = _interopRequireDefault(_angularRoute);

var _Router = require("./config/Router.js");

var _Router2 = _interopRequireDefault(_Router);

var _LayoutCtrl = require("./layout/controllers/LayoutCtrl.js");

var _LayoutCtrl2 = _interopRequireDefault(_LayoutCtrl);

var _HomeCtrl = require("./home/controllers/HomeCtrl.js");

var _HomeCtrl2 = _interopRequireDefault(_HomeCtrl);

var _WorkDetailsCtrl = require("./work/controllers/WorkDetailsCtrl.js");

var _WorkDetailsCtrl2 = _interopRequireDefault(_WorkDetailsCtrl);

var _CitationsCtrl = require("./citations/controllers/CitationsCtrl.js");

var _CitationsCtrl2 = _interopRequireDefault(_CitationsCtrl);

var _MobileNavbarAnimator = require("./assets/javascripts/MobileNavbarAnimator.js");

var _MobileNavbarAnimator2 = _interopRequireDefault(_MobileNavbarAnimator);

var _NavbarAnimator = require("./assets/javascripts/NavbarAnimator.js");

var _NavbarAnimator2 = _interopRequireDefault(_NavbarAnimator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = angular.module('app', [_angularRoute2.default]);

new _Router2.default(app);

new _LayoutCtrl2.default(app);
new _HomeCtrl2.default(app);
new _WorkDetailsCtrl2.default(app);
new _CitationsCtrl2.default(app);

$(document).ready(function () {
	new _NavbarAnimator2.default($("html"));
	new _MobileNavbarAnimator2.default($("html"));
});

},{"./assets/javascripts/MobileNavbarAnimator.js":2,"./assets/javascripts/NavbarAnimator.js":3,"./citations/controllers/CitationsCtrl.js":4,"./config/Router.js":7,"./home/controllers/HomeCtrl.js":8,"./layout/controllers/LayoutCtrl.js":10,"./work/controllers/WorkDetailsCtrl.js":13,"angular-route":16}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MobileNavbarAnimator = function () {
	function MobileNavbarAnimator(htmlElem) {
		_classCallCheck(this, MobileNavbarAnimator);

		this.html = htmlElem;
		this.mobileNavbar = this.html.find("#mobile-navbar");
		this.footer = this.html.find("#footer");

		this.hamburgerMenuContainer = this.mobileNavbar.find("#hamburger-container");
		this.hamburgerMenuLines = this.hamburgerMenuContainer.find("span");
		this.topLine = this.hamburgerMenuContainer.find("#top-line");
		this.midLine = this.hamburgerMenuContainer.find("#mid-line");
		this.bottomLine = this.hamburgerMenuContainer.find("#bottom-line");

		this.navbarName = this.mobileNavbar.find(".navbar-name a");

		this.mobileMenu = this.mobileNavbar.find("#mobile-menu");
		this.mobileMenuOverlay = this.mobileNavbar.find("#mobile-menu-overlay");
		this.mobileMenuItems = this.mobileMenu.find(".mobile-menu-items");
		this.aboutItem = this.mobileMenu.find(".about");

		this.displayed = false;

		this.toggleMenuOnClickEvent();
		this.deactivateMenuOnItemClickEvent();
		this.scrollOnAboutClick();
		console.log(this);
	}

	_createClass(MobileNavbarAnimator, [{
		key: "toggleMenuOnClickEvent",
		value: function toggleMenuOnClickEvent() {
			var _this = this;

			this.hamburgerMenuContainer.click(function () {
				if (_this.displayed) {
					_this.deactivateMobileNavbar();
				} else {
					_this.activateMobileNavbar();
				}
			});
		}
	}, {
		key: "activateMobileNavbar",
		value: function activateMobileNavbar() {
			this.showMobileMenu();
			this.colorItemsWhite();
			this.showOverlay();
			this.hamburgerToX();
			this.disableScroll();
			this.displayed = true;
		}
	}, {
		key: "deactivateMobileNavbar",
		value: function deactivateMobileNavbar() {
			this.hideMobileMenu();
			this.colorItemsBlack();
			this.hideOverlay();
			this.xToHamburger();
			this.enableScroll();
			this.displayed = false;
		}
	}, {
		key: "showMobileMenu",
		value: function showMobileMenu() {
			this.mobileMenu.css('left', 0);
		}
	}, {
		key: "hideMobileMenu",
		value: function hideMobileMenu() {
			this.mobileMenu.css('left', -300);
		}
	}, {
		key: "colorItemsWhite",
		value: function colorItemsWhite() {
			this.hamburgerMenuLines.css('background-color', 'white');
			this.navbarName.css('color', 'white');
		}
	}, {
		key: "colorItemsBlack",
		value: function colorItemsBlack() {
			this.hamburgerMenuLines.css('background-color', 'black');
			this.navbarName.css('color', 'black');
		}
	}, {
		key: "showOverlay",
		value: function showOverlay() {
			this.mobileMenuOverlay.show();
		}
	}, {
		key: "hideOverlay",
		value: function hideOverlay() {
			this.mobileMenuOverlay.hide();
		}
	}, {
		key: "hamburgerToX",
		value: function hamburgerToX() {
			var _this2 = this;

			this.topLine.css("top", "10px");
			this.bottomLine.css("top", "10px");
			this.midLine.css("visibility", "hidden");

			this.topLine.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
				_this2.topLine.css("transform", "rotate(45deg)");
				_this2.bottomLine.css("transform", "rotate(-45deg)");
			});
		}
	}, {
		key: "xToHamburger",
		value: function xToHamburger() {
			var _this3 = this;

			this.bottomLine.css("transform", "rotate(0deg)");
			this.topLine.css("transform", "rotate(0deg)");

			this.topLine.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
				_this3.midLine.css("visibility", "visible");
				_this3.topLine.css("top", "0px");
				_this3.bottomLine.css("top", "20px");
			});
		}
	}, {
		key: "disableScroll",
		value: function disableScroll() {
			$('html, body').css('overflow', 'hidden');
		}
	}, {
		key: "enableScroll",
		value: function enableScroll() {
			$('html, body').css('overflow-y', 'auto');
		}
	}, {
		key: "deactivateMenuOnItemClickEvent",
		value: function deactivateMenuOnItemClickEvent() {
			var _this4 = this;

			this.mobileMenuItems.click(function () {
				_this4.deactivateMobileNavbar();
			});

			this.navbarName.click(function () {
				if (_this4.displayed) {
					_this4.deactivateMobileNavbar();
				}
			});
		}
	}, {
		key: "scrollOnAboutClick",
		value: function scrollOnAboutClick() {
			var _this5 = this;

			this.aboutItem.click(function () {
				_this5.deactivateMobileNavbar();
				_this5.html.animate({
					scrollTop: _this5.footer.offset().top
				}, 500);
			});
		}
	}]);

	return MobileNavbarAnimator;
}();

exports.default = MobileNavbarAnimator;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarAnimator = function () {
	function NavbarAnimator(htmlElem) {
		_classCallCheck(this, NavbarAnimator);

		this.html = htmlElem;
		this.navbarMenu = this.html.find("#menu");
		this.footer = this.html.find("#footer");
		this.aboutItem = this.navbarMenu.find(".about");

		this.scrollOnAboutClick();
	}

	_createClass(NavbarAnimator, [{
		key: "scrollOnAboutClick",
		value: function scrollOnAboutClick() {
			var _this = this;

			this.aboutItem.click(function () {
				_this.html.animate({
					scrollTop: _this.footer.offset().top
				}, 500);
			});
		}
	}]);

	return NavbarAnimator;
}();

exports.default = NavbarAnimator;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseCtrl2 = require('../../common/controllers/BaseCtrl.js');

var _BaseCtrl3 = _interopRequireDefault(_BaseCtrl2);

var _citations = require('../directives/citations.js');

var _citations2 = _interopRequireDefault(_citations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CitationsCtrl = function (_BaseCtrl) {
	_inherits(CitationsCtrl, _BaseCtrl);

	function CitationsCtrl(module) {
		_classCallCheck(this, CitationsCtrl);

		var _this = _possibleConstructorReturn(this, (CitationsCtrl.__proto__ || Object.getPrototypeOf(CitationsCtrl)).call(this, module));

		_this.addDirectives();
		return _this;
	}

	_createClass(CitationsCtrl, [{
		key: 'properties',
		value: function properties() {
			return {
				publications: ["Evans, D.A., K.W.J. Williard, and J.E. Schoonover. (2016). Comparison of terrain indices and landform classification procedures in low-relief agricultural fields. Journal of Geospatial Applications in Natural Resources, 1, 1-17. Available at: http://scholarworks.sfasu.edu/ j_of_geospatial_applications_in_natural_resources/vol1/iss1/1."],
				publishedAbstracts: ["Montano, N., K. Williard, A. Somor, De. Evans, C. Goldstein, J. Groninger, J. Schoonover. 2012. Impacts of Autumn Olive (Elaeagnus umbellata Thunb.) on Stream Nitrogen Levels in Headwater Watersheds in Southern Illinois. Presented at Riparian Ecosystems IV: Advancing Science, Economics and Policy in Denver, CO, Jun. 27, 2012.", "Montano, N., K.W.J. Williard, A. Somor, D. Evans, C. Goldstein, J. Groninger, and J. Schoonover. 2011. Nitrogen cycling in headwater watersheds and in managed stands of autumn olive (Elaeagnus umbellata Thunb.) in Southern Illinois.", "Williard, K.W.J., A. Somor, D. Evans, R. Davison, J. Groninger, and J.E. Schoonover. 2010. Nitrogen leaching from harvested and intact autumn olive patches in southern Illinois. American Water Resources Association National Meeting. Philadelphia, PA. Nov. 1-4, 2010."],
				presentations: ["Evans, D.A. 2016. The National Bobwhite Conservation Initiative Geospatial Data for Bobwhite Conservation. Joint Gulf Coast Prairie/Gulf Coastal Plains and Ozarks LCC Geospatial Science Meeting, Ridgeland, MS. Jan 19-20, 2016.", "Nesslar, R.W.*, M.M. Anderson-Riechman, D.A. Evans, J.E. Schoonover, S.G. Baer, J.J. Zaczek. 2016. Practical Management Tools for the Rehabilitation and Expansion of Canebrake Ecosystems. 2016 Missouri Natural Resources Conference, Osage Beach, MO. Feb 3-5, 2016.", "Evans, D.A. 2015. The National Bobwhite Conservation Initiative (NBCI) data program – planning the design, development, and implementation of the NBCI Data Warehouse. The National Bobwhite Technical Committee Annual Meeting, Galloway, NJ. Aug, 2015.", "Nesslar, R.W.*, M.M. Anderson-Riechman, D.A. Evans, J.E. Schoonover, J.J. Zaczek. 2015. Restoration of Native Remnant Canebrake Habitat in the Cache River Watershed of Southern Illinois the Effects of Fire, Fertilization, and Time. Natural Areas Association Conference Annual Meeting. Little Rock, AR. Nov. 3-5, 2015.", "Nesslar, R.W.*, M.M. Anderson-Riechman, D.A. Evans, J.E. Schoonover, S.G. Baer, J.J. Zaczek. 2015. Rehabilitation of Native Canebrake Ecosystems in the Cache River Watershed of Southern Illinois. The SIU Natural Sciences Student Research Symposium Annual Meeting. Carbondale, IL. Oct. 16, 2015. (poster)", "Nesslar, R.W.*, M.M. Anderson-Riechman, D.A. Evans, J.E. Schoonover, J.J. Zaczek. 2015. Mowing and Fire as Management Tools for Rehabilitating Giant Cane (Arundinaria gigantea (Walt.) Muhl). Association of Southeastern Biologists Annual Meeting. Chattanooga, TN. Apr. 1-4, 2015.", "Nesslar, R.W.*, M.M. Anderson-Riechman, D.A. Evans, J.E. Schoonover, J.J. Zaczek. 2015. Mowing and Fire as Management Tools for Rehabilitating Giant Cane (Arundinaria gigantea (Walt.) Muhl). Graduate Creative Activities and Research Forum. Southern Illinois University, April 7, 2015, Carbondale, IL.", "Nesslar, R.W.*, M.M. Anderson-Riechman, D.A. Evans, J.J. Zaczek, J.E. Schoonover. 2013. Cultural Methods to Rehabilitate Giant Cane in Southern Illinois. Southern Illinois University, College of Agricultural Sciences Fall Festival Annual Meeting. Oct. 18, 2013, Carbondale, IL. (poster)", "Evans, D., K.W.J. Williard, and J.E. Schoonover. 2013. Identification of critical source areas of phosphorus runoff in an agricultural watershed in central Illinois. AWRA Spring Specialty Conference on Agricultural Hydrology and Water Quality II, St. Louis, MO, Mar. 25-27, 2013. (poster)", "Williard, K.W.J.*, J.E. Schoonover, J. Crim, Derek Evans, S. Randall, J. Smith, and S. Swanberg. Apr. 19, 2012. Water, soil, and air quality research in sustainable crop production systems. SIU Agriculture Leadership Board Meeting. Carbondale, IL.", "Evans, D.A., K. Williard, J. Schoonover, and J. Crim. 2012. Determining critical source areas in a central Illinois agricultural field. The Ninth Annual Research Town Meeting and Fair. Southern Illinois University. Carbondale, IL. Apr. 2012. (poster)", "Mantano, N., K. Williard, A. Somor, De. Evans, C. Goldstein, J. Groninger, J. Schoonover. 2012. Impacts of autumn olive (Elaeagnus umbellata Thunb.) on stream nitrogen levels in headwater watersheds in southern Illinois. Presented at Riparian Ecosystems IV: Advancing Science, Economics and Policy in Denver, CO, Jun. 27, 2012.", "Crim, J., J. Smith, S. Swanberg, S. Randall, D. Evans, J. Schoonover, and K. Williard. 2012. Impacts of cover crops and tillage on water, soil, and air quality in central Illinois agricultural fields. The Ninth Annual Research Town Meeting and Fair. Southern Illinois University. Carbondale, IL. Apr. 2012. (poster)", "Montano, N., K.W.J. Williard, A. Somor, D. Evans, C. Goldstein, J. Groninger, and J. Schoonover. 2011. Nitrogen cycling in headwater watersheds and in managed stands of autumn olive (Elaeagnus umbellata Thunb.) in Southern Illinois.", "Williard, K.W.J., A. Somor, D. Evans, R. Davison, J. Groninger, and J.E. Schoonover. 2010. Nitrogen leaching from harvested and intact autumn olive patches in southern Illinois. American Water Resources Association National Meeting. Philadelphia, PA. Nov. 1-4, 2010."]
			};
		}
	}, {
		key: 'addDirectives',
		value: function addDirectives() {
			(0, _citations2.default)(this.controller);
		}
	}]);

	return CitationsCtrl;
}(_BaseCtrl3.default);

exports.default = CitationsCtrl;

},{"../../common/controllers/BaseCtrl.js":6,"../directives/citations.js":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = workDetails;
function workDetails(controller, workType) {
	var directive = {
		templateUrl: 'app/citations/directives/citations.html'
	};

	controller.directive('citations', function () {
		return directive;
	});
}

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseCtrl = function () {
	function BaseCtrl(module) {
		_classCallCheck(this, BaseCtrl);

		this.controller = this.createController(module);
	}

	_createClass(BaseCtrl, [{
		key: "createController",
		value: function createController(module, properties) {
			return module.controller(this.name(), this.createScope());
		}
	}, {
		key: "name",
		value: function name() {
			return this.constructor.name;
		}
	}, {
		key: "createScope",
		value: function createScope() {
			var _this = this;

			return function ($scope) {
				var properties = _this.properties();
				for (var property in properties) {
					$scope[property] = properties[property];
				}
			};
		}
	}, {
		key: "properties",
		value: function properties() {
			return {};
		}
	}]);

	return BaseCtrl;
}();

exports.default = BaseCtrl;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {
	function Router(module) {
		_classCallCheck(this, Router);

		this.module = module;

		this.configureRoutes();
	}

	_createClass(Router, [{
		key: "configureRoutes",
		value: function configureRoutes() {
			this.module.config(function ($routeProvider) {
				$routeProvider.when("/", {
					templateUrl: "app/home/views/home.html"
				}).when("/jobsite", {
					templateUrl: "app/work/views/jobsite.html"
				}).when("/bri", {
					templateUrl: "app/work/views/bri.html"
				}).when("/nativeg", {
					templateUrl: "app/work/views/nativeg.html"
				}).when("/citations", {
					templateUrl: "app/citations/views/citations.html"
				});
			});
		}
	}]);

	return Router;
}();

exports.default = Router;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseCtrl2 = require('../../common/controllers/BaseCtrl.js');

var _BaseCtrl3 = _interopRequireDefault(_BaseCtrl2);

var _thumbnails = require('../directives/thumbnails.js');

var _thumbnails2 = _interopRequireDefault(_thumbnails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeCtrl = function (_BaseCtrl) {
	_inherits(HomeCtrl, _BaseCtrl);

	function HomeCtrl(module) {
		_classCallCheck(this, HomeCtrl);

		var _this = _possibleConstructorReturn(this, (HomeCtrl.__proto__ || Object.getPrototypeOf(HomeCtrl)).call(this, module));

		_this.addDirectives();
		return _this;
	}

	_createClass(HomeCtrl, [{
		key: 'properties',
		value: function properties() {
			return {
				thumbnails: [{
					id: 'indeed-thumbnail',
					link: '#!/jobsite',
					imageId: 'jobsite-img',
					text: 'Jobsite'
				}, {
					id: 'bri-thumbnail',
					link: '#!/bri',
					imageId: 'bri-img',
					text: 'NBCI 2.0 Web Map'
				}, {
					id: 'nativeg-thumbnail',
					link: '#!/nativeg',
					imageId: 'nativeg-img',
					text: 'Nativeg'
				}]
			};
		}
	}, {
		key: 'addDirectives',
		value: function addDirectives() {
			(0, _thumbnails2.default)(this.controller);
		}
	}]);

	return HomeCtrl;
}(_BaseCtrl3.default);

exports.default = HomeCtrl;

},{"../../common/controllers/BaseCtrl.js":6,"../directives/thumbnails.js":9}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = thumbnails;
function thumbnails(controller) {
	var directive = {
		templateUrl: 'app/home/directives/thumbnails.html'
	};

	controller.directive('thumbnails', function () {
		return directive;
	});
}

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseCtrl2 = require('../../common/controllers/BaseCtrl.js');

var _BaseCtrl3 = _interopRequireDefault(_BaseCtrl2);

var _appFooter = require('../footer/directives/appFooter.js');

var _appFooter2 = _interopRequireDefault(_appFooter);

var _appHeader = require('../header/directives/appHeader.js');

var _appHeader2 = _interopRequireDefault(_appHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayoutCtrl = function (_BaseCtrl) {
	_inherits(LayoutCtrl, _BaseCtrl);

	function LayoutCtrl(module) {
		_classCallCheck(this, LayoutCtrl);

		var _this = _possibleConstructorReturn(this, (LayoutCtrl.__proto__ || Object.getPrototypeOf(LayoutCtrl)).call(this, module));

		_this.addDirectives();
		return _this;
	}

	_createClass(LayoutCtrl, [{
		key: 'properties',
		value: function properties() {
			return {
				menuItems: [{
					name: 'Work',
					link: '/'
				}, {
					name: 'Pubs & Presentations',
					link: '#!/citations'
				}, {
					name: 'About',
					link: '',
					class: 'about'
				}],
				footerIcons: [{
					link: 'https://www.linkedin.com/in/derek-evans',
					class: 'fa fa-linkedin'
				}, {
					link: 'https://www.github.com/derekevans',
					class: 'fa fa-github'
				}, {
					link: 'mailto:derekae88@gmail.com',
					class: 'fa fa-envelope'
				}]
			};
		}
	}, {
		key: 'addDirectives',
		value: function addDirectives() {
			this.footerDirective = (0, _appFooter2.default)(this.controller);
			this.headerDirective = (0, _appHeader2.default)(this.controller);
		}
	}]);

	return LayoutCtrl;
}(_BaseCtrl3.default);

exports.default = LayoutCtrl;

},{"../../common/controllers/BaseCtrl.js":6,"../footer/directives/appFooter.js":11,"../header/directives/appHeader.js":12}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = appFooter;
function appFooter(controller) {
	var directive = {
		templateUrl: 'app/layout/footer/directives/appFooter.html'
	};

	controller.directive('appFooter', function () {
		return directive;
	});
}

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = appHeader;
function appHeader(controller) {
	var directive = {
		templateUrl: 'app/layout/header/directives/appHeader.html'
	};

	controller.directive('appHeader', function () {
		return directive;
	});
}

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseCtrl2 = require('../../common/controllers/BaseCtrl.js');

var _BaseCtrl3 = _interopRequireDefault(_BaseCtrl2);

var _workDetails = require('../directives/workDetails.js');

var _workDetails2 = _interopRequireDefault(_workDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkDetailsCtrl = function (_BaseCtrl) {
	_inherits(WorkDetailsCtrl, _BaseCtrl);

	function WorkDetailsCtrl(module) {
		_classCallCheck(this, WorkDetailsCtrl);

		var _this = _possibleConstructorReturn(this, (WorkDetailsCtrl.__proto__ || Object.getPrototypeOf(WorkDetailsCtrl)).call(this, module));

		_this.addDirectives();
		return _this;
	}

	_createClass(WorkDetailsCtrl, [{
		key: 'properties',
		value: function properties() {
			return {
				bri: {
					imageId: 'bri-img',
					title: 'NBCI 2.0 Biologist Ranking Information Web Map ',
					description: "As the data analyst for the National Bobwhite Conservation Initiative (NBCI), I created this web map for easy access/interaction with their Biologist Ranking Information (BRI) geospatial data layer especially since NBCI scientific protocol for monitoring of bobwhites requires experimental units, called focal areas, to be developed within High and Medium BRI ranking areas. I developed the front end of the web map using ESRI ArcGIS Javascript API and Dojo. I also configured the GIS Server running ArcGIS for Server 10.x for hosting the BRI tiled map service as well as the Python geoprocessing service that allows for users to request BRI data for download.",
					link: "https://www.quailcount.org/briwebmap.html"
				},
				jobsite: {
					imageId: 'jobsite-img',
					title: 'Jobsite',
					description: "I've always wished Indeed had a map that displayed the location of jobs rather than searching for a job and then finding out where exactly the job is located on Google Maps. It just so happens that Indeed has an API that allows developers to create there own job search application and included with the data returned is the latitude and longitude of the job. Perfect! I was able to mash the Indeed Job API with the ESRI ArcGIS Javascript API to create a job search application that displays search results on a map.",
					link: "http://derekevans.herokuapp.com/jobsite",
					githubLink: "https://github.com/derekevans/IndeedMap"

				},
				nativeg: {
					imageId: 'nativeg-img',
					title: 'NatiVeg',
					description: "NatiVeg is a web application that helps land managers choose the proper native vegetation to plant based on their location and their use for planting the native vegetation. I coordinated the development of this application by translating client needs to fellow developers, and I also aided in the development of the SQL databases/geodatabases as well as the ASP.NET MVC application that is NatiVeg.",
					link: "https://www.quailcount.org/NatiVeg"
				}
			};
		}
	}, {
		key: 'addDirectives',
		value: function addDirectives() {
			(0, _workDetails2.default)(this.controller);
		}
	}]);

	return WorkDetailsCtrl;
}(_BaseCtrl3.default);

exports.default = WorkDetailsCtrl;

},{"../../common/controllers/BaseCtrl.js":6,"../directives/workDetails.js":14}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = workDetails;
function workDetails(controller, workType) {
	var directive = {
		templateUrl: 'app/work/directives/workDetails.html',
		link: function link($scope, $element, $attr) {
			var properties = $scope[$attr.type];
			for (var property in properties) {
				$scope[property] = properties[property];
			}
		}
	};

	controller.directive('workDetails', function () {
		return directive;
	});
}

},{}],15:[function(require,module,exports){
/**
 * @license AngularJS v1.6.6
 * (c) 2010-2017 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular) {'use strict';

/* global shallowCopy: true */

/**
 * Creates a shallow copy of an object, an array or a primitive.
 *
 * Assumes that there are no proto properties for objects.
 */
function shallowCopy(src, dst) {
  if (isArray(src)) {
    dst = dst || [];

    for (var i = 0, ii = src.length; i < ii; i++) {
      dst[i] = src[i];
    }
  } else if (isObject(src)) {
    dst = dst || {};

    for (var key in src) {
      if (!(key.charAt(0) === '$' && key.charAt(1) === '$')) {
        dst[key] = src[key];
      }
    }
  }

  return dst || src;
}

/* global shallowCopy: false */

// `isArray` and `isObject` are necessary for `shallowCopy()` (included via `src/shallowCopy.js`).
// They are initialized inside the `$RouteProvider`, to ensure `window.angular` is available.
var isArray;
var isObject;
var isDefined;
var noop;

/**
 * @ngdoc module
 * @name ngRoute
 * @description
 *
 * # ngRoute
 *
 * The `ngRoute` module provides routing and deeplinking services and directives for angular apps.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 *
 * <div doc-module-components="ngRoute"></div>
 */
/* global -ngRouteModule */
var ngRouteModule = angular.
  module('ngRoute', []).
  info({ angularVersion: '1.6.6' }).
  provider('$route', $RouteProvider).
  // Ensure `$route` will be instantiated in time to capture the initial `$locationChangeSuccess`
  // event (unless explicitly disabled). This is necessary in case `ngView` is included in an
  // asynchronously loaded template.
  run(instantiateRoute);
var $routeMinErr = angular.$$minErr('ngRoute');
var isEagerInstantiationEnabled;


/**
 * @ngdoc provider
 * @name $routeProvider
 * @this
 *
 * @description
 *
 * Used for configuring routes.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 * ## Dependencies
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 */
function $RouteProvider() {
  isArray = angular.isArray;
  isObject = angular.isObject;
  isDefined = angular.isDefined;
  noop = angular.noop;

  function inherit(parent, extra) {
    return angular.extend(Object.create(parent), extra);
  }

  var routes = {};

  /**
   * @ngdoc method
   * @name $routeProvider#when
   *
   * @param {string} path Route path (matched against `$location.path`). If `$location.path`
   *    contains redundant trailing slash or is missing one, the route will still match and the
   *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
   *    route definition.
   *
   *    * `path` can contain named groups starting with a colon: e.g. `:name`. All characters up
   *        to the next slash are matched and stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain named groups starting with a colon and ending with a star:
   *        e.g.`:name*`. All characters are eagerly stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain optional named groups with a question mark: e.g.`:name?`.
   *
   *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match
   *    `/color/brown/largecode/code/with/slashes/edit` and extract:
   *
   *    * `color: brown`
   *    * `largecode: code/with/slashes`.
   *
   *
   * @param {Object} route Mapping information to be assigned to `$route.current` on route
   *    match.
   *
   *    Object properties:
   *
   *    - `controller` – `{(string|Function)=}` – Controller fn that should be associated with
   *      newly created scope or the name of a {@link angular.Module#controller registered
   *      controller} if passed as a string.
   *    - `controllerAs` – `{string=}` – An identifier name for a reference to the controller.
   *      If present, the controller will be published to scope under the `controllerAs` name.
   *    - `template` – `{(string|Function)=}` – html template as a string or a function that
   *      returns an html template as a string which should be used by {@link
   *      ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
   *      This property takes precedence over `templateUrl`.
   *
   *      If `template` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *      One of `template` or `templateUrl` is required.
   *
   *    - `templateUrl` – `{(string|Function)=}` – path or function that returns a path to an html
   *      template that should be used by {@link ngRoute.directive:ngView ngView}.
   *
   *      If `templateUrl` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *      One of `templateUrl` or `template` is required.
   *
   *    - `resolve` - `{Object.<string, Function>=}` - An optional map of dependencies which should
   *      be injected into the controller. If any of these dependencies are promises, the router
   *      will wait for them all to be resolved or one to be rejected before the controller is
   *      instantiated.
   *      If all the promises are resolved successfully, the values of the resolved promises are
   *      injected and {@link ngRoute.$route#$routeChangeSuccess $routeChangeSuccess} event is
   *      fired. If any of the promises are rejected the
   *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event is fired.
   *      For easier access to the resolved dependencies from the template, the `resolve` map will
   *      be available on the scope of the route, under `$resolve` (by default) or a custom name
   *      specified by the `resolveAs` property (see below). This can be particularly useful, when
   *      working with {@link angular.Module#component components} as route templates.<br />
   *      <div class="alert alert-warning">
   *        **Note:** If your scope already contains a property with this name, it will be hidden
   *        or overwritten. Make sure, you specify an appropriate name for this property, that
   *        does not collide with other properties on the scope.
   *      </div>
   *      The map object is:
   *
   *      - `key` – `{string}`: a name of a dependency to be injected into the controller.
   *      - `factory` - `{string|Function}`: If `string` then it is an alias for a service.
   *        Otherwise if function, then it is {@link auto.$injector#invoke injected}
   *        and the return value is treated as the dependency. If the result is a promise, it is
   *        resolved before its value is injected into the controller. Be aware that
   *        `ngRoute.$routeParams` will still refer to the previous route within these resolve
   *        functions.  Use `$route.current.params` to access the new route parameters, instead.
   *
   *    - `resolveAs` - `{string=}` - The name under which the `resolve` map will be available on
   *      the scope of the route. If omitted, defaults to `$resolve`.
   *
   *    - `redirectTo` – `{(string|Function)=}` – value to update
   *      {@link ng.$location $location} path with and trigger route redirection.
   *
   *      If `redirectTo` is a function, it will be called with the following parameters:
   *
   *      - `{Object.<string>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route templateUrl.
   *      - `{string}` - current `$location.path()`
   *      - `{Object}` - current `$location.search()`
   *
   *      The custom `redirectTo` function is expected to return a string which will be used
   *      to update `$location.url()`. If the function throws an error, no further processing will
   *      take place and the {@link ngRoute.$route#$routeChangeError $routeChangeError} event will
   *      be fired.
   *
   *      Routes that specify `redirectTo` will not have their controllers, template functions
   *      or resolves called, the `$location` will be changed to the redirect url and route
   *      processing will stop. The exception to this is if the `redirectTo` is a function that
   *      returns `undefined`. In this case the route transition occurs as though there was no
   *      redirection.
   *
   *    - `resolveRedirectTo` – `{Function=}` – a function that will (eventually) return the value
   *      to update {@link ng.$location $location} URL with and trigger route redirection. In
   *      contrast to `redirectTo`, dependencies can be injected into `resolveRedirectTo` and the
   *      return value can be either a string or a promise that will be resolved to a string.
   *
   *      Similar to `redirectTo`, if the return value is `undefined` (or a promise that gets
   *      resolved to `undefined`), no redirection takes place and the route transition occurs as
   *      though there was no redirection.
   *
   *      If the function throws an error or the returned promise gets rejected, no further
   *      processing will take place and the
   *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event will be fired.
   *
   *      `redirectTo` takes precedence over `resolveRedirectTo`, so specifying both on the same
   *      route definition, will cause the latter to be ignored.
   *
   *    - `[reloadOnSearch=true]` - `{boolean=}` - reload route when only `$location.search()`
   *      or `$location.hash()` changes.
   *
   *      If the option is set to `false` and url in the browser changes, then
   *      `$routeUpdate` event is broadcasted on the root scope.
   *
   *    - `[caseInsensitiveMatch=false]` - `{boolean=}` - match routes without being case sensitive
   *
   *      If the option is set to `true`, then the particular route can be matched without being
   *      case sensitive
   *
   * @returns {Object} self
   *
   * @description
   * Adds a new route definition to the `$route` service.
   */
  this.when = function(path, route) {
    //copy original route object to preserve params inherited from proto chain
    var routeCopy = shallowCopy(route);
    if (angular.isUndefined(routeCopy.reloadOnSearch)) {
      routeCopy.reloadOnSearch = true;
    }
    if (angular.isUndefined(routeCopy.caseInsensitiveMatch)) {
      routeCopy.caseInsensitiveMatch = this.caseInsensitiveMatch;
    }
    routes[path] = angular.extend(
      routeCopy,
      path && pathRegExp(path, routeCopy)
    );

    // create redirection for trailing slashes
    if (path) {
      var redirectPath = (path[path.length - 1] === '/')
            ? path.substr(0, path.length - 1)
            : path + '/';

      routes[redirectPath] = angular.extend(
        {redirectTo: path},
        pathRegExp(redirectPath, routeCopy)
      );
    }

    return this;
  };

  /**
   * @ngdoc property
   * @name $routeProvider#caseInsensitiveMatch
   * @description
   *
   * A boolean property indicating if routes defined
   * using this provider should be matched using a case insensitive
   * algorithm. Defaults to `false`.
   */
  this.caseInsensitiveMatch = false;

   /**
    * @param path {string} path
    * @param opts {Object} options
    * @return {?Object}
    *
    * @description
    * Normalizes the given path, returning a regular expression
    * and the original path.
    *
    * Inspired by pathRexp in visionmedia/express/lib/utils.js.
    */
  function pathRegExp(path, opts) {
    var insensitive = opts.caseInsensitiveMatch,
        ret = {
          originalPath: path,
          regexp: path
        },
        keys = ret.keys = [];

    path = path
      .replace(/([().])/g, '\\$1')
      .replace(/(\/)?:(\w+)(\*\?|[?*])?/g, function(_, slash, key, option) {
        var optional = (option === '?' || option === '*?') ? '?' : null;
        var star = (option === '*' || option === '*?') ? '*' : null;
        keys.push({ name: key, optional: !!optional });
        slash = slash || '';
        return ''
          + (optional ? '' : slash)
          + '(?:'
          + (optional ? slash : '')
          + (star && '(.+?)' || '([^/]+)')
          + (optional || '')
          + ')'
          + (optional || '');
      })
      .replace(/([/$*])/g, '\\$1');

    ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
    return ret;
  }

  /**
   * @ngdoc method
   * @name $routeProvider#otherwise
   *
   * @description
   * Sets route definition that will be used on route change when no other route definition
   * is matched.
   *
   * @param {Object|string} params Mapping information to be assigned to `$route.current`.
   * If called with a string, the value maps to `redirectTo`.
   * @returns {Object} self
   */
  this.otherwise = function(params) {
    if (typeof params === 'string') {
      params = {redirectTo: params};
    }
    this.when(null, params);
    return this;
  };

  /**
   * @ngdoc method
   * @name $routeProvider#eagerInstantiationEnabled
   * @kind function
   *
   * @description
   * Call this method as a setter to enable/disable eager instantiation of the
   * {@link ngRoute.$route $route} service upon application bootstrap. You can also call it as a
   * getter (i.e. without any arguments) to get the current value of the
   * `eagerInstantiationEnabled` flag.
   *
   * Instantiating `$route` early is necessary for capturing the initial
   * {@link ng.$location#$locationChangeStart $locationChangeStart} event and navigating to the
   * appropriate route. Usually, `$route` is instantiated in time by the
   * {@link ngRoute.ngView ngView} directive. Yet, in cases where `ngView` is included in an
   * asynchronously loaded template (e.g. in another directive's template), the directive factory
   * might not be called soon enough for `$route` to be instantiated _before_ the initial
   * `$locationChangeSuccess` event is fired. Eager instantiation ensures that `$route` is always
   * instantiated in time, regardless of when `ngView` will be loaded.
   *
   * The default value is true.
   *
   * **Note**:<br />
   * You may want to disable the default behavior when unit-testing modules that depend on
   * `ngRoute`, in order to avoid an unexpected request for the default route's template.
   *
   * @param {boolean=} enabled - If provided, update the internal `eagerInstantiationEnabled` flag.
   *
   * @returns {*} The current value of the `eagerInstantiationEnabled` flag if used as a getter or
   *     itself (for chaining) if used as a setter.
   */
  isEagerInstantiationEnabled = true;
  this.eagerInstantiationEnabled = function eagerInstantiationEnabled(enabled) {
    if (isDefined(enabled)) {
      isEagerInstantiationEnabled = enabled;
      return this;
    }

    return isEagerInstantiationEnabled;
  };


  this.$get = ['$rootScope',
               '$location',
               '$routeParams',
               '$q',
               '$injector',
               '$templateRequest',
               '$sce',
               '$browser',
      function($rootScope, $location, $routeParams, $q, $injector, $templateRequest, $sce, $browser) {

    /**
     * @ngdoc service
     * @name $route
     * @requires $location
     * @requires $routeParams
     *
     * @property {Object} current Reference to the current route definition.
     * The route definition contains:
     *
     *   - `controller`: The controller constructor as defined in the route definition.
     *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
     *     controller instantiation. The `locals` contain
     *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
     *
     *     - `$scope` - The current route scope.
     *     - `$template` - The current route template HTML.
     *
     *     The `locals` will be assigned to the route scope's `$resolve` property. You can override
     *     the property name, using `resolveAs` in the route definition. See
     *     {@link ngRoute.$routeProvider $routeProvider} for more info.
     *
     * @property {Object} routes Object with all route configuration Objects as its properties.
     *
     * @description
     * `$route` is used for deep-linking URLs to controllers and views (HTML partials).
     * It watches `$location.url()` and tries to map the path to an existing route definition.
     *
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     *
     * You can define routes through {@link ngRoute.$routeProvider $routeProvider}'s API.
     *
     * The `$route` service is typically used in conjunction with the
     * {@link ngRoute.directive:ngView `ngView`} directive and the
     * {@link ngRoute.$routeParams `$routeParams`} service.
     *
     * @example
     * This example shows how changing the URL hash causes the `$route` to match a route against the
     * URL, and the `ngView` pulls in the partial.
     *
     * <example name="$route-service" module="ngRouteExample"
     *          deps="angular-route.js" fixBase="true">
     *   <file name="index.html">
     *     <div ng-controller="MainController">
     *       Choose:
     *       <a href="Book/Moby">Moby</a> |
     *       <a href="Book/Moby/ch/1">Moby: Ch1</a> |
     *       <a href="Book/Gatsby">Gatsby</a> |
     *       <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
     *       <a href="Book/Scarlet">Scarlet Letter</a><br/>
     *
     *       <div ng-view></div>
     *
     *       <hr />
     *
     *       <pre>$location.path() = {{$location.path()}}</pre>
     *       <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
     *       <pre>$route.current.params = {{$route.current.params}}</pre>
     *       <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
     *       <pre>$routeParams = {{$routeParams}}</pre>
     *     </div>
     *   </file>
     *
     *   <file name="book.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *   </file>
     *
     *   <file name="chapter.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *     Chapter Id: {{params.chapterId}}
     *   </file>
     *
     *   <file name="script.js">
     *     angular.module('ngRouteExample', ['ngRoute'])
     *
     *      .controller('MainController', function($scope, $route, $routeParams, $location) {
     *          $scope.$route = $route;
     *          $scope.$location = $location;
     *          $scope.$routeParams = $routeParams;
     *      })
     *
     *      .controller('BookController', function($scope, $routeParams) {
     *          $scope.name = 'BookController';
     *          $scope.params = $routeParams;
     *      })
     *
     *      .controller('ChapterController', function($scope, $routeParams) {
     *          $scope.name = 'ChapterController';
     *          $scope.params = $routeParams;
     *      })
     *
     *     .config(function($routeProvider, $locationProvider) {
     *       $routeProvider
     *        .when('/Book/:bookId', {
     *         templateUrl: 'book.html',
     *         controller: 'BookController',
     *         resolve: {
     *           // I will cause a 1 second delay
     *           delay: function($q, $timeout) {
     *             var delay = $q.defer();
     *             $timeout(delay.resolve, 1000);
     *             return delay.promise;
     *           }
     *         }
     *       })
     *       .when('/Book/:bookId/ch/:chapterId', {
     *         templateUrl: 'chapter.html',
     *         controller: 'ChapterController'
     *       });
     *
     *       // configure html5 to get links working on jsfiddle
     *       $locationProvider.html5Mode(true);
     *     });
     *
     *   </file>
     *
     *   <file name="protractor.js" type="protractor">
     *     it('should load and compile correct template', function() {
     *       element(by.linkText('Moby: Ch1')).click();
     *       var content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller: ChapterController/);
     *       expect(content).toMatch(/Book Id: Moby/);
     *       expect(content).toMatch(/Chapter Id: 1/);
     *
     *       element(by.partialLinkText('Scarlet')).click();
     *
     *       content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller: BookController/);
     *       expect(content).toMatch(/Book Id: Scarlet/);
     *     });
     *   </file>
     * </example>
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeStart
     * @eventType broadcast on root scope
     * @description
     * Broadcasted before a route change. At this  point the route services starts
     * resolving all of the dependencies needed for the route change to occur.
     * Typically this involves fetching the view template as well as any dependencies
     * defined in `resolve` route property. Once  all of the dependencies are resolved
     * `$routeChangeSuccess` is fired.
     *
     * The route change (and the `$location` change that triggered it) can be prevented
     * by calling `preventDefault` method of the event. See {@link ng.$rootScope.Scope#$on}
     * for more details about event object.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} next Future route information.
     * @param {Route} current Current route information.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeSuccess
     * @eventType broadcast on root scope
     * @description
     * Broadcasted after a route change has happened successfully.
     * The `resolve` dependencies are now available in the `current.locals` property.
     *
     * {@link ngRoute.directive:ngView ngView} listens for the directive
     * to instantiate the controller and render the view.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} current Current route information.
     * @param {Route|Undefined} previous Previous route information, or undefined if current is
     * first route entered.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeError
     * @eventType broadcast on root scope
     * @description
     * Broadcasted if a redirection function fails or any redirection or resolve promises are
     * rejected.
     *
     * @param {Object} angularEvent Synthetic event object
     * @param {Route} current Current route information.
     * @param {Route} previous Previous route information.
     * @param {Route} rejection The thrown error or the rejection reason of the promise. Usually
     * the rejection reason is the error that caused the promise to get rejected.
     */

    /**
     * @ngdoc event
     * @name $route#$routeUpdate
     * @eventType broadcast on root scope
     * @description
     * The `reloadOnSearch` property has been set to false, and we are reusing the same
     * instance of the Controller.
     *
     * @param {Object} angularEvent Synthetic event object
     * @param {Route} current Current/previous route information.
     */

    var forceReload = false,
        preparedRoute,
        preparedRouteIsUpdateOnly,
        $route = {
          routes: routes,

          /**
           * @ngdoc method
           * @name $route#reload
           *
           * @description
           * Causes `$route` service to reload the current route even if
           * {@link ng.$location $location} hasn't changed.
           *
           * As a result of that, {@link ngRoute.directive:ngView ngView}
           * creates new scope and reinstantiates the controller.
           */
          reload: function() {
            forceReload = true;

            var fakeLocationEvent = {
              defaultPrevented: false,
              preventDefault: function fakePreventDefault() {
                this.defaultPrevented = true;
                forceReload = false;
              }
            };

            $rootScope.$evalAsync(function() {
              prepareRoute(fakeLocationEvent);
              if (!fakeLocationEvent.defaultPrevented) commitRoute();
            });
          },

          /**
           * @ngdoc method
           * @name $route#updateParams
           *
           * @description
           * Causes `$route` service to update the current URL, replacing
           * current route parameters with those specified in `newParams`.
           * Provided property names that match the route's path segment
           * definitions will be interpolated into the location's path, while
           * remaining properties will be treated as query params.
           *
           * @param {!Object<string, string>} newParams mapping of URL parameter names to values
           */
          updateParams: function(newParams) {
            if (this.current && this.current.$$route) {
              newParams = angular.extend({}, this.current.params, newParams);
              $location.path(interpolate(this.current.$$route.originalPath, newParams));
              // interpolate modifies newParams, only query params are left
              $location.search(newParams);
            } else {
              throw $routeMinErr('norout', 'Tried updating route when with no current route');
            }
          }
        };

    $rootScope.$on('$locationChangeStart', prepareRoute);
    $rootScope.$on('$locationChangeSuccess', commitRoute);

    return $route;

    /////////////////////////////////////////////////////

    /**
     * @param on {string} current url
     * @param route {Object} route regexp to match the url against
     * @return {?Object}
     *
     * @description
     * Check if the route matches the current url.
     *
     * Inspired by match in
     * visionmedia/express/lib/router/router.js.
     */
    function switchRouteMatcher(on, route) {
      var keys = route.keys,
          params = {};

      if (!route.regexp) return null;

      var m = route.regexp.exec(on);
      if (!m) return null;

      for (var i = 1, len = m.length; i < len; ++i) {
        var key = keys[i - 1];

        var val = m[i];

        if (key && val) {
          params[key.name] = val;
        }
      }
      return params;
    }

    function prepareRoute($locationEvent) {
      var lastRoute = $route.current;

      preparedRoute = parseRoute();
      preparedRouteIsUpdateOnly = preparedRoute && lastRoute && preparedRoute.$$route === lastRoute.$$route
          && angular.equals(preparedRoute.pathParams, lastRoute.pathParams)
          && !preparedRoute.reloadOnSearch && !forceReload;

      if (!preparedRouteIsUpdateOnly && (lastRoute || preparedRoute)) {
        if ($rootScope.$broadcast('$routeChangeStart', preparedRoute, lastRoute).defaultPrevented) {
          if ($locationEvent) {
            $locationEvent.preventDefault();
          }
        }
      }
    }

    function commitRoute() {
      var lastRoute = $route.current;
      var nextRoute = preparedRoute;

      if (preparedRouteIsUpdateOnly) {
        lastRoute.params = nextRoute.params;
        angular.copy(lastRoute.params, $routeParams);
        $rootScope.$broadcast('$routeUpdate', lastRoute);
      } else if (nextRoute || lastRoute) {
        forceReload = false;
        $route.current = nextRoute;

        var nextRoutePromise = $q.resolve(nextRoute);

        $browser.$$incOutstandingRequestCount();

        nextRoutePromise.
          then(getRedirectionData).
          then(handlePossibleRedirection).
          then(function(keepProcessingRoute) {
            return keepProcessingRoute && nextRoutePromise.
              then(resolveLocals).
              then(function(locals) {
                // after route change
                if (nextRoute === $route.current) {
                  if (nextRoute) {
                    nextRoute.locals = locals;
                    angular.copy(nextRoute.params, $routeParams);
                  }
                  $rootScope.$broadcast('$routeChangeSuccess', nextRoute, lastRoute);
                }
              });
          }).catch(function(error) {
            if (nextRoute === $route.current) {
              $rootScope.$broadcast('$routeChangeError', nextRoute, lastRoute, error);
            }
          }).finally(function() {
            // Because `commitRoute()` is called from a `$rootScope.$evalAsync` block (see
            // `$locationWatch`), this `$$completeOutstandingRequest()` call will not cause
            // `outstandingRequestCount` to hit zero.  This is important in case we are redirecting
            // to a new route which also requires some asynchronous work.

            $browser.$$completeOutstandingRequest(noop);
          });
      }
    }

    function getRedirectionData(route) {
      var data = {
        route: route,
        hasRedirection: false
      };

      if (route) {
        if (route.redirectTo) {
          if (angular.isString(route.redirectTo)) {
            data.path = interpolate(route.redirectTo, route.params);
            data.search = route.params;
            data.hasRedirection = true;
          } else {
            var oldPath = $location.path();
            var oldSearch = $location.search();
            var newUrl = route.redirectTo(route.pathParams, oldPath, oldSearch);

            if (angular.isDefined(newUrl)) {
              data.url = newUrl;
              data.hasRedirection = true;
            }
          }
        } else if (route.resolveRedirectTo) {
          return $q.
            resolve($injector.invoke(route.resolveRedirectTo)).
            then(function(newUrl) {
              if (angular.isDefined(newUrl)) {
                data.url = newUrl;
                data.hasRedirection = true;
              }

              return data;
            });
        }
      }

      return data;
    }

    function handlePossibleRedirection(data) {
      var keepProcessingRoute = true;

      if (data.route !== $route.current) {
        keepProcessingRoute = false;
      } else if (data.hasRedirection) {
        var oldUrl = $location.url();
        var newUrl = data.url;

        if (newUrl) {
          $location.
            url(newUrl).
            replace();
        } else {
          newUrl = $location.
            path(data.path).
            search(data.search).
            replace().
            url();
        }

        if (newUrl !== oldUrl) {
          // Exit out and don't process current next value,
          // wait for next location change from redirect
          keepProcessingRoute = false;
        }
      }

      return keepProcessingRoute;
    }

    function resolveLocals(route) {
      if (route) {
        var locals = angular.extend({}, route.resolve);
        angular.forEach(locals, function(value, key) {
          locals[key] = angular.isString(value) ?
              $injector.get(value) :
              $injector.invoke(value, null, null, key);
        });
        var template = getTemplateFor(route);
        if (angular.isDefined(template)) {
          locals['$template'] = template;
        }
        return $q.all(locals);
      }
    }

    function getTemplateFor(route) {
      var template, templateUrl;
      if (angular.isDefined(template = route.template)) {
        if (angular.isFunction(template)) {
          template = template(route.params);
        }
      } else if (angular.isDefined(templateUrl = route.templateUrl)) {
        if (angular.isFunction(templateUrl)) {
          templateUrl = templateUrl(route.params);
        }
        if (angular.isDefined(templateUrl)) {
          route.loadedTemplateUrl = $sce.valueOf(templateUrl);
          template = $templateRequest(templateUrl);
        }
      }
      return template;
    }

    /**
     * @returns {Object} the current active route, by matching it against the URL
     */
    function parseRoute() {
      // Match a route
      var params, match;
      angular.forEach(routes, function(route, path) {
        if (!match && (params = switchRouteMatcher($location.path(), route))) {
          match = inherit(route, {
            params: angular.extend({}, $location.search(), params),
            pathParams: params});
          match.$$route = route;
        }
      });
      // No route matched; fallback to "otherwise" route
      return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
    }

    /**
     * @returns {string} interpolation of the redirect path with the parameters
     */
    function interpolate(string, params) {
      var result = [];
      angular.forEach((string || '').split(':'), function(segment, i) {
        if (i === 0) {
          result.push(segment);
        } else {
          var segmentMatch = segment.match(/(\w+)(?:[?*])?(.*)/);
          var key = segmentMatch[1];
          result.push(params[key]);
          result.push(segmentMatch[2] || '');
          delete params[key];
        }
      });
      return result.join('');
    }
  }];
}

instantiateRoute.$inject = ['$injector'];
function instantiateRoute($injector) {
  if (isEagerInstantiationEnabled) {
    // Instantiate `$route`
    $injector.get('$route');
  }
}

ngRouteModule.provider('$routeParams', $RouteParamsProvider);


/**
 * @ngdoc service
 * @name $routeParams
 * @requires $route
 * @this
 *
 * @description
 * The `$routeParams` service allows you to retrieve the current set of route parameters.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * The route parameters are a combination of {@link ng.$location `$location`}'s
 * {@link ng.$location#search `search()`} and {@link ng.$location#path `path()`}.
 * The `path` parameters are extracted when the {@link ngRoute.$route `$route`} path is matched.
 *
 * In case of parameter name collision, `path` params take precedence over `search` params.
 *
 * The service guarantees that the identity of the `$routeParams` object will remain unchanged
 * (but its properties will likely change) even when a route change occurs.
 *
 * Note that the `$routeParams` are only updated *after* a route change completes successfully.
 * This means that you cannot rely on `$routeParams` being correct in route resolve functions.
 * Instead you can use `$route.current.params` to access the new route's parameters.
 *
 * @example
 * ```js
 *  // Given:
 *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
 *  // Route: /Chapter/:chapterId/Section/:sectionId
 *  //
 *  // Then
 *  $routeParams ==> {chapterId:'1', sectionId:'2', search:'moby'}
 * ```
 */
function $RouteParamsProvider() {
  this.$get = function() { return {}; };
}

ngRouteModule.directive('ngView', ngViewFactory);
ngRouteModule.directive('ngView', ngViewFillContentFactory);


/**
 * @ngdoc directive
 * @name ngView
 * @restrict ECA
 *
 * @description
 * # Overview
 * `ngView` is a directive that complements the {@link ngRoute.$route $route} service by
 * including the rendered template of the current route into the main layout (`index.html`) file.
 * Every time the current route changes, the included view changes with it according to the
 * configuration of the `$route` service.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * @animations
 * | Animation                        | Occurs                              |
 * |----------------------------------|-------------------------------------|
 * | {@link ng.$animate#enter enter}  | when the new element is inserted to the DOM |
 * | {@link ng.$animate#leave leave}  | when the old element is removed from to the DOM  |
 *
 * The enter and leave animation occur concurrently.
 *
 * @scope
 * @priority 400
 * @param {string=} onload Expression to evaluate whenever the view updates.
 *
 * @param {string=} autoscroll Whether `ngView` should call {@link ng.$anchorScroll
 *                  $anchorScroll} to scroll the viewport after the view is updated.
 *
 *                  - If the attribute is not set, disable scrolling.
 *                  - If the attribute is set without value, enable scrolling.
 *                  - Otherwise enable scrolling only if the `autoscroll` attribute value evaluated
 *                    as an expression yields a truthy value.
 * @example
    <example name="ngView-directive" module="ngViewExample"
             deps="angular-route.js;angular-animate.js"
             animations="true" fixBase="true">
      <file name="index.html">
        <div ng-controller="MainCtrl as main">
          Choose:
          <a href="Book/Moby">Moby</a> |
          <a href="Book/Moby/ch/1">Moby: Ch1</a> |
          <a href="Book/Gatsby">Gatsby</a> |
          <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
          <a href="Book/Scarlet">Scarlet Letter</a><br/>

          <div class="view-animate-container">
            <div ng-view class="view-animate"></div>
          </div>
          <hr />

          <pre>$location.path() = {{main.$location.path()}}</pre>
          <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
          <pre>$route.current.params = {{main.$route.current.params}}</pre>
          <pre>$routeParams = {{main.$routeParams}}</pre>
        </div>
      </file>

      <file name="book.html">
        <div>
          controller: {{book.name}}<br />
          Book Id: {{book.params.bookId}}<br />
        </div>
      </file>

      <file name="chapter.html">
        <div>
          controller: {{chapter.name}}<br />
          Book Id: {{chapter.params.bookId}}<br />
          Chapter Id: {{chapter.params.chapterId}}
        </div>
      </file>

      <file name="animations.css">
        .view-animate-container {
          position:relative;
          height:100px!important;
          background:white;
          border:1px solid black;
          height:40px;
          overflow:hidden;
        }

        .view-animate {
          padding:10px;
        }

        .view-animate.ng-enter, .view-animate.ng-leave {
          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

          display:block;
          width:100%;
          border-left:1px solid black;

          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          padding:10px;
        }

        .view-animate.ng-enter {
          left:100%;
        }
        .view-animate.ng-enter.ng-enter-active {
          left:0;
        }
        .view-animate.ng-leave.ng-leave-active {
          left:-100%;
        }
      </file>

      <file name="script.js">
        angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
          .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
              $routeProvider
                .when('/Book/:bookId', {
                  templateUrl: 'book.html',
                  controller: 'BookCtrl',
                  controllerAs: 'book'
                })
                .when('/Book/:bookId/ch/:chapterId', {
                  templateUrl: 'chapter.html',
                  controller: 'ChapterCtrl',
                  controllerAs: 'chapter'
                });

              $locationProvider.html5Mode(true);
          }])
          .controller('MainCtrl', ['$route', '$routeParams', '$location',
            function MainCtrl($route, $routeParams, $location) {
              this.$route = $route;
              this.$location = $location;
              this.$routeParams = $routeParams;
          }])
          .controller('BookCtrl', ['$routeParams', function BookCtrl($routeParams) {
            this.name = 'BookCtrl';
            this.params = $routeParams;
          }])
          .controller('ChapterCtrl', ['$routeParams', function ChapterCtrl($routeParams) {
            this.name = 'ChapterCtrl';
            this.params = $routeParams;
          }]);

      </file>

      <file name="protractor.js" type="protractor">
        it('should load and compile correct template', function() {
          element(by.linkText('Moby: Ch1')).click();
          var content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller: ChapterCtrl/);
          expect(content).toMatch(/Book Id: Moby/);
          expect(content).toMatch(/Chapter Id: 1/);

          element(by.partialLinkText('Scarlet')).click();

          content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller: BookCtrl/);
          expect(content).toMatch(/Book Id: Scarlet/);
        });
      </file>
    </example>
 */


/**
 * @ngdoc event
 * @name ngView#$viewContentLoaded
 * @eventType emit on the current ngView scope
 * @description
 * Emitted every time the ngView content is reloaded.
 */
ngViewFactory.$inject = ['$route', '$anchorScroll', '$animate'];
function ngViewFactory($route, $anchorScroll, $animate) {
  return {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    link: function(scope, $element, attr, ctrl, $transclude) {
        var currentScope,
            currentElement,
            previousLeaveAnimation,
            autoScrollExp = attr.autoscroll,
            onloadExp = attr.onload || '';

        scope.$on('$routeChangeSuccess', update);
        update();

        function cleanupLastView() {
          if (previousLeaveAnimation) {
            $animate.cancel(previousLeaveAnimation);
            previousLeaveAnimation = null;
          }

          if (currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }
          if (currentElement) {
            previousLeaveAnimation = $animate.leave(currentElement);
            previousLeaveAnimation.done(function(response) {
              if (response !== false) previousLeaveAnimation = null;
            });
            currentElement = null;
          }
        }

        function update() {
          var locals = $route.current && $route.current.locals,
              template = locals && locals.$template;

          if (angular.isDefined(template)) {
            var newScope = scope.$new();
            var current = $route.current;

            // Note: This will also link all children of ng-view that were contained in the original
            // html. If that content contains controllers, ... they could pollute/change the scope.
            // However, using ng-view on an element with additional content does not make sense...
            // Note: We can't remove them in the cloneAttchFn of $transclude as that
            // function is called before linking the content, which would apply child
            // directives to non existing elements.
            var clone = $transclude(newScope, function(clone) {
              $animate.enter(clone, null, currentElement || $element).done(function onNgViewEnter(response) {
                if (response !== false && angular.isDefined(autoScrollExp)
                  && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                  $anchorScroll();
                }
              });
              cleanupLastView();
            });

            currentElement = clone;
            currentScope = current.scope = newScope;
            currentScope.$emit('$viewContentLoaded');
            currentScope.$eval(onloadExp);
          } else {
            cleanupLastView();
          }
        }
    }
  };
}

// This directive is called during the $transclude call of the first `ngView` directive.
// It will replace and compile the content of the element with the loaded template.
// We need this directive so that the element content is already filled when
// the link function of another directive on the same element as ngView
// is called.
ngViewFillContentFactory.$inject = ['$compile', '$controller', '$route'];
function ngViewFillContentFactory($compile, $controller, $route) {
  return {
    restrict: 'ECA',
    priority: -400,
    link: function(scope, $element) {
      var current = $route.current,
          locals = current.locals;

      $element.html(locals.$template);

      var link = $compile($element.contents());

      if (current.controller) {
        locals.$scope = scope;
        var controller = $controller(current.controller, locals);
        if (current.controllerAs) {
          scope[current.controllerAs] = controller;
        }
        $element.data('$ngControllerController', controller);
        $element.children().data('$ngControllerController', controller);
      }
      scope[current.resolveAs || '$resolve'] = locals;

      link(scope);
    }
  };
}


})(window, window.angular);

},{}],16:[function(require,module,exports){
require('./angular-route');
module.exports = 'ngRoute';

},{"./angular-route":15}]},{},[1]);
