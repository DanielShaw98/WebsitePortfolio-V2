// Hide/Show Navbar & Change Background Color

const body = document.querySelector('body');
const navbar = document.getElementById('navbar-container');

window.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    navbar.style.opacity = '0.9';
  } else {
    navbar.style.opacity = '0';
  }

  if (window.scrollY >= 0 && window.scrollY < 1000) {
    body.style.backgroundColor = '#1A191D';
    navbar.style.backgroundColor = '#1A191D';
  } else {
    body.style.backgroundColor = 'rgba(26, 25, 29, 0.95)';
    navbar.style.backgroundColor = '#252428';
  }
});
