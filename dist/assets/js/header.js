
// burger menu
const iconMenuWrap = document.querySelector('.menu__icon-wrap');
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_locked');
        iconMenu.classList.toggle('_active-menu');
        menuBody.classList.toggle('_active-menu');
    });
}

//Smooth scroll
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
            // burger menu closed after click
            if (iconMenu.classList.contains('_active-menu')) {
                document.body.classList.remove('_locked');
                iconMenu.classList.remove('_active-menu');
                menuBody.classList.remove('_active-menu');
            }
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// header fixed
// const header = document.querySelector('header');
// function checkScroll() {
//     if (window.innerWidth <= 870) {
//         header.classList.add("header--fixed");
//     }
//     else {
//         header.classList.remove("header--fixed")
//     }
// }
// document.addEventListener("DOMContentLoaded", checkScroll);
// window.addEventListener("scroll", checkScroll);
// window.addEventListener("resize", checkScroll);
