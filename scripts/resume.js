var windowHeight; //variable for the window height

//function used to resize the iframe for the resume on the resume.html page
function getWindowDimensions() {
	windowHeight = window.innerHeight;
	document.getElementById("resumePDF").height = windowHeight - 150;
}
