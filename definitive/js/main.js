function myFunction() {							//Create a function, toggles between adding and removing responsive class to the navbar
	var x = document.getElementById("mytopnav") //Get the ID from the html div
	if (x.className === "topnav-menu") {		//Checks to see if get the responive class
		x.className += " responsive ";
	} else{
		x.className = "topnav-menu";
	}

}