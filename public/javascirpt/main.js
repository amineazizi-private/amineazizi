window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   //Sticky navigation menu function
   var   w=window,
         d=document,
         e=d.documentElement,
         g=d.getElementsByTagName('body')[0],
         x=w.innerWidth||e.clientWidth||g.clientWidth;

   if(x > 768) {
      if (window.pageYOffset > 60) {
         document.getElementById("navbar-container").classList.add('sticky-header');
      } 
      if (window.pageYOffset < 50) {
         document.getElementById("navbar-container").classList.remove('sticky-header');
      }
   }
}

window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`.article-summary-content li a[href="#${id}"]`).classList.add('title-focus');
			} else {
				document.querySelector(`.article-summary-content li a[href="#${id}"]`).classList.remove('title-focus');
			}
		});
	});

	// Track all second headers that have an `id` applied
	document.querySelectorAll('h2[id]').forEach((h2) => {
		observer.observe(h2);
	});
	
});
