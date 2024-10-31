// Mobile menu burger
function toggleMobileMenu() {
	const burger = document.querySelector(".burger");
	const menu = document.querySelector(".menu");
	const body = document.querySelector("body");
	burger.addEventListener("click", () => {
		if (!menu.classList.contains("active")) {
			menu.classList.add("active");
			burger.classList.add("active");
			body.classList.add("locked");
		} else {
			menu.classList.remove("active");
			burger.classList.remove("active");
			body.classList.remove("locked");
		}
	});

	window.addEventListener("resize", () => {
		if (window.innerWidth > 991.98) {
			menu.classList.remove("active");
			burger.classList.remove("active");
			body.classList.remove("locked");
		}
	});
}
toggleMobileMenu();
// Sticke Header
function stickyHeader() {
	const root = document.querySelector(":root");
	const nav = document.querySelector("header");
	const breakpoint = 33;
	const isScrollingPadding = "80px";
	const isNotScrollingPadding = "140px";
	var rs = getComputedStyle(root);
	if (window.scrollY >= breakpoint) {
		nav.classList.add("sticky");
		root.style.setProperty("--scrollPadding", isScrollingPadding);
	} else {
		nav.classList.remove("sticky");
		root.style.setProperty("--scrollPadding", isNotScrollingPadding);
	}
}
window.addEventListener("scroll", stickyHeader);

// Services slider
const swiper = new Swiper(".swiper__services", {
	// Optional parameters
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-next",
		prevEl: ".swiper-prev",
	},
	spaceBetween: 22,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		640: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},
});
