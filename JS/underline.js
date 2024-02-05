// CV Underline

document.addEventListener('DOMContentLoaded', function () {
  const underlineCv = document.querySelector('.underline-cv');

  function updateUnderline() {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const percentage = (scrollPosition / maxScroll) * 100;

      let newWidth = 10 + percentage;

      const maxWidth = 95.5;
      if (newWidth > maxWidth) {
          newWidth = maxWidth;
      }

      underlineCv.style.width = `${newWidth}%`;
  }

  window.addEventListener('scroll', updateUnderline);
});

// Projects Underline

document.addEventListener('DOMContentLoaded', function () {
  const underlineProjects = document.querySelector('.underline-projects');

  function extend() {
    underlineProjects.style.transition = 'width 0.5s ease-in-out';
    underlineProjects.style.width = '600px';
  }

  function revert() {
    underlineProjects.style.transition = 'width 0.5s ease-in-out';
    underlineProjects.style.width = '550px';
  }

    setTimeout(function () {
      extend();
      setTimeout(revert, 500);
    }, 250);
});


// SupperClub Underline

document.addEventListener('DOMContentLoaded', function () {
  const underlineSupperclub = document.querySelector('.underline-supperclub');

  function extend() {
    underlineSupperclub.style.transition = 'width 0.5s ease-in-out';
    underlineSupperclub.style.width = '625px';
  }

  function revert() {
    underlineSupperclub.style.transition = 'width 0.5s ease-in-out';
    underlineSupperclub.style.width = '575px';
  }

    setTimeout(function () {
      extend();
      setTimeout(revert, 500);
    }, 250);
});

// Vloyal Underline

document.addEventListener('DOMContentLoaded', function () {
  const underlineVloyal = document.querySelector('.underline-vloyal');

  function extend() {
    underlineVloyal.style.transition = 'width 0.5s ease-in-out';
    underlineVloyal.style.width = '350px';
  }

  function revert() {
    underlineVloyal.style.transition = 'width 0.5s ease-in-out';
    underlineVloyal.style.width = '300px';
  }

    setTimeout(function () {
      extend();
      setTimeout(revert, 500);
    }, 250);
});

// Contact Underline

document.addEventListener('DOMContentLoaded', function () {
  const underlineContact = document.querySelector('.underline-contact');

  function extend() {
    underlineContact.style.transition = 'width 0.5s ease-in-out';
    underlineContact.style.width = '610px';
  }

  function revert() {
    underlineContact.style.transition = 'width 0.5s ease-in-out';
    underlineContact.style.width = '560px';
  }

    setTimeout(function () {
      extend();
      setTimeout(revert, 500);
    }, 250);
});
