document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');

      const icon = hamburger.querySelector("i");
        if (navLinks.classList.contains("open")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times"); 
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars"); 
        }
    });
  });