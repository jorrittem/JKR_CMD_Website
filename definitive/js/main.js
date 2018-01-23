// navbar
function myFunction() { // create a function, toggles between adding and removing responsive class to the navbar
	let x = document.getElementById("mytopnav"); // get the ID from the html div
	if (x.className === "topnav-menu") { // checks to see if get the responive class
		x.className += " responsive";
	}
	else {
		x.className = "topnav-menu";
	}
}