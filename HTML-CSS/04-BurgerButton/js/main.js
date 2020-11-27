var TOGGLE_DIV_SELECTOR = ".header__burger";
var TOGGLE_BUTTON_SELECTOR = ".header__button";
var OPENED_MENU_CLASS = "active";

document.addEventListener("DOMContentLoaded", function(event) {
    var toggleDivs = document.querySelectorAll(TOGGLE_DIV_SELECTOR);
    
    toggleDivs.forEach(element => {
        element.addEventListener("click", function() {
            element.classList.toggle(OPENED_MENU_CLASS);
        });
    });

    var toggleButtons = document.querySelectorAll(TOGGLE_BUTTON_SELECTOR);
    
    toggleButtons.forEach(element => {
        element.addEventListener("click", function() {
            element.classList.toggle(OPENED_MENU_CLASS);
        });
    });
    
});