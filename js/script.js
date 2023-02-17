
 AOS.init();

window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.background = "#EA8FEA";
  } else {
   
    document.getElementById("navbar").style.background = "#B9F3E4";
  }
}


$(document).ready(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1200
  });
});

