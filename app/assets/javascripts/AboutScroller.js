export default class AboutScroller {
	constructor() {
		this.footer = angular.element("#footer")
		this.aboutItems = angular.element(".about")

		this.scrollOnAboutClick()
	}

	scrollOnAboutClick() {
		this.aboutItems.click(() => {
			angular.element('html, body').animate({
        		scrollTop: this.footer.offset().top
    		}, 500);
		})
	}
}