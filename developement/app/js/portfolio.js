// JavaScript Document

const boxes = document.querySelectorAll(".boxwrapper");
const bioPic = document.querySelector(".bio-pic");


bioPic.addEventListener("mouseenter", function () {
	bioPic.style.width = "50vw";

}, false);

bioPic.addEventListener("mouseleave", function () {
	bioPic.style.width = "200px";

}, false);

// Boxes effect

boxes.forEach(function (effect) {
	effect.addEventListener("mouseenter", function () {
		effect.style.borderColor = "#000000";
		effect.querySelector(".textsh").style.textShadow = "4px 5px 17px #000000";
		effect.querySelector("img").style.width = "80px";
		effect.querySelector(".detail").style.visibility = "visible";
		effect.style.height = "550px";

	}, false);
	effect.addEventListener("mouseleave", function () {
		effect.style.borderColor = "#E7E7E7";
		effect.querySelector(".textsh").style.textShadow = "none";
		effect.querySelector("img").style.width = "100px";
		effect.querySelector(".detail").style.visibility = "hidden";
		effect.style.height = "370px";
	}, false);

});
