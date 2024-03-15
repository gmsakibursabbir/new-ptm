window.addEventListener("scroll", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (window.pageYOffset > 200) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

document.getElementById("scrollToTopBtn").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});