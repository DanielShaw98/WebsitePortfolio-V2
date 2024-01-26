const blueCircle = document.querySelector('.blue-circle');
const orangeCircle = document.querySelector('.orange-circle');
const titles = document.querySelector('.titles');

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

titles.addEventListener('mouseover', enlarge);
titles.addEventListener('mouseover', enlarge);

titles.addEventListener('mouseleave', shrink);
titles.addEventListener('mouseleave', shrink);
