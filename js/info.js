const infoEl = document.querySelector('#infoButton');

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

