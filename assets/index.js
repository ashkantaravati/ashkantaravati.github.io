$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

var burger_is_open=false;

document.addEventListener("DOMContentLoaded", function() { 
  document.getElementById("navbar-toggle").addEventListener ("click",  function () {
    let nav = document.getElementById('main-nav-burger');
    let menu = document.getElementById('main-nav-menu');
    if(!burger_is_open) {
      nav.classList.add('is-active');
      menu.classList.add('is-active');
      burger_is_open=true;
    } else {
      nav.classList.remove('is-active');
      menu.classList.remove('is-active');
      burger_is_open=false;
    }
});
});
  
