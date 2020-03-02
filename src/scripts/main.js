//////////materialize init/////////

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
});

/////////number mask/////////////

$(document).ready(function(){
    $('#phone').mask('+38(000) 000 00 00');
});

////////// up button //////////

window.addEventListener('scroll', () => {
    const sideNav = document.getElementById('up-button');

    if(window.pageYOffset < 500){
        sideNav.style.visibility = 'hidden';
        sideNav.style.opacity = '0';

    } else {
        sideNav.style.visibility = 'visible';
        sideNav.style.opacity = '1'; //up-arrow fade
    }
});

///////// mobile bugrer ///////////

const hamburger = document.querySelector('.nav__hamburger');
const navLinks = document.querySelector('.nav__links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

const closeBurger = document.querySelectorAll('.nav__link');

for (let i = 0; i < closeBurger.length; i++) {
    closeBurger[i].addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });
}