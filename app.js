function navChanged() {
    let width = document.getElementById("mySidebar").style.width;

    if (width > 0) {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
    else {
        document.getElementById("mySidebar").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
    }
}