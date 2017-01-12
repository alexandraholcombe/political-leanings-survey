$(document).ready(function() {
  $("#survey form").submit(function(event) {
  var wallSelect = parseInt($("#wall").val());
  var climateSelect = parseInt($("#climate").val());
  var healthSelect = parseInt($("#health").val());
  var gunSelect = parseInt($("#gun").val());
  var marriageSelect = parseInt($("#marriage").val());


  event.preventDefault();
  });
});
