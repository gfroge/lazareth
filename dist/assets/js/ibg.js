let isSupported = function() {
    let elem = document.createElement('canvas');
    if (!!(elem.getContext && elem.getContext('2d'))) {
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }
    else {
        return false;
    }
}

isSupported() ? ibgWebp() : ibg();

function ibgWebp () {
    let ibg = document.querySelectorAll(".ibg");
    for (let i = 0; i < ibg.length; i++) {
        let slices = 0;
        let src = ibg[i].querySelector('img').getAttribute('src');
        for(let j=src.length-1; j>0; j--){
            slices++;
            if (src[j]=='.') {
                break;
            }
        }
        src = src.slice(0,src.length-slices)
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + src + '.webp'  + ')';
        }
    }
}

//Adaptive background images
function ibg() {
    var ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}


function negativeMargin(isX = false, isY = false, className) {
    let obj = document.querySelectorAll(`.${className}`);
    for (let i = 0; i < obj.length; i++) {
        if (isX) {
            let w = obj[i].offsetWidth / 2;
            obj[i].style.marginLeft = `-${w}px`;
        }
        if (isY) {
            let h = obj[i].offsetHeight / 2;
            obj[i].style.marginTop = `-${h}px`;
        }
    }
}
negativeMargin(true, true, 'about__circle-text');