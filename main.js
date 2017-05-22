/*var $x = $(".navbar li div");
$x.on("click", function() {
  $x.removeClass("fColor");
  $(this).addClass("fColor");
});
*/

$("#navSearchLink").on('click', function() {
  $("#menuDiv").slideUp(300, function() {
    $(".search-dropdown-content").slideToggle(300);
  });
  $("#navMenuLink").removeClass("fColor");
  $(this).toggleClass("fColor");
});

$("#navMenuLink").on('click', function() {
  $(".search-dropdown-content").slideUp(300, function() {
    $("#menuDiv").slideToggle(300);
  });
  $("#navSearchLink").removeClass("fColor");
  $(this).toggleClass("fColor");
});
