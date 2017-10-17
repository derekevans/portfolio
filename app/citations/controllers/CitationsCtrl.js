import BaseCtrl from '../../common/controllers/BaseCtrl.js'
import citations from '../directives/citations.js'

export default class CitationsCtrl extends BaseCtrl {
	constructor(module) {
		super(module)
		this.addDirectives()
	}

	properties() {
		return {
			publications: [
				"Evans, D.A., K.W.J. Williard, and J.E. Schoonover. (2016). Comparison of terrain indices and landform classification procedures in low-relief agricultural fields. Journal of Geospatial Applications in Natural Resources, 1, 1-17. Available at: http://scholarworks.sfasu.edu/ j_of_geospatial_applications_in_natural_resources/vol1/iss1/1.",
			],
			publishedAbstracts: [
				"Montano, N., K. Williard, A. Somor, De. Evans, C. Goldstein, J. Groninger, J. Schoonover. 2012. Impacts of Autumn Olive (Elaeagnus umbellata Thunb.) on Stream Nitrogen Levels in Headwater Watersheds in Southern Illinois. Presented at Riparian Ecosystems IV: Advancing Science, Economics and Policy in Denver, CO, Jun. 27, 2012.",
				"Montano, N., K.W.J. Williard, A. Somor, D. Evans, C. Goldstein, J. Groninger, and J. Schoonover. 2011. Nitrogen cycling in headwater watersheds and in managed stands of autumn olive (Elaeagnus umbellata Thunb.) in Southern Illinois.",
				"Williard, K.W.J., A. Somor, D. Evans, R. Davison, J. Groninger, and J.E. Schoonover. 2010. Nitrogen leaching from harvested and intact autumn olive patches in southern Illinois. American Water Resources Association National Meeting. Philadelphia, PA. Nov. 1-4, 2010."
			],
			presentations: [
				"Evans, D.A. 2016. The National Bobwhite Conservation Initiative Geospatial Data for Bobwhite Conservation. Joint Gulf Coast Prairie/Gulf Coastal Plains and Ozarks LCC Geospatial Science Meeting, Ridgeland, MS. Jan 19-20, 2016.",
				"Nesslar, R.W.*, M.M. Anderson-Riechman, D.A. Evans, J.E. Schoonover, S.G. Baer, J.J. Zaczek. 2016. Practical Management Tools for the Rehabilitation and Expansion of Canebrake Ecosystems. 2016 Missouri Natural Resources Conference, Osage Beach, MO. Feb 3-5, 2016.",
				"Evans, D.A. 2015. The National Bobwhite Conservation Initiative (NBCI) data program – planning the design, development, and implementation of the NBCI Data Warehouse. The National Bobwhite Technical Committee Annual Meeting, Galloway, NJ. Aug, 2015.",
				"Nesslar, R.W.*, M.M. Anderson-Riechman, D.A. Evans, J.E. Schoonover, J.J. Zaczek. 2015. Restoration of Native Remnant Canebrake Habitat in the Cache River Watershed of Southern Illinois the Effects of Fire, Fertilization, and Time. Natural Areas Association Conference Annual Meeting. Little Rock, AR. Nov. 3-5, 2015.",
				"Nesslar, R.W.*, M.M. Anderson-Riechman, D.A. Evans, J.E. Schoonover, S.G. Baer, J.J. Zaczek. 2015. Rehabilitation of Native Canebrake Ecosystems in the Cache River Watershed of Southern Illinois. The SIU Natural Sciences Student Research Symposium Annual Meeting. Carbondale, IL. Oct. 16, 2015. (poster)",
				"Nesslar, R.W.*, M.M. Anderson-Riechman, D.A. Evans, J.E. Schoonover, J.J. Zaczek. 2015. Mowing and Fire as Management Tools for Rehabilitating Giant Cane (Arundinaria gigantea (Walt.) Muhl). Association of Southeastern Biologists Annual Meeting. Chattanooga, TN. Apr. 1-4, 2015.",
				"Nesslar, R.W.*, M.M. Anderson-Riechman, D.A. Evans, J.E. Schoonover, J.J. Zaczek. 2015. Mowing and Fire as Management Tools for Rehabilitating Giant Cane (Arundinaria gigantea (Walt.) Muhl). Graduate Creative Activities and Research Forum. Southern Illinois University, April 7, 2015, Carbondale, IL.",
				"Nesslar, R.W.*, M.M. Anderson-Riechman, D.A. Evans, J.J. Zaczek, J.E. Schoonover. 2013. Cultural Methods to Rehabilitate Giant Cane in Southern Illinois. Southern Illinois University, College of Agricultural Sciences Fall Festival Annual Meeting. Oct. 18, 2013, Carbondale, IL. (poster)",
				"Evans, D., K.W.J. Williard, and J.E. Schoonover. 2013. Identification of critical source areas of phosphorus runoff in an agricultural watershed in central Illinois. AWRA Spring Specialty Conference on Agricultural Hydrology and Water Quality II, St. Louis, MO, Mar. 25-27, 2013. (poster)",
				"Williard, K.W.J.*, J.E. Schoonover, J. Crim, Derek Evans, S. Randall, J. Smith, and S. Swanberg. Apr. 19, 2012. Water, soil, and air quality research in sustainable crop production systems. SIU Agriculture Leadership Board Meeting. Carbondale, IL.",
				"Evans, D.A., K. Williard, J. Schoonover, and J. Crim. 2012. Determining critical source areas in a central Illinois agricultural field. The Ninth Annual Research Town Meeting and Fair. Southern Illinois University. Carbondale, IL. Apr. 2012. (poster)",
				"Mantano, N., K. Williard, A. Somor, De. Evans, C. Goldstein, J. Groninger, J. Schoonover. 2012. Impacts of autumn olive (Elaeagnus umbellata Thunb.) on stream nitrogen levels in headwater watersheds in southern Illinois. Presented at Riparian Ecosystems IV: Advancing Science, Economics and Policy in Denver, CO, Jun. 27, 2012.",
				"Crim, J., J. Smith, S. Swanberg, S. Randall, D. Evans, J. Schoonover, and K. Williard. 2012. Impacts of cover crops and tillage on water, soil, and air quality in central Illinois agricultural fields. The Ninth Annual Research Town Meeting and Fair. Southern Illinois University. Carbondale, IL. Apr. 2012. (poster)",
				"Montano, N., K.W.J. Williard, A. Somor, D. Evans, C. Goldstein, J. Groninger, and J. Schoonover. 2011. Nitrogen cycling in headwater watersheds and in managed stands of autumn olive (Elaeagnus umbellata Thunb.) in Southern Illinois.",
				"Williard, K.W.J., A. Somor, D. Evans, R. Davison, J. Groninger, and J.E. Schoonover. 2010. Nitrogen leaching from harvested and intact autumn olive patches in southern Illinois. American Water Resources Association National Meeting. Philadelphia, PA. Nov. 1-4, 2010."
			]
		}
	}

	addDirectives() {
		citations(this.controller)
	}
}