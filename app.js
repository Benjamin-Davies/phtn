(function() {
  'use strict';

  function updateScroll() {
    document.querySelectorAll('section').forEach(sec => {
      sec.querySelectorAll('.fg-img').forEach(img => {
        img.style.transform = `translateY(${(window.scrollY - sec.offsetTop) /
          -10}px)`;
      });
    });
  }

  updateScroll();
  document.addEventListener('scroll', updateScroll);
})();
