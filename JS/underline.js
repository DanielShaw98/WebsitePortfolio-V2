// Underline Extension

document.addEventListener('DOMContentLoaded', function () {
  const underlineCv = document.querySelector('.underline-cv');
  const underlineSupperclub = document.querySelector('.underline-supperclub');
  const underlineVloyal = document.querySelector('.underline-vloyal');

  function updateUnderline() {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const percentage = (scrollPosition / maxScroll) * 400;

      // CV Underline

      let cvWidth = percentage;
      const maxWidth = 95.5;
      if (cvWidth > maxWidth) {
          cvWidth = maxWidth;
      }
      underlineCv.style.width = `${cvWidth}%`;

      // SupperClub Underline

      let supperclubWidth = percentage - 85;
      if (supperclubWidth > maxWidth) {
        supperclubWidth = maxWidth;
      }
      underlineSupperclub.style.width = `${supperclubWidth}%`;

      // Vloyal Underline

      let vloyalWidth = percentage - 200;
      if (vloyalWidth > maxWidth) {
        vloyalWidth = maxWidth;
      }
      underlineVloyal.style.width = `${vloyalWidth}%`;
  }

  window.addEventListener('scroll', updateUnderline);
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
