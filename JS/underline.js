// Underline Extension

document.addEventListener('DOMContentLoaded', function () {
  const underlineCv = document.querySelector('.underline-cv');
  const underlineSupperclub = document.querySelector('.underline-supperclub');

  function updateUnderline() {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const percentage = (scrollPosition / maxScroll) * 200;

      // CV Underline

      let cvWidth = percentage;
      const maxWidth = 95.5;
      if (cvWidth > maxWidth) {
          cvWidth = maxWidth;
      }
      underlineCv.style.width = `${cvWidth}%`;

      // SupperClub Underline

      let supperclubWidth = percentage - 80;
      if (supperclubWidth > maxWidth) {
        supperclubWidth = maxWidth;
      }
      underlineSupperclub.style.width = `${supperclubWidth}%`;
  }

  window.addEventListener('scroll', updateUnderline);
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
