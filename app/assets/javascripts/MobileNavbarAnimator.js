export default class MobileNavbarAnimator {
	constructor(htmlElem) {
		this.html = htmlElem
		this.mobileNavbar = this.html.find("#mobile-navbar")
		this.footer = this.html.find("#footer")

		this.hamburgerMenuContainer = this.mobileNavbar.find("#hamburger-container")
		this.hamburgerMenuLines = this.hamburgerMenuContainer.find("span")
		this.topLine = this.hamburgerMenuContainer.find("#top-line")
		this.midLine = this.hamburgerMenuContainer.find("#mid-line")
		this.bottomLine = this.hamburgerMenuContainer.find("#bottom-line")

		this.navbarName = this.mobileNavbar.find(".navbar-name a")

		this.mobileMenu = this.mobileNavbar.find("#mobile-menu")
		this.mobileMenuOverlay = this.mobileNavbar.find("#mobile-menu-overlay")
		this.mobileMenuItems = this.mobileMenu.find(".mobile-menu-items")
		this.aboutItem = this.mobileMenu.find(".about")

		this.displayed = false

		this.toggleMenuOnClickEvent()
		this.deactivateMenuOnItemClickEvent()
		this.scrollOnAboutClick()
		console.log(this)
	}

	toggleMenuOnClickEvent() {
		this.hamburgerMenuContainer.click(() => {
			if (this.displayed) {
				this.deactivateMobileNavbar()
			} else {
				this.activateMobileNavbar()
			}
		})
	}

	activateMobileNavbar() {
		this.showMobileMenu()
		this.colorItemsWhite()
		this.showOverlay()
		this.hamburgerToX()
		this.disableScroll()
		this.displayed = true
	}

	deactivateMobileNavbar() {
		this.hideMobileMenu()
		this.colorItemsBlack()
		this.hideOverlay()
		this.xToHamburger()
		this.enableScroll()
		this.displayed = false
	}

	showMobileMenu() {
		this.mobileMenu.css('left', 0)
	}

	hideMobileMenu() {
		this.mobileMenu.css('left', -300)
	}

	colorItemsWhite() {
		this.hamburgerMenuLines.css('background-color', 'white')
		this.navbarName.css('color', 'white')
	}

	colorItemsBlack() {
		this.hamburgerMenuLines.css('background-color', 'black')
		this.navbarName.css('color', 'black')
	}

	showOverlay() {
		this.mobileMenuOverlay.show()
	}

	hideOverlay() {
		this.mobileMenuOverlay.hide()
	}

	hamburgerToX() {
		this.topLine.css("top", "10px")
      	this.bottomLine.css("top", "10px")
      	this.midLine.css("visibility", "hidden")

      	this.topLine.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", () => {
	        this.topLine.css("transform", "rotate(45deg)");
        	this.bottomLine.css("transform", "rotate(-45deg)");
	    })
	}

	xToHamburger() {
		this.bottomLine.css("transform", "rotate(0deg)");
      	this.topLine.css("transform", "rotate(0deg)");

      	this.topLine.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", () => {
	        this.midLine.css("visibility", "visible");
	        this.topLine.css("top", "0px");
	        this.bottomLine.css("top", "20px");
	    })
	}

	disableScroll() {
		$('html, body').css('overflow', 'hidden')
	}

	enableScroll() {
		$('html, body').css('overflow-y', 'auto')
	}

	deactivateMenuOnItemClickEvent() {
		this.mobileMenuItems.click(() => {
			this.deactivateMobileNavbar()
		})

		this.navbarName.click(() => {
			if (this.displayed) {
				this.deactivateMobileNavbar()
			}
		})
	}

	scrollOnAboutClick() {
		this.aboutItem.click(() => {
			this.deactivateMobileNavbar()
			this.html.animate({
        		scrollTop: this.footer.offset().top
    		}, 500);
		})
	}
}