// Underline Extension

document.addEventListener('DOMContentLoaded', function () {
  const underlineCv = document.querySelector('.underline-cv');
  const underlineSupperclub = document.querySelector('.underline-supperclub');
  const underlineVloyal = document.querySelector('.underline-vloyal');
  const underlineContact = document.querySelector('.underline-contact');

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

      let supperclubWidth = percentage - 70;
      if (supperclubWidth > maxWidth) {
        supperclubWidth = maxWidth;
      }
      underlineSupperclub.style.width = `${supperclubWidth}%`;

      // Vloyal Underline

      let vloyalWidth = percentage - 175;
      if (vloyalWidth > maxWidth) {
        vloyalWidth = maxWidth;
      }
      underlineVloyal.style.width = `${vloyalWidth}%`;

      // Contact Underline

      let contactWidth = percentage - 320;
      if (contactWidth > maxWidth) {
        contactWidth = maxWidth;
      }
      underlineContact.style.width = `${contactWidth}%`;
  }

  window.addEventListener('scroll', updateUnderline);
});
