export default class NavbarAnimator {
	constructor(htmlElem) {
		this.html = htmlElem
		this.navbarMenu = this.html.find("#menu")
		this.footer = this.html.find("#footer")
		this.aboutItem = this.navbarMenu.find(".about")

		this.scrollOnAboutClick()
	}

	scrollOnAboutClick() {
		this.aboutItem.click(() => {
			this.html.animate({
        		scrollTop: this.footer.offset().top
    		}, 500);
		})
	}
}