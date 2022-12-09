var hamburger = document.querySelector(".header__hamburger");
var menuMobile = document.querySelector(".menu__mobile");
var menuExit = document.querySelector(".menu__exit");

hamburger.addEventListener("click", function () {
  menuMobile.classList.toggle("menu__mobile--actice");
});
menuExit.addEventListener("click", function () {
  menuMobile.classList.toggle("menu__mobile--actice");
});
