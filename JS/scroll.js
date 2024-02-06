// Hide/Show Navbar & Change Background Color

const body = document.querySelector('body');
const navbar = document.getElementById('navbar-container');
const dropdown = document.querySelector('.dropdown-content');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 0 && window.scrollY < 700) {
    body.style.backgroundColor = '#1A191D';
    navbar.style.backgroundColor = '#1A191D';
    navbar.style.opacity = '0';
  } else {
    body.style.backgroundColor = 'rgba(26, 25, 29, 0.95)';
    navbar.style.backgroundColor = '#252428';
    navbar.style.opacity = '0.9';
  }
});
