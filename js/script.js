const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has_fade');
const infoEl = document.querySelector('#infoButton');


btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');
    
    if(header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })
    }
    else{ //open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        })
    }

    
});

infoEl.addEventListener('click', function(){
    console.log('click info');

    if(infoEl.classList.contains('info')){
        infoEl.classList.add('fade-in');
        infoEl.classList.add('info-expand');
        infoEl.classList.remove('info');
    }
    else{

        
        infoEl.classList.remove('fade-in');
        infoEl.classList.remove('info-expand');
        infoEl.classList.add('info');
        
        
    }



});

