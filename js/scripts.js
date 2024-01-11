document.addEventListener("DOMContentLoaded", function(event){
    var scrollpos = localStorage.getItem('scrollpos');
    if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function(e) {
    localStorage.setItem('scrollpos', window.scrollY);
};


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var scrollPosition = window.scrollY || window.pageYOffset;

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible && scrollPosition > 0) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);


function scrollMovement() {
    var vHeader = document.querySelector(".vertical-header");
    var scrollPosition = window.scrollY || window.pageYOffset
    var totalPageHeight = document.body.scrollHeight - window.innerHeight;
    var maxPosition = 20;

    var newPosition = 0;

    if (scrollPosition > 0) {
        newPosition = (Math.min(scrollPosition / totalPageHeight, 1)) * maxPosition + 8;
    }

    vHeader.style.top = newPosition + "%";
}

window.addEventListener("scroll", scrollMovement);