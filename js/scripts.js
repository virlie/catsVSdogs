$(document).ready(function() {
  $("img#lokipic").click(function(event) {
    event.preventDefault();
    $("p").show();
  });
  $("img#fredpic").click(function(event) {
    $("p").show();
  });
});
