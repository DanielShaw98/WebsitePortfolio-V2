// Load Navbar Partial

$(document).ready(function () {
  $.ajax({
      url: 'navbar.html',
      type: 'GET',
      dataType: 'html',
      success: function (data) {
          $('#navbar-container').html(data);
      },
      error: function () {
          console.error('Error loading navbar.html');
      }
  });
});
