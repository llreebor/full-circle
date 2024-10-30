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

	console.log(22);
	// Вот тут мы ставим брейкпоинт навбара
	window.addEventListener("resize", () => {
		if (window.innerWidth > 991.98) {
			menu.classList.remove("active");
			burger.classList.remove("active");
			body.classList.remove("locked");
		}
	});
}
toggleMobileMenu();

// Services slider
const swiper = new Swiper(".swiper__services", {
	// Optional parameters
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	spaceBetween: 22,
	breakpoints: {
		// when window width is >= 320px

		320: {
			slidesPerView: 1,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 3,
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 3,
		},
	},
});
