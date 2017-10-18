export default class AboutScroller {
	constructor() {
		this.html = angular.element('html')
		this.footer = this.html.find("#footer")
		this.aboutItems = this.html.find(".about")

		this.scrollOnAboutClick()
		console.log(this)
	}

	scrollOnAboutClick() {
		this.aboutItem.click(() => {
			this.html.animate({
        		scrollTop: this.footer.offset().top
    		}, 500);
		})
	}
}