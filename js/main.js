let menuBtn = document.querySelector('#menu-Btn')
let menuList = document.querySelector('#menu-List')
let body = document.querySelector('body')

menuBtn.addEventListener('click', (e) => {

    setTimeout(() => {
        menuList.style.display = "block";
    }, 250);
    e.stopPropagation();
})

body.addEventListener('click', () => {
    setTimeout(() => {
        menuList.style.display = "none";
    }, 250);
})