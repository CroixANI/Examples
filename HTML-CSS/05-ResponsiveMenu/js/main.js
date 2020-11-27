var TOGGLE_DIV_SELECTOR = ".header__burger";
var TOGGLE_BUTTON_SELECTOR = ".header__button";
var MENU_SELECTOR = ".header__menu";
var OPENED_MENU_CLASS = "active";
var LOCK_SCROLL_CLASS = "lock-scroll";

document.addEventListener("DOMContentLoaded", function(event) {
    var menuElement = document.querySelector(MENU_SELECTOR);
    var bodyElement = document.querySelector(`body`);
    var toggleDivs = document.querySelectorAll(TOGGLE_DIV_SELECTOR);
    var toggleButtons = document.querySelectorAll(TOGGLE_BUTTON_SELECTOR);

    toggleDivs.forEach(element => {
        element.addEventListener("click", function() {
            element.classList.toggle(OPENED_MENU_CLASS);
            menuElement.classList.toggle(OPENED_MENU_CLASS);
            bodyElement.classList.toggle(LOCK_SCROLL_CLASS);
        });
    });

    toggleButtons.forEach(element => {
        element.addEventListener("click", function() {
            element.classList.toggle(OPENED_MENU_CLASS);
            menuElement.classList.toggle(OPENED_MENU_CLASS);
            bodyElement.classList.toggle(LOCK_SCROLL_CLASS);
        });
    });
    
});