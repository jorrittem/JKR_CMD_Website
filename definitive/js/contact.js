// contact feature
//Shows the first tab when page is loaded
document.getElementById("id").style.display = "block";

//function to toggle between tabs
function openMajor(evt, majorName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //Shows the tab wich is active
    document.getElementById(majorName).style.display = "block";
    evt.currentTarget.className += " active";
}