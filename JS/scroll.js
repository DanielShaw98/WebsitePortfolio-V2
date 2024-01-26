const body = document.querySelector('body');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 0 && window.scrollY < 1000) {
    body.style.backgroundColor = '#1A191D';
  } else {
    body.style.backgroundColor = 'rgba(26, 25, 29, 0.95)';
  }
});
