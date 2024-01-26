// Circles Growing & Shrinking

const blueCircle = document.querySelector('.blue-circle');
const orangeCircle = document.querySelector('.orange-circle');
const homeTitles = document.querySelector('.home-titles');
const nameRole = document.querySelector('.name-role')

function enlarge() {
  blueCircle.style.width = '550px';
  blueCircle.style.height = '550px';
  orangeCircle.style.width = '550px';
  orangeCircle.style.height = '550px';
}

function shrink() {
  blueCircle.style.width = '450px';
  blueCircle.style.height = '450px';
  orangeCircle.style.width = '450px';
  orangeCircle.style.height = '450px';
}

homeTitles.addEventListener('mouseover', enlarge);
nameRole.addEventListener('mouseover', enlarge);

homeTitles.addEventListener('mouseleave', shrink);
nameRole.addEventListener('mouseleave', shrink);

// Circles Disappearing

window.addEventListener('scroll', function() {
  let yOffset = window.scrollY;
  const cvPage = document.querySelector('.cv-page');

  let opacity = 1 - yOffset / 50;

  opacity = Math.max(0, Math.min(1, opacity));

  blueCircle.style.opacity = opacity;
  orangeCircle.style.opacity = opacity;
});
