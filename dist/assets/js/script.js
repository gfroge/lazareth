// ?facility popup
const facilityOpenCollection  = document.querySelectorAll('.facility-slide__btn');
const facilityOpenArr = Array.prototype.slice.call(facilityOpenCollection);
facilityOpenArr.forEach(btn => {
    btn.addEventListener('click', function(){
        openFacilityPopup(btn)
    });
});

const facilityCloseCollection  = document.querySelectorAll('.facility-popup__btn');
const facilityCloseArr = Array.prototype.slice.call(facilityCloseCollection);
facilityCloseArr.forEach(btn => {
    btn.addEventListener('click', function(){
        closeFacilityPopup(btn)
    });
});

function openFacilityPopup (btn) {
    const parent = btn.closest('.facility-slide');
    parent.classList.add('_facility-popup');
    parent.classList.add('_facility-pointer');
}

function closeFacilityPopup (btn) {
    const parent = btn.closest('.facility-slide');
    parent.classList.remove('_facility-popup');
    parent.classList.remove('_facility-pointer');
}
$(document).ready(function () {
    $('.facility__slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 4000,
    })
});

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