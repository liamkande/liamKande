
// JavaScript Document

//bioPic fx
const bioPic = document.querySelector(".bio-pic");
bioPic.addEventListener("mouseenter", function() {
	bioPic.style.width = "300px";
}, false);
bioPic.addEventListener("mouseleave", function() {
	bioPic.style.width = "200px";
}, false);

//project Interface fx
const boxes = document.querySelectorAll(".boxwrapper");
boxes.forEach(function (effect) {
	effect.addEventListener("mouseenter", function() {
		effect.style.borderColor = "#000000";
		effect.querySelector("h2").style.textShadow = "4px 5px 17px #000000";
		effect.querySelector("img").style.width = "80px";
		effect.querySelector(".detail").style.visibility = "visible";
		effect.style.height = "100%";
	}, false);

	effect.addEventListener("mouseleave", function() {
		effect.style.borderColor = "#E7E7E7";
		effect.querySelector("h2").style.textShadow = "none";
		effect.querySelector("img").style.width = "100px";
		effect.querySelector(".detail").style.visibility = "hidden";
		effect.style.height = "360px";
	}, false);
});
