// navbar
function myFunction() { //Create a function, toggles between adding and removing responsive class to the navbar
	let x = document.getElementById("mytopnav") //Get the ID from the html div
	if (x.className === "topnav-menu") { //Checks to see if get the responive class
		x.className += " responsive";
	} else{
		x.className = "topnav-menu";
	}

}

// structure education
document.getElementById("button1").click(); // auto click first tab on page load to activate by default

function openYear(year, value) { // function to change active tab
    let x = document.getElementsByClassName("year"); // obtain tab content
	let y = document.getElementsByClassName("tab-button"); // obtain button content;
    for (let i = 0; i < x.length; i++) { // loop for every tab
        x[i].style.display = "none";  // hide tab content
    }
	
	for (let i = 0; i < y.length; i++) {
        y[i].className = "tab-button";  // remove active tab class
    }
	
    document.getElementById(year).style.display = "flex";  // display clicked tab's content
	y[value].className += " tab-active"; // add active class tab
}