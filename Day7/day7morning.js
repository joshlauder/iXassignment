var lightbox = document.querySelectorAll('.lightbox')[0];

function getFormValues() {
    var first = document.forms["form1"]["fname"].value;
    var last = document.forms["form1"]["lname"].value;
    console.log (first + " " + last);
   
  
}

function changeColor() {
	var colorDiv = document.getElementById ("color-div");
	colorDiv.classList.toggle("isRed");
}

function toggleImage() {lightbox.classList.toggle('isVisible');
}

document.getElementById("name-btn").onclick = function() {
	getFormValues();
};


document.getElementById("color-btn").onclick = function() {
	changeColor();
}
document.getElementById("image-btn").onclick = function() {
	toggleImage();
}

document.getElementById("screen").onclick = function() {
	toggleImage();
}