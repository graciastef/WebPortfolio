function checkForVisibility() {
    var texts= document.querySelectorAll(".textScroll");
    texts.forEach(function(texts) {
      if (isElementInViewport(texts)) {
        texts.classList.add("textVisible");
      } else {
        if(texts.length > 0){
          texts.classList.remove("textVisible");
        }
      }
    });
  }
  
  function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
  }
  
  if (window.addEventListener) {
    addEventListener('DOMContentLoaded', checkForVisibility, false); 
    addEventListener('load', checkForVisibility, false);
    addEventListener('scroll', checkForVisibility, false);
  }