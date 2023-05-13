$(document).ready(function() {
  $('.book').on('swipeleft', function() {
    $(this).animate({ scrollLeft: '+=800' }, 500);
  });
  
  $('.book').on('swiperight', function() {
    $(this).animate({ scrollLeft: '-=800' }, 500);
  });
});
