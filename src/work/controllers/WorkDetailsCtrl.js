import BaseCtrl from '../../common/controllers/BaseCtrl.js'
import workDetails from '../directives/workDetails.js'

export default class WorkDetailsCtrl extends BaseCtrl {
	constructor(module) {
		super(module)
		this.addDirectives()
	}

	properties() {
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
		}
	}

	addDirectives() {
		workDetails(this.controller)
	}
}