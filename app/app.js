import angularRoute from "angular-route"

import Router from "./config/Router.js"

import LayoutCtrl from './layout/controllers/LayoutCtrl.js'
import HomeCtrl from './home/controllers/HomeCtrl.js'
import WorkDetailsCtrl from './work/controllers/WorkDetailsCtrl.js'
import CitationsCtrl from './citations/controllers/CitationsCtrl.js'

var app = angular.module('app', [angularRoute])

new Router(app)

new LayoutCtrl(app)
new HomeCtrl(app)
new WorkDetailsCtrl(app)
new CitationsCtrl(app)


	
