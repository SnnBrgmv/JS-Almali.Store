let menuBtn = document.querySelector('#menu-Btn')
let menuList = document.querySelector('#menu-List')
let body = document.querySelector('body')

menuBtn.addEventListener('click', (e) => {

    menuList.style.display = "block";
    e.stopPropagation();
})

body.addEventListener('click', () => {
    menuList.style.display = "none";
})