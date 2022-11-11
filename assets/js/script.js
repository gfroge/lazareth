// ! slider
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
const doctorsContent =  document.querySelector('.doctors__content');
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
    });}, 590);
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
    if (1<=numOfStars<=5) {
       printStars(el,numOfStars);
    } else if (numOfStars<0){
        printStars(el,1);
    } else{
       printStars(el,5);
    }
    console.log(el);
});

function printStars (el, numOfFull) {
    el.innerHTML = ``;
    for(let i=1; i<=numOfFull; i++){
        el.innerHTML += starElement;
    }
    if ((5-numOfFull) >= 1) {
        for(let i=1; i<=(5-numOfFull); i++){
            el.innerHTML += emptyStar;
        }
    }
}




// $(document).ready(function () {
//     $('.slider').slick({
//         arrows: false,
//         dots: true,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         responsive: [
//             {
//                 breakpoint: 950,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     arrows: true,
//                     dots: false,
//                 }
//             }
//         ]
//     }
//     );
//     $('.blog-slider').slick({
//         arrows: false,
//         dots: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         vertical: true,
//         autoplay: true,
//         pauseOnHover: true,
//         pauseOnFocus: true,
//         autoplaySpeed: 4000,
//         verticalSwiping: true,
//         asNavFor: ".blog-slider--second",
//         responsive: [
//             {
//                 breakpoint: 671,
//                 settings: {
//                     vertical: false,
//                     verticalSwiping: false
//                 }
//             }
//         ]
//     }
//     );
//     $('.blog-slider--second').slick({
//         arrows: false,
//         dots: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         vertical: true,
//         verticalSwiping: true,
//         asNavFor: ".blog-slider",
//         responsive: [
//             {
//                 breakpoint: 671,
//                 settings: {
//                     vertical: false,
//                     verticalSwiping: false
//                 }
//             }
//         ]
//     }
//     );
// })

// // add margin to second section (as reasons are position: absolute)
// const reasons = document.querySelector('.choose__reasons-wrap');
// const chooseSection = document.querySelector('.choose');

// window.addEventListener('load', addReasonsMargin);
// window.addEventListener('resize', addReasonsMargin);
// function addReasonsMargin() {

//     let rectBottomReasons = reasons.getBoundingClientRect();
//     rectBottomReasons = rectBottomReasons.bottom;

//     let rectBottomChoose = chooseSection.getBoundingClientRect();
//     rectBottomChoose = rectBottomChoose.bottom;
//     if (rectBottomReasons > rectBottomChoose) {
//         chooseSection.style.marginBottom = `${rectBottomReasons - rectBottomChoose}px`
//     }
//     else {
//         chooseSection.style.marginBottom = `0px`
//     }
// }

// //* first screen scroll -------------------------------------
// const exploreButton = document.querySelector('.start__explore');
// const exploreButtonTwo = document.querySelector('.choose__explore-button');
// const contactButton = document.querySelector('.start__contact');
// addClickListener(exploreButton,'.blog');
// addClickListener(exploreButtonTwo,'.blog');
// addClickListener(contactButton,'.contact');

// // smooth scroll (button)
// function addClickListener (button, targetClass) {
//     button.addEventListener('click', function (e) {
//         scrollSmoothly(targetClass);
//         e.preventDefault()
//     });
// }

// function scrollSmoothly(targetClass) {
//     const gotoBlock = document.querySelector(targetClass);

//     const gotoBlockValue =
//         gotoBlock.getBoundingClientRect().top + scrollY
//         - document.querySelector('header').offsetHeight;

//     window.scrollTo({
//         top: gotoBlockValue,
//         behavior: "smooth"
//     });
// }
// //* ------------------ -------------------------------------


// //* form input background animation----------------------
// const inputCollection = document.querySelectorAll('.send-message__input');
// const inputArr = Array.from(inputCollection);

// // for every input (textarea)
// inputArr.forEach(input => {
//     //wrapper
//     const bg = input.closest(".send-message__block");
//     // wrapper children
//     const bgArr = Array.from(bg.children);
//     let label;
//     //find closest label
//     bgArr.forEach(element => {
//         if (element.tagName == 'LABEL') {
//             label = element;
//         }
//     });
//     // if page refreshed
//     if (input.value) {
//         bg.classList.add('focus');
//         label.classList.add('focus');
//     }
//     input.addEventListener('focus', function () {
//         bg.classList.add('focus');
//         label.classList.add('focus');
//     });
//     input.addEventListener('focusout', function () {
//         // do not remove style if input contains text
//         if (!input.value) {
//             bg.classList.remove('focus');
//             label.classList.remove('focus');
//         }
//     });
// });
// //* ---------------------------------------------------


// // subscribe section email appear
// const emailButton =  document.querySelector('.subscribe__button');
// const emailForm =  document.querySelector('.subscribe__form');
// emailButton.addEventListener('click', function(e){
//     if (!emailButton.classList.contains('active')) {
//         e.preventDefault();
//         emailButton.classList.add('active');
//         emailForm.classList.add('active');
//     }
// });