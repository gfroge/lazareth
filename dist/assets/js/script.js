// ! sliders
$(document).ready(function () {
    $('.facility__slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 4000,
    });
    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 6000,
    });
});


// ?facility popup
const facilityOpenCollection = document.querySelectorAll('.facility-slide__btn');
const facilityOpenArr = Array.prototype.slice.call(facilityOpenCollection);
facilityOpenArr.forEach(btn => {
    btn.addEventListener('click', function () {
        openFacilityPopup(btn)
    });
});

const facilityCloseCollection = document.querySelectorAll('.facility-popup__btn');
const facilityCloseArr = Array.prototype.slice.call(facilityCloseCollection);
facilityCloseArr.forEach(btn => {
    btn.addEventListener('click', function () {
        closeFacilityPopup(btn)
    });
});

function openFacilityPopup(btn) {
    const parent = btn.closest('.facility-slide');
    parent.classList.add('_facility-popup');
    parent.classList.add('_facility-pointer');
}

function closeFacilityPopup(btn) {
    const parent = btn.closest('.facility-slide');
    parent.classList.remove('_facility-popup');
    parent.classList.remove('_facility-pointer');
}
// ?---------------------------------

// * doctors section
const liCollection = document.querySelectorAll('.doctors__li');
const liArr = Array.prototype.slice.call(liCollection);

const docCollection = document.querySelectorAll('.doc-card');
const docArr = Array.prototype.slice.call(docCollection);

let allOptionsNum = 0;

let allOptions = {}
liArr.forEach(li => {
    allOptions[li.dataset.job] = 0;
});
// todo: order doctors by profession
liArr.forEach(li => {
    li.addEventListener('click', function () {
        if (li.dataset.job == 'any') {
            removeActiveClass(liArr);
            li.classList.add('active');
            showEverything();
        } else {
            liArr[allOptionsNum].classList.remove('active');
            li.classList.toggle('active');
            rearrangeOptions(li.dataset.job, li.classList.contains('active'))
            rearrangeList();
        }
    });
});

function rearrangeOptions(job, isActive) {
    if (isActive) {
        allOptions[job] = 1;
    } else {
        allOptions[job] = 0;
    }
}
const doctorsContent = document.querySelector('.doctors__content');
function rearrangeList() {
    doctorsContent.classList.add('active');
    setTimeout(() => {
        let isEmpty = true;
        for (let i = 0; i < liArr.length; i++) {
            if (liArr[i].classList.contains('active')) {
                isEmpty = false;
                break;
            }
        }
        if (isEmpty) {
            showEverything();

        } else {
            docArr.forEach(doc => {
                if (allOptions[doc.dataset.job]) {
                    doc.classList.add('_visible')
                }
                else {
                    doc.classList.remove('_visible')
                }
            });
        }
        doctorsContent.classList.remove('active');
    }, 590);
}

function showEverything() {
    doctorsContent.classList.add('active');
    setTimeout(() => {
        docArr.forEach(doc => {
            doc.classList.add('_visible')
        });
    }, 590);
}

function removeActiveClass(arr) {
    arr.forEach(el => {
        el.classList.remove('active');
    });
}
// *---------------------------------

// ? testimonials
const starsCollection = document.querySelectorAll('.testimonial__stars');
const starsArr = Array.prototype.slice.call(starsCollection);

const starElement = `<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 16.0774L4.20233 20L6.0005 12.6007L-6.27882e-07 7.62547L7.91058 6.97573L11 0L14.09 6.97573L22 7.62547L15.9994 12.6007L17.7982 20L11 16.0774Z" fill="#FFC107"/>
</svg>`

const emptyStar = `<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 16.0774L4.20233 20L6.0005 12.6007L-6.27882e-07 7.62547L7.91058 6.97573L11 0L14.09 6.97573L22 7.62547L15.9994 12.6007L17.7982 20L11 16.0774Z" fill="#b7b7b7"/>
</svg>`;

starsArr.forEach(el => {
    let numOfStars = Number(el.innerHTML);
    if (1 <= numOfStars <= 5) {
        printStars(el, numOfStars);
    } else if (numOfStars < 0) {
        printStars(el, 1);
    } else {
        printStars(el, 5);
    }
});

function printStars(el, numOfFull) {
    el.innerHTML = ``;
    for (let i = 1; i <= numOfFull; i++) {
        el.innerHTML += starElement;
    }
    if ((5 - numOfFull) >= 1) {
        for (let i = 1; i <= (5 - numOfFull); i++) {
            el.innerHTML += emptyStar;
        }
    }
}

// * aside nav
// smooth scroll
const asideNavLinks = document.querySelectorAll('.nav__bullet[data-goto]');
if (asideNavLinks.length > 0) {
    asideNavLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onAsideNavClick);
    });
    function onAsideNavClick(e) {
        e.preventDefault();
        const menuLink = e.target;

        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
const upButton = document.querySelector('button.nav__up');
upButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// show text when section is on screen
const sections = document.querySelectorAll('section');
const sectionsArr = Array.prototype.slice.call(sections);

let callback = (entries, observer) => {
    entries.forEach((entry) => {
        let elementClasses = entry.target.className;
        asideNavLinks.forEach((link => {
            if (elementClasses.includes(link.dataset.goto.slice(1, link.dataset.goto.length))) {
                link.parentNode.children[0].classList.toggle('active');
                link.classList.toggle('active');
            }
        }));
    });
};

let observer = new IntersectionObserver(callback, { threshold: 0.6 });

window.addEventListener('DOMContentLoaded', () => {
    sectionsArr.forEach(section => {
        observer.observe(section);
    });
});
// * -------------------------------------------------------------

