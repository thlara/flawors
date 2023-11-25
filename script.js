var index = 1;
var slider = document.getElementsByClassName("slider")[0];
var slide = document.querySelectorAll(".slider .slide"),
	num = slide.length;
var slide_control = document.getElementsByClassName("slide-control")[0];

for (let i = 0; i < num; i++) {
	slide_control.appendChild(document.createElement("li"));
	slide_control.children[i].addEventListener('click', ()=>{goto(i+1)});
}
function plus(n) {show((index += n));}
function goto(n) {show(index = n);}
function show(n) {
	n > num ? (index = 1) : index;
	n < 1 ? (index = num) : index;
	
	for (i = 0; i < num; i++) {
		slide[i].style.opacity = 0;
		slide[i].style.transform = "scale(.7) translateZ(-100px)"; 
		slide_control.children[i].classList.remove("active");
	}
	
	slide[index - 1].style.opacity = 1;
	slide[index - 1].style.transform = "scale(1) translateZ(0px)";
	slide_control.children[index - 1].classList.add("active");
}
