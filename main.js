$("#navSearchLink").on('click', function() {
  $(this).toggleClass("fColor");
  $(".search-dropdown-content").slideToggle(300);
});

$("#navMenuLink").on('click', function() {
  $(this).toggleClass("fColor");
  $("#menuDiv").slideToggle(300);
});
