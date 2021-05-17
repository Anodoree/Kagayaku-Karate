document.getElementById("nav-btn").onclick = function() {
    open()
};

function open() {
    document.getElementById("mobile-header__top").classList.toggle("mobile-header__top--active");
    document.getElementById("mobile-nav").classList.toggle("mobile-nav--active");
}