document.getElementById("nav-btn").onclick = function() {
    open()
};

function open() {
    document.getElementById("mobile-header__top").classList.toggle("mobile-header__top--active");
    document.getElementById("mobile-nav").classList.toggle("mobile-nav--active");
    document.getElementById("nav-btn-1").classList.toggle("mobile-header__btn-span-1--active");
    document.getElementById("nav-btn-2").classList.toggle("mobile-header__btn-span-2--active");
    document.getElementById("nav-btn-3").classList.toggle("mobile-header__btn-span-3--active");
}