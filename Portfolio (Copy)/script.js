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

  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("message-error").textContent = "";
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    let valid = true;
  
    if (!name) {
      document.getElementById("name-error").textContent = "Name is required.";
      valid = false;
    }
  
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email || !emailRegex.test(email)) {
      document.getElementById("email-error").textContent = "Please enter a valid email.";
      valid = false;
    }
  
    if (!message) {
      document.getElementById("message-error").textContent = "Message is required.";
      valid = false;
    }
  
    if (valid) {
      document.getElementById("contact-form").reset(); 
      document.getElementById("thank-you-message").style.display = "block"; 
      setTimeout(() => {
        document.getElementById("thank-you-message").style.display = "none"; 
      }, 3000);
    }
  });