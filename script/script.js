const header = document.querySelector(".navbar")
const navbarCollapse = document.querySelector(".navbar-collapse");
const navbarToggler = document.querySelector(".navbar-toggler");

window.onscroll = function() {
    var top = window.scrollY;
    if (top >= 100) {
        header.classList.add("navbarDark")
    } else {
        header.classList.remove("navbarDark");
    }
}

// Smooth scrolling for anchor links
document.addEventListener('click', function (event) {
    if (event.target.matches('a[href^="#"]')) {
      event.preventDefault();
      var target = document.querySelector(event.target.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });

// Function to close the navbar
const closeNavbar = () => {
  if (navbarCollapse.classList.contains("show")) {
    navbarCollapse.classList.remove("show");
  }
};

// Toggle navbar collapse on hamburger icon click
navbarToggler.addEventListener("click", function(event) {
    event.preventDefault();
    navbarCollapse.classList.toggle("show");
  });
  

// Close navbar when clicking anywhere else on the page
window.addEventListener("click", (event) => {
  if (!event.target.closest(".navbar")) {
    closeNavbar();
  }
});

// Close navbar on scroll
window.addEventListener("scroll", () => {
  closeNavbar();
});

  