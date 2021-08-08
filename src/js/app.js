(function() {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    
    if(scrollTop > window.innerHeight / 2) {
      document.body.classList.add('theme-light');
    } else {
      document.body.classList.remove('theme-light');
    }
  });

})();