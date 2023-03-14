const tags = document.querySelector(".tags");
const main = document.querySelector(".main");

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containsFixed = () => tags.classList.contains('_fixed-tags');

window.addEventListener("scroll", () => {
	const sectionOne = document.querySelector(".section-one")
	const mainOffset = offset(main).top;
	const mainHeight = main.offsetHeight;
	const tagsHeight = tags.offsetHeight;
	if (scrollPosition() >= (mainOffset + mainHeight) && !containsFixed()) {
		console.log("More");
		tags.classList.add("_fixed-tags");
		sectionOne.style.paddingTop = (tagsHeight + 40) + 'px';
	} else if (scrollPosition() <= (mainOffset + mainHeight) && containsFixed()) {
		console.log("Less");
		tags.classList.remove("_fixed-tags");
		sectionOne.removeAttribute("style");
	}
});

// Get the position of the element from the top of the page
function offset(el) {
	if (el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
}