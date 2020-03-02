//////////materialize init/////////

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
});

/////////number mask/////////////
$(document).ready(function(){
    $('#phone').mask('+38(000) 000 00 00');
});

//////////(.select tab) /////////

function chooseColor(evt, color) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tab__content');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tab__links');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(color).style.display = 'block';
    evt.currentTarget.className += ' active';
}


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

/////////// close select section /////////////
function myFunction() {
    var checkBox = document.getElementById('myCheck');
    var text = document.getElementById('closed');
  
    if (checkBox.checked == true){
      text.style.display = 'block';
    } else {
      text.style.display = 'none';
    }
}

///////// mobile bugrer ///////////
const hamburger = document.querySelector('.nav__hamburger');
const navLinks = document.querySelector('.nav__links');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    body.classList.toggle('active');
});

const closeBurger = document.querySelectorAll('.nav__link');

for (let i = 0; i < closeBurger.length; i++) {
    closeBurger[i].addEventListener('click', function () {
        navLinks.classList.toggle('open');
        body.classList.toggle('active');
    });
}