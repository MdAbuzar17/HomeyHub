let navbarToggler = document.getElementsByClassName("navbar-toggler")[0];

navbarToggler.addEventListener("click", ()=> {
    let topMargin = document.getElementsByClassName("top-margin")[0];
    // console.log("clicked");

    if (topMargin) {
        // Check the current marginTop value
        if (topMargin.style.marginTop === "130px") {
            // Reset to the original position
            topMargin.style.marginTop = "0px";
        } else {
            // Move down
            topMargin.style.marginTop = "130px";
        }
    } else {
        console.error("No element with the class 'top-margin' found!");
    }
})