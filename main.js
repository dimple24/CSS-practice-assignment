// script for the preload page
setTimeout(function() {
    document.getElementsByTagName("body")[0].classList.remove("no-scroll");
    document.getElementsByClassName("spinner-ctn")[0].style.display="none";
},3000);

// timeout function for landing page
setTimeout(function() {
    document.getElementsByClassName("text")[0].style.display="block";
}, 4000);
