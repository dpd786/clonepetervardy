

$("#navSearchLink").on('click', function() {
  $("#navMenuLink").removeClass("fColor");
  $(".third").removeClass("arrowpointer");
  $(this).toggleClass("fColor");

  $("#menuDiv").slideUp(300, function() {
    $(".search-dropdown-content").slideToggle(300);
    $(".first").toggleClass("arrowpointer");
  });
});

$("#navMenuLink").on('click', function() {
  $("#navSearchLink").removeClass("fColor");
  $(".first").removeClass("arrowpointer");
  $(this).toggleClass("fColor");

  $(".search-dropdown-content").slideUp(300, function() {
    $("#menuDiv").slideToggle(300);
    $(".third").toggleClass("arrowpointer");
  });
});
