function openNav() {
    var tableContent = document.getElementById("tableContent");
    var showHide = document.getElementById('open')
    if (tableContent.style.display == "block") {
        tableContent.style.display = "none";
        showHide.innerHTML = 'show table of contents';

    } else {
        tableContent.style.display = "block";
        showHide.innerHTML = 'hide table of contents';
    }
}
