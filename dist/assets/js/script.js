function scrollToBlock(where) {
    const gotoBlock = document.querySelector(where);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
    window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
    });
}
// ! sliders
$(document).ready(function () {
    $('.facility__slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});


// ?facility popup
const facilityOpenCollection = document.querySelectorAll('.facility-slide__btn');
const facilityOpenArr = Array.prototype.slice.call(facilityOpenCollection);

facilityOpenArr.forEach(btn => {
    btn.addEventListener('click', function () {
        // show description
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

// * doctors section and search
// side list options
const liCollection = document.querySelectorAll('.doctors__li');
const liArr = Array.prototype.slice.call(liCollection);
// doctors
const docCollection = document.querySelectorAll('.doc-card');
const docArr = Array.prototype.slice.call(docCollection);

const doctorsContent = document.querySelector('.doctors__content');

let allOptionsNum = 0;
// allOptions keeps track of all options selected
let allOptions = {}
liArr.forEach(li => {
    allOptions[li.dataset.job] = 0;
});

liArr.forEach(li => {
    li.addEventListener('click', function () {
        // show everything
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
// update allOptions when side option is clicked
function rearrangeOptions(job, isActive) {
    if (isActive) {
        allOptions[job] = 1;
    } else {
        allOptions[job] = 0;
    }
}

function rearrangeList() {
    doctorsContent.classList.add('active');
    setTimeout(() => {
        // check if nothig is selected => show everything
        let isEmpty = true;
        for (let i = 0; i < liArr.length; i++) {
            if (liArr[i].classList.contains('active')) {
                isEmpty = false;
                break;
            }
        }
        if (isEmpty) {
            showEverything();

        } else { //something is selected
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

// ? search
const input = document.querySelector('.searchbar__input');
const searchButton = document.querySelector('.searchbar__button');
const searchResults = document.querySelector('.searchbar__result');

const searchHint = document.querySelectorAll('.searchbar__option');
const searchHintArr = Array.prototype.slice.call(searchHint);

searchHintArr.forEach(hint => {
    hint.addEventListener('click', function (e) {
        input.value = hint.innerHTML;
    });
});

// hint
input.addEventListener('focus', function () {
    onInputFieldInteraction()
});
input.addEventListener('input', function () {
    onInputFieldInteraction()
});

function onInputFieldInteraction() {
    let value = input.value.trim().toLowerCase()
    if (value) {
        searchResults.classList.remove('_hidden');
        searchHintArr.forEach(hint => {
            if (hint.innerHTML.toLowerCase().includes(value)) {
                hint.classList.add('active')
            } else {
                hint.classList.remove('active')
            }
        });
    } else {
        searchResults.classList.add('_hidden');
    }
}


input.addEventListener('focusout', function () {
    setTimeout(() => {
        if (!searchResults.classList.contains('_hidden')) {
            searchResults.classList.add('_hidden');
        }
    }, 300);
});

function searchDoc(e) {
    let serchQuery = null;
    switch (input.value.trim().toLowerCase()) {
        case 'терапевт':
            serchQuery = 'therapist'
            break;
        case 'гинеколог':
            serchQuery = 'gynecologist'
            break;
        case 'хирург':
            serchQuery = 'surgeon'
            break;
        case 'стоматолог':
            serchQuery = 'dentist'
            break;
        case 'узи' || 'уздг' || 'врач уздг':
            serchQuery = 'ultrasound'
            break;
        default:
            break;
    }
    removeActiveClass(liArr);
    liArr.forEach(li => {
        rearrangeOptions(li.dataset.job, false)
        if (li.dataset.job == serchQuery) {
            scrollToBlock('.doctors');
            li.classList.add('active');
            rearrangeOptions(li.dataset.job, true)
            rearrangeList();
        }
    });
    e.preventDefault();
}
searchButton.addEventListener('click', searchDoc);

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

// show stars instead of their number 
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
            scrollToBlock(menuLink.dataset.goto);
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

let callback = (entries) => {
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

let calcThreshold = () => (window.innerWidth >=1400) ? 0.6 : 0.3;


let observer = new IntersectionObserver(callback, { threshold: calcThreshold() });

window.addEventListener('DOMContentLoaded', () => {
    sectionsArr.forEach(section => {
        observer.observe(section);
    });
});
// * -------------------------------------------------------------

