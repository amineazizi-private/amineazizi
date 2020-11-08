window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   var   w=window,
         d=document,
         e=d.documentElement,
         g=d.getElementsByTagName('body')[0],
         x=w.innerWidth||e.clientWidth||g.clientWidth;

   if(x > 768) {
      if (window.pageYOffset > 80) {
         document.getElementById("navbar-container").classList.add('sticky-header');
      } 
      if (window.pageYOffset < 70) {
         document.getElementById("navbar-container").classList.remove('sticky-header');
      }
   }
}

