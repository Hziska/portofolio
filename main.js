const barMenu = document.querySelector('.bar-menu')
const navMenu = document.querySelector('.nav-menu')
barMenu.addEventListener('click',function(){
    navMenu.classList.toggle('menu-active')
    barMenu.classList.toggle('toggle')
})