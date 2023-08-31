const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const container = $('.container')
const slideBar = $$('.slide-btn')

const contentBtn = $('.content__button')
const modal = $('.modal')
const modalBtn = $('.body-close')
const modalBody = $('.modal__body')

const backgrounds = [
        {
            name: 'silde-01',
            path: './assets/img/background-home/slide-01.jpg'
        },
        {
            name: 'silde-02',
            path: './assets/img/background-home/slide-02.jpg'
        },
        {
            name: 'silde-03',
            path: './assets/img/background-home/slide-03.jpg'
        },
        {
            name: 'silde-04',
            path: './assets/img/background-home/slide-04.jpg'
        },
        {
            name: 'silde-05',
            path: './assets/img/background-home/slide-05.jpg'
        }
    ]

const transBackground = function() {
    const trans = slideBar.forEach((slideBtn, index) => {
        slideBtn.onclick = function() {
            console.log(slideBtn, index)
            container.style.backgroundImage = `url(\'${backgrounds[index].path}\')`
        }
    })
}

const defaultBackground = function() {        
    myIndex++;
    if (myIndex > backgrounds.length) {myIndex = 1}  
    container.style.backgroundImage = `url(\'${backgrounds[myIndex - 1].path}\')`
    setTimeout(defaultBackground, 6000);
}

contentBtn.onclick = function() {
    modal.style.animation = 'fadeIn linear 0.2s'
    modalBody.style.animation = 'growth linear 0.5s'
    modal.style.display = 'flex'
}

modalBtn.onclick = function() {
    modal.style.display = 'none'
}


let myIndex = 0
defaultBackground()
transBackground()