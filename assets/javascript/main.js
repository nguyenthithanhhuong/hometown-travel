const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const container = $('.container')
const slideBar = $$('.slide-btn')

const backgrounds = [
        {
            name: 'silde-01',
            path: './assets/img/slide-01.jpg'
        },
        {
            name: 'silde-02',
            path: './assets/img/slide-02.jpg'
        },
        {
            name: 'silde-03',
            path: './assets/img/slide-03.jpg'
        },
        {
            name: 'silde-04',
            path: './assets/img/slide-04.jpg'
        },
        {
            name: 'silde-05',
            path: './assets/img/slide-05.jpg'
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

let myIndex = 0
defaultBackground()

transBackground()


