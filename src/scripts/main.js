

//////////materialize init/////////

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
});


//////////(.select tab) /////////

function chooseColor(evt, color) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab__content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab__links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(color).style.display = "block";
    evt.currentTarget.className += " active";
}

//////////(.select color & edge) /////////

document.getElementById('color1').onclick = changeColor1;
document.getElementById('color2').onclick = changeColor2;
document.getElementById('color3').onclick = changeColor3;
document.getElementById('color4').onclick = changeColor4;
document.getElementById('color5').onclick = changeColor5;
document.getElementById('color6').onclick = changeColor6;
document.getElementById('color7').onclick = changeColor7;
document.getElementById('color8').onclick = changeColor8;
document.getElementById('color9').onclick = changeColor9;
document.getElementById('color10').onclick = changeColor10;
document.getElementById('color11').onclick = changeColor11;

document.getElementById('color12').onclick = changeColor12;
document.getElementById('color13').onclick = changeColor13;
document.getElementById('color14').onclick = changeColor14;
document.getElementById('color15').onclick = changeColor15;
document.getElementById('color16').onclick = changeColor16;
document.getElementById('color17').onclick = changeColor17;
document.getElementById('color18').onclick = changeColor18;
document.getElementById('color19').onclick = changeColor19;
document.getElementById('color20').onclick = changeColor20;
document.getElementById('color21').onclick = changeColor21;
document.getElementById('color22').onclick = changeColor22;


let m = document.querySelector('.select__image');
let k = document.querySelector('.select__edge');

function changeColor1() {
    m.src = "./images/carpet-select/mainColor/1.png";
}
function changeColor2() {
    m.src = "./images/carpet-select/mainColor/2.png";
}
function changeColor3() {
    m.src = "./images/carpet-select/mainColor/3.png";
}
function changeColor4() {
    m.src = "./images/carpet-select/mainColor/4.png";
}
function changeColor5() {
    m.src = "./images/carpet-select/mainColor/5.png";
}
function changeColor6() {
    m.src = "./images/carpet-select/mainColor/6.png";
}
function changeColor7() {
    m.src = "./images/carpet-select/mainColor/7.png";
}
function changeColor8() {
    m.src = "./images/carpet-select/mainColor/8.png";
}
function changeColor9() {
    m.src = "./images/carpet-select/mainColor/9.png";
}
function changeColor10() {
    m.src = "./images/carpet-select/mainColor/10.png";
}
function changeColor11() {
    m.src = "./images/carpet-select/mainColor/11.png";
}


function changeColor12() {
    k.src = "./images/carpet-select/edging/1.png";
}
function changeColor13() {
    k.src = "./images/carpet-select/edging/2.png";
}
function changeColor14() {
    k.src = "./images/carpet-select/edging/3.png";
}
function changeColor15() {
    k.src = "./images/carpet-select/edging/4.png";
}
function changeColor16() {
    k.src = "./images/carpet-select/edging/5.png";
}
function changeColor17() {
    k.src = "./images/carpet-select/edging/6.png";
}
function changeColor18() {
    k.src = "./images/carpet-select/edging/7.png";
}
function changeColor19() {
    k.src = "./images/carpet-select/edging/8.png";
}
function changeColor20() {
    k.src = "./images/carpet-select/edging/9.png";
}
function changeColor21() {
    k.src = "./images/carpet-select/edging/10.png";
}
function changeColor22() {
    k.src = "./images/carpet-select/edging/11.png";
}








// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementById("myBtn");
let btn1 = document.getElementById("myBtn1");
let btn2 = document.getElementById("myBtn2");
let closeBtn = document.getElementById('closeBtn');
let closeBtn1 = document.getElementById('closeBtn1');

// // Get the <span> element that closes the modal
// let span = document.getElementsByClassName("close")[0];

let body = document.querySelector('body');

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
    body.classList.toggle('active');
}
btn1.onclick = function() {
    modal.style.display = "block";
    body.classList.toggle('active');
}
btn2.onclick = function() {
    modal.style.display = "block";
    body.classList.toggle('active');
}

// // When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
    body.classList.remove('active')
}
closeBtn1.onclick = function() {
    modal.style.display = "none";
    body.classList.remove('active')
}

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

function validation() {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let errorMessage = document.getElementById('error-message');
    let successMessage = document.getElementById('success-message');
    let sendBtn = document.getElementById('sendBtn');
    let text;

    errorMessage.style.padding = '10px';

    if(name.length < 2) {
        text = 'Please, Enter Valid Name';
        errorMessage.innerHTML = text;
        return false;
    }

    if(phone.length < 18) {
        text = 'Please, Enter Valid Phone Number';
        errorMessage.innerHTML = text;
        return false;
    }
    sendBtn.onclick = function() {
        text = 'Your request has been sent';
        errorMessage.style.display = 'none';
        successMessage.style.padding = '10px';
        successMessage.innerHTML = text;
        return true;
    }
}

const myForm = document.getElementById('myform');
myForm.addEventListener('submit', (e) => {
e.preventDefault();

const request = new XMLHttpRequest();

request.open('post', '/call_me');
request.onload = function() {
    console.log(request.responseText);
}
request.send(new FormData(myForm));
});


let lastScrollTop = 0;
navbar = document.getElementById('header');
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-70px';
    } else {
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
})


$(document).ready(function(){
    $('#phone').mask('+38(000) 000 00 00');
});



function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("closed");
  
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
}
