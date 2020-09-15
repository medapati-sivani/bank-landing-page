const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobile-nav');
const navBG = document.getElementById('nav-bg');

//Eventlisteners
burger.addEventListener('click', toggleMob);

//Functions
function toggleMob() {
    mobileNav.classList.toggle('hide');
    burger.classList.toggle('burger-toggle');
    navBG.classList.toggle('hide');
}