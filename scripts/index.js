let details = document.getElementsByClassName("project-details");
for(i=0; i<details.length; i++) {
    details[i].style.display = "none";
}

function toggleDetails(project) {
    let details = project.parentNode.getElementsByClassName("project-details")[0];
    details.style.display == "none" ? showDetails(details) : hideDetails(details)
}

function showDetails(details) {
    details.style.display="block";
    details.parentNode.getElementsByClassName("project-caret")[0].style.transform = "rotate(90deg)";
}

function hideDetails(details) {
    details.style.display="none";
    details.parentNode.getElementsByClassName("project-caret")[0].style.transform = "rotate(0)";
} 
