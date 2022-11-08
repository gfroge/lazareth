//Adaptive background images
function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (let i = 0; i < ibg.length; i++) { if (ibg[i].querySelector('img')) { ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')'; } }
}
ibg();

function negativeMargin (isX=false, isY=false, className) {
    let obj = document.querySelectorAll(`.${className}`);
    for (let i = 0; i < obj.length; i++) {
        if (isX) {
            let w  = obj[i].offsetWidth / 2;
            obj[i].style.marginLeft = `-${w}px`;
        }
        if (isY) {
            let h  = obj[i].offsetHeight / 2;
            obj[i].style.marginTop = `-${h}px`;
        }
    }
}
negativeMargin(true,true,'about__circle-text');