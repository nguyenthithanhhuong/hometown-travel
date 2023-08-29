const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const slideBar = $$('.slide-btn')
const backgrounds = $$('.background-item')

function defaultbackground() {            
    let index;
    for (index = 0; index < backgrounds.length; index++) {
        backgrounds[index].classList.remove('active');  
    }
    myIndex++;
    if (myIndex > backgrounds.length) {myIndex = 1}    
    backgrounds[myIndex-1].classList.add('active');  
    backgrounds[myIndex-1].currentTime = 0
    setTimeout(defaultbackground, 10000);
}

const transbackground = function() {
    const trans = slideBar.forEach((slideBtn, index) => {
        const background = backgrounds[index]
        slideBtn.onclick = function() {
            $('.background-item.active').classList.remove('active')
            background.classList.add('active')
            background.currentTime = 0
        }
    })
    return trans
}
transbackground()
let myIndex = 0
defaultbackground()
